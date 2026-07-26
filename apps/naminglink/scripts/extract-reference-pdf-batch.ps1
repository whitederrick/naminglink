param(
  [Parameter(Mandatory = $true)][string]$Pdf,
  [Parameter(Mandatory = $true)][string]$Output,
  [ValidateSet('HANJA', 'ROMANIZATION')][string]$DocumentType = 'HANJA',
  [int]$Dpi = 240,
  [int]$FirstPage = 1,
  [int]$LastPage = 0,
  [switch]$Resume
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
Add-Type -AssemblyName System.Drawing

$StorageFile = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$FileAccessMode = [Windows.Storage.FileAccessMode, Windows.Storage, ContentType = WindowsRuntime]
$RandomAccessStream = [Windows.Storage.Streams.IRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$BitmapDecoder = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
$SoftwareBitmap = [Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
$Language = [Windows.Globalization.Language, Windows.Globalization, ContentType = WindowsRuntime]
$OcrEngine = [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime]
$OcrResult = [Windows.Media.Ocr.OcrResult, Windows.Foundation, ContentType = WindowsRuntime]

function Await-WinRt($Operation, $ResultType) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 } |
    Select-Object -First 1
  $task = $method.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  $task.Wait()
  return $task.Result
}

function Get-OcrWords([string]$ImagePath) {
  $file = Await-WinRt ($StorageFile::GetFileFromPathAsync($ImagePath)) $StorageFile
  $stream = Await-WinRt ($file.OpenAsync($FileAccessMode::Read)) $RandomAccessStream
  $bitmap = $null
  try {
    $decoder = Await-WinRt ($BitmapDecoder::CreateAsync($stream)) $BitmapDecoder
    $bitmap = Await-WinRt ($decoder.GetSoftwareBitmapAsync()) $SoftwareBitmap
    $engine = $OcrEngine::TryCreateFromLanguage($Language::new('ko'))
    $result = Await-WinRt ($engine.RecognizeAsync($bitmap)) $OcrResult
    $words = foreach ($line in $result.Lines) {
      foreach ($word in $line.Words) {
        [pscustomobject]@{
          text = $word.Text
          x = [double]$word.BoundingRect.X
          y = [double]$word.BoundingRect.Y
          width = [double]$word.BoundingRect.Width
          height = [double]$word.BoundingRect.Height
        }
      }
    }
    return [pscustomobject]@{
      width = [double]$bitmap.PixelWidth
      height = [double]$bitmap.PixelHeight
      words = @($words)
      text = (($result.Lines | ForEach-Object Text) -join ' ')
    }
  }
  finally {
    if ($bitmap) { $bitmap.Dispose() }
    $stream.Dispose()
  }
}

function Save-Crop($Bitmap, [int]$X, [int]$Y, [int]$Width, [int]$Height, [string]$Target, [int]$Scale = 1) {
  $safeX = [Math]::Max(0, [Math]::Min($X, $Bitmap.Width - 1))
  $safeY = [Math]::Max(0, [Math]::Min($Y, $Bitmap.Height - 1))
  $safeWidth = [Math]::Max(1, [Math]::Min($Width, $Bitmap.Width - $safeX))
  $safeHeight = [Math]::Max(1, [Math]::Min($Height, $Bitmap.Height - $safeY))
  $targetBitmap = [Drawing.Bitmap]::new($safeWidth * $Scale, $safeHeight * $Scale)
  $graphics = [Drawing.Graphics]::FromImage($targetBitmap)
  try {
    $graphics.Clear([Drawing.Color]::White)
    $graphics.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage(
      $Bitmap,
      [Drawing.Rectangle]::new(0, 0, $targetBitmap.Width, $targetBitmap.Height),
      [Drawing.Rectangle]::new($safeX, $safeY, $safeWidth, $safeHeight),
      [Drawing.GraphicsUnit]::Pixel
    )
    $targetBitmap.Save($Target, [Drawing.Imaging.ImageFormat]::Png)
  }
  finally {
    $graphics.Dispose()
    $targetBitmap.Dispose()
  }
}

function Find-HorizontalLines($Bitmap) {
  $probes = @(0.09, 0.20, 0.35, 0.50, 0.65, 0.80, 0.91) |
    ForEach-Object { [int]($Bitmap.Width * $_) }
  $hits = @()
  for ($y = [int]($Bitmap.Height * 0.20); $y -lt [int]($Bitmap.Height * 0.92); $y += 1) {
    $dark = 0
    foreach ($x in $probes) {
      $pixel = $Bitmap.GetPixel($x, $y)
      if (($pixel.R + $pixel.G + $pixel.B) -lt 360) { $dark += 1 }
    }
    if ($dark -ge 5) { $hits += $y }
  }

  $groups = @()
  foreach ($hit in $hits) {
    if (-not $groups.Count -or $hit -gt ($groups[-1][-1] + 2)) {
      $groups += ,@($hit)
    } else {
      $groups[-1] += $hit
    }
  }
  return @($groups | ForEach-Object { [int](($_ | Measure-Object -Average).Average) })
}

function Get-CellText($Bitmap, [double]$Left, [double]$Right, [int]$Top, [int]$Bottom, [string]$Path) {
  Save-Crop $Bitmap ([int]($Bitmap.Width * $Left)) $Top ([int]($Bitmap.Width * ($Right - $Left))) ($Bottom - $Top) $Path 3
  return (Get-OcrWords $Path).text.Trim()
}

function Get-HanjaEntries($Bitmap, [int]$Top, [int]$Bottom, [int]$PageNumber, [string]$WorkDir, [int]$RowNumber) {
  $rowPath = Join-Path $WorkDir ("row-{0:D2}.png" -f $RowNumber)
  Save-Crop $Bitmap ([int]($Bitmap.Width * 0.075)) $Top ([int]($Bitmap.Width * 0.85)) ($Bottom - $Top) $rowPath 1
  $ocr = Get-OcrWords $rowPath
  $label = $ocr.words |
    Where-Object { $_.x -lt ($ocr.width * 0.10) -and $_.text -match '^\p{IsHangulSyllables}$' } |
    Select-Object -First 1 -ExpandProperty text
  if (-not $label) {
    $labelPath = Join-Path $WorkDir ("label-{0:D2}.png" -f $RowNumber)
    $labelText = Get-CellText $Bitmap 0.075 0.145 $Top $Bottom $labelPath
    $label = [regex]::Match($labelText, '\p{IsHangulSyllables}').Value
  }
  if (-not $label) { return @() }

  $rowText = (($ocr.words | Where-Object { $_.x -gt ($ocr.width * 0.10) }).text -join ' ')
  $characters = [regex]::Matches($rowText, '\p{IsCJKUnifiedIdeographs}') |
    ForEach-Object Value |
    Select-Object -Unique
  return @($characters | ForEach-Object {
    [pscustomobject]@{
      hangul = $label
      hanja = $_
      reading = $label
      meaningKo = $null
      section = 'official_table'
      page = $PageNumber
      reviewStatus = 'ocr'
      metadata = @{ extraction = 'windows_ocr_row'; row = $RowNumber }
    }
  })
}

function Get-RomanizationEntry($Bitmap, [int]$Top, [int]$Bottom, [int]$PageNumber, [string]$WorkDir, [int]$RowNumber) {
  $rowPath = Join-Path $WorkDir ("row-{0:D2}.png" -f $RowNumber)
  Save-Crop $Bitmap ([int]($Bitmap.Width * 0.075)) $Top ([int]($Bitmap.Width * 0.85)) ($Bottom - $Top) $rowPath 1
  $ocr = Get-OcrWords $rowPath

  $hangul = $ocr.words |
    Where-Object {
      $_.x -gt ($ocr.width * 0.08) -and $_.x -lt ($ocr.width * 0.35) -and
      $_.text -match '^\p{IsHangulSyllables}$'
    } | Select-Object -First 1 -ExpandProperty text
  if (-not $hangul) {
    $cellPath = Join-Path $WorkDir ("hangul-{0:D2}.png" -f $RowNumber)
    $hangul = [regex]::Match((Get-CellText $Bitmap 0.145 0.37 $Top $Bottom $cellPath), '\p{IsHangulSyllables}').Value
  }

  $romanization = $ocr.words |
    Where-Object {
      $_.x -gt ($ocr.width * 0.35) -and $_.x -lt ($ocr.width * 0.65) -and
      $_.text -match '^[A-Za-z-]+$'
    } | Select-Object -First 1 -ExpandProperty text
  if (-not $romanization) {
    $cellPath = Join-Path $WorkDir ("roman-{0:D2}.png" -f $RowNumber)
    $romanization = [regex]::Match((Get-CellText $Bitmap 0.37 0.62 $Top $Bottom $cellPath), '[A-Za-z-]+').Value
  }

  if (-not $hangul -or -not $romanization) { return $null }
  $surnamePath = Join-Path $WorkDir ("surname-{0:D2}.png" -f $RowNumber)
  $givenPath = Join-Path $WorkDir ("given-{0:D2}.png" -f $RowNumber)
  $surnameText = Get-CellText $Bitmap 0.62 0.78 $Top $Bottom $surnamePath
  $givenText = Get-CellText $Bitmap 0.78 0.925 $Top $Bottom $givenPath

  return [pscustomobject]@{
    hangul = $hangul
    romanization = $romanization.ToUpperInvariant()
    surnameUsable = if ($surnameText -match '\uBBF8\uC0AC\uC6A9') { $false } elseif ($surnameText -match '\uC0AC\uC6A9') { $true } else { $null }
    givenNameUsable = if ($givenText -match '\uBBF8\uC0AC\uC6A9') { $false } elseif ($givenText -match '\uC0AC\uC6A9') { $true } else { $null }
    page = $PageNumber
    reviewStatus = 'ocr'
    metadata = @{ extraction = 'windows_ocr_row'; row = $RowNumber }
  }
}

function Get-Sha256([string]$Path) {
  return (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash.ToLowerInvariant()
}

$pdfPath = (Resolve-Path -LiteralPath $Pdf).Path
$outputPath = [IO.Path]::GetFullPath((Join-Path (Get-Location) $Output))
$outputDir = Split-Path -Parent $outputPath
$checkpointDir = Join-Path $outputDir (([IO.Path]::GetFileNameWithoutExtension($outputPath)) + '-pages')
[IO.Directory]::CreateDirectory($outputDir) | Out-Null
[IO.Directory]::CreateDirectory($checkpointDir) | Out-Null

$poppler = 'C:\Users\white\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe'
if (-not (Test-Path -LiteralPath $poppler)) { $poppler = (Get-Command pdftoppm -ErrorAction Stop).Source }

if ($LastPage -le 0) {
  $pdfInfo = & ([IO.Path]::Combine([IO.Path]::GetDirectoryName($poppler), 'pdfinfo.exe')) $pdfPath
  $pageLine = $pdfInfo | Where-Object { $_ -match '^Pages:' } | Select-Object -First 1
  $LastPage = [int]([regex]::Match($pageLine, '\d+').Value)
}

for ($page = $FirstPage; $page -le $LastPage; $page += 1) {
  $checkpoint = Join-Path $checkpointDir ("page-{0:D4}.json" -f $page)
  if ($Resume -and (Test-Path -LiteralPath $checkpoint)) {
    Write-Output ("SKIP page {0}" -f $page)
    continue
  }

  $pageWork = Join-Path ([IO.Path]::GetTempPath()) ("naminglink-batch-{0}-{1}" -f $page, [guid]::NewGuid())
  [IO.Directory]::CreateDirectory($pageWork) | Out-Null
  try {
    $pagePrefix = Join-Path $pageWork 'page'
    & $poppler -png -r $Dpi -f $page -l $page -singlefile $pdfPath $pagePrefix | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "PDF rendering failed on page $page" }
    $imagePath = "$pagePrefix.png"
    $bitmap = [Drawing.Bitmap]::FromFile($imagePath)
    try {
      $lines = @(Find-HorizontalLines $bitmap)
      $entries = @()
      $rowNumber = 0
      for ($index = 0; $index -lt ($lines.Count - 1); $index += 1) {
        $top = $lines[$index] + 2
        $bottom = $lines[$index + 1] - 2
        if (($bottom - $top) -lt 28) { continue }
        $rowNumber += 1
        if ($DocumentType -eq 'HANJA') {
          $entries += @(Get-HanjaEntries $bitmap $top $bottom $page $pageWork $rowNumber)
        } else {
          $entry = Get-RomanizationEntry $bitmap $top $bottom $page $pageWork $rowNumber
          if ($entry) { $entries += $entry }
        }
      }
      $pagePayload = [ordered]@{
        page = $page
        detectedLines = $lines.Count
        extractedCount = $entries.Count
        entries = $entries
      }
      [IO.File]::WriteAllText($checkpoint, ($pagePayload | ConvertTo-Json -Depth 7), [Text.UTF8Encoding]::new($false))
      Write-Output ("DONE page {0}/{1}: {2} entries, {3} lines" -f $page, $LastPage, $entries.Count, $lines.Count)
    }
    finally { $bitmap.Dispose() }
  }
  catch {
    $errorPayload = [ordered]@{ page = $page; detectedLines = 0; extractedCount = 0; entries = @(); error = $_.Exception.Message }
    [IO.File]::WriteAllText($checkpoint, ($errorPayload | ConvertTo-Json -Depth 4), [Text.UTF8Encoding]::new($false))
    Write-Output ("ERROR page {0}/{1}: {2}" -f $page, $LastPage, $_.Exception.Message)
  }
  finally {
    if (Test-Path -LiteralPath $pageWork) { Remove-Item -LiteralPath $pageWork -Recurse -Force }
  }
}

$pageResults = @(Get-ChildItem -LiteralPath $checkpointDir -Filter 'page-*.json' |
  Sort-Object Name |
  ForEach-Object { Get-Content -LiteralPath $_.FullName -Raw -Encoding utf8 | ConvertFrom-Json })
$allEntries = @($pageResults | ForEach-Object entries)
$deduplicated = if ($DocumentType -eq 'HANJA') {
  @($allEntries | Sort-Object hangul, hanja -Unique)
} else {
  @($allEntries | Sort-Object hangul, romanization -Unique)
}
$sha = Get-Sha256 $pdfPath
$emptyPages = @($pageResults | Where-Object { $_.extractedCount -eq 0 } | ForEach-Object page)
$payload = [ordered]@{
  source = [ordered]@{
    sourceKey = ("official-{0}-{1}" -f $DocumentType.ToLowerInvariant(), $sha.Substring(0, 12))
    title = if ($DocumentType -eq 'HANJA') { 'Official personal-name Hanja table' } else { 'Korean romanization lookup' }
    fileName = [IO.Path]::GetFileName($pdfPath)
    sha256 = $sha
    documentType = $DocumentType
    extraction = 'windows_ocr_row'
    pageCount = $LastPage
    status = 'needs_ocr'
  }
  entries = $deduplicated
  extractedCount = $deduplicated.Count
  audit = [ordered]@{
    processedPages = $pageResults.Count
    emptyPages = $emptyPages
    rawEntryCount = $allEntries.Count
    duplicateCount = $allEntries.Count - $deduplicated.Count
  }
}
[IO.File]::WriteAllText($outputPath, ($payload | ConvertTo-Json -Depth 8), [Text.UTF8Encoding]::new($false))
Write-Output ($payload.audit | ConvertTo-Json -Compress)
