param(
  [Parameter(Mandatory = $true)][string]$Pdf,
  [Parameter(Mandatory = $true)][string]$Output,
  [ValidateSet('HANJA', 'ROMANIZATION')][string]$DocumentType = 'HANJA',
  [int]$Dpi = 180,
  [int]$FirstPage = 1,
  [int]$LastPage = 0,
  [string]$DebugWordsOutput = ''
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime

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
  $generic = $method.MakeGenericMethod($ResultType)
  $task = $generic.Invoke($null, @($Operation))
  $task.Wait()
  return $task.Result
}

function Get-Sha256([string]$Path) {
  return (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash.ToLowerInvariant()
}

function Get-OcrWords([string]$ImagePath, [string]$LanguageTag = 'ko') {
  $file = Await-WinRt ($StorageFile::GetFileFromPathAsync($ImagePath)) $StorageFile
  $stream = Await-WinRt ($file.OpenAsync($FileAccessMode::Read)) $RandomAccessStream
  $decoder = Await-WinRt ($BitmapDecoder::CreateAsync($stream)) $BitmapDecoder
  $bitmap = Await-WinRt ($decoder.GetSoftwareBitmapAsync()) $SoftwareBitmap
  $engine = $OcrEngine::TryCreateFromLanguage($Language::new($LanguageTag))
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
  }
}

function Get-HanjaRows($Page, [int]$PageNumber) {
  $labels = @($Page.words |
    Where-Object {
      $_.x -lt ($Page.width * 0.18) -and
      $_.y -gt ($Page.height * 0.18) -and
      $_.y -lt ($Page.height * 0.93) -and
      $_.text -match '^\p{IsHangulSyllables}$'
    } |
    Sort-Object y)
  $rows = @()

  for ($index = 0; $index -lt $labels.Count; $index += 1) {
    $label = $labels[$index]
    $top = if ($index -eq 0) { $Page.height * 0.18 } else { ($labels[$index - 1].y + $label.y) / 2 }
    $bottom = if ($index -eq $labels.Count - 1) { $Page.height * 0.93 } else { ($label.y + $labels[$index + 1].y) / 2 }
    $rowWords = @($Page.words | Where-Object {
      $_.y -ge $top -and $_.y -lt $bottom -and $_.x -gt ($Page.width * 0.13)
    } | Sort-Object x)
    $rowText = ($rowWords.text -join ' ')
    $characters = [regex]::Matches($rowText, '\p{IsCJKUnifiedIdeographs}') |
      ForEach-Object { $_.Value } |
      Select-Object -Unique
    foreach ($character in $characters) {
      $rows += [pscustomobject]@{
        hangul = $label.text
        hanja = $character
        reading = $label.text
        meaningKo = $null
        section = 'official_table'
        page = $PageNumber
        reviewStatus = 'ocr'
        metadata = @{ extraction = 'windows_ocr'; rawRow = $rowText }
      }
    }
  }
  return $rows
}

function Get-RomanizationRows($Page, [int]$PageNumber) {
  $hangulWords = @($Page.words | Where-Object {
    $_.x -gt ($Page.width * 0.15) -and
    $_.x -lt ($Page.width * 0.40) -and
    $_.y -gt ($Page.height * 0.18) -and
    $_.y -lt ($Page.height * 0.92) -and
    $_.text -match '^\p{IsHangulSyllables}+$'
  } | Sort-Object y)
  $rows = @()
  foreach ($hangul in $hangulWords) {
    $centerY = $hangul.y + ($hangul.height / 2)
    $roman = $Page.words | Where-Object {
      $_.x -gt ($Page.width * 0.38) -and
      $_.x -lt ($Page.width * 0.66) -and
      [Math]::Abs(($_.y + ($_.height / 2)) - $centerY) -lt [Math]::Max(18, $hangul.height)
    } | Sort-Object x | Select-Object -First 1
    if ($roman -and $roman.text -match '^[A-Za-z-]+$') {
      $surnameUsage = $Page.words | Where-Object {
        $_.x -gt ($Page.width * 0.60) -and
        $_.x -lt ($Page.width * 0.78) -and
        $_.text -eq '사용' -and
        [Math]::Abs(($_.y + ($_.height / 2)) - $centerY) -lt [Math]::Max(18, $hangul.height)
      } | Select-Object -First 1
      $givenNameUsage = $Page.words | Where-Object {
        $_.x -gt ($Page.width * 0.78) -and
        $_.text -eq '사용' -and
        [Math]::Abs(($_.y + ($_.height / 2)) - $centerY) -lt [Math]::Max(18, $hangul.height)
      } | Select-Object -First 1
      $rows += [pscustomobject]@{
        hangul = $hangul.text
        romanization = $roman.text.ToUpperInvariant()
        surnameUsable = [bool]$surnameUsage
        givenNameUsable = [bool]$givenNameUsage
        page = $PageNumber
        reviewStatus = 'ocr'
        metadata = @{ extraction = 'windows_ocr' }
      }
    }
  }
  return $rows
}

$pdfPath = (Resolve-Path -LiteralPath $Pdf).Path
$outputPath = [IO.Path]::GetFullPath((Join-Path (Get-Location) $Output))
$outputDir = Split-Path -Parent $outputPath
[IO.Directory]::CreateDirectory($outputDir) | Out-Null
$workDir = Join-Path ([IO.Path]::GetTempPath()) ("naminglink-ocr-" + [guid]::NewGuid())
[IO.Directory]::CreateDirectory($workDir) | Out-Null

$poppler = 'C:\Users\white\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe'
if (-not (Test-Path -LiteralPath $poppler)) {
  $poppler = (Get-Command pdftoppm -ErrorAction Stop).Source
}

$arguments = @('-png', '-r', "$Dpi", '-f', "$FirstPage")
if ($LastPage -gt 0) { $arguments += @('-l', "$LastPage") }
$arguments += @($pdfPath, (Join-Path $workDir 'page'))
& $poppler @arguments
if ($LASTEXITCODE -ne 0) { throw "PDF rendering failed with exit code $LASTEXITCODE" }

try {
  $allRows = @()
  $images = @(Get-ChildItem -LiteralPath $workDir -Filter 'page-*.png' | Sort-Object Name)
  for ($index = 0; $index -lt $images.Count; $index += 1) {
    $pageNumber = $FirstPage + $index
    $ocr = Get-OcrWords $images[$index].FullName 'ko'
    if ($DebugWordsOutput -and $index -eq 0) {
      $debugPath = [IO.Path]::GetFullPath((Join-Path (Get-Location) $DebugWordsOutput))
      [IO.Directory]::CreateDirectory((Split-Path -Parent $debugPath)) | Out-Null
      [IO.File]::WriteAllText($debugPath, ($ocr | ConvertTo-Json -Depth 5), [Text.UTF8Encoding]::new($false))
    }
    $pageRows = if ($DocumentType -eq 'HANJA') {
      Get-HanjaRows $ocr $pageNumber
    } else {
      Get-RomanizationRows $ocr $pageNumber
    }
    $allRows += $pageRows
    Write-Progress -Activity "OCR $DocumentType" -Status "$pageNumber page" -PercentComplete ((($index + 1) / $images.Count) * 100)
  }

  $deduplicated = if ($DocumentType -eq 'HANJA') {
    @($allRows | Sort-Object hangul, hanja -Unique)
  } else {
    @($allRows | Sort-Object hangul, romanization -Unique)
  }
  $payload = [ordered]@{
    source = [ordered]@{
      fileName = [IO.Path]::GetFileName($pdfPath)
      sha256 = Get-Sha256 $pdfPath
      documentType = $DocumentType
      extraction = 'windows_ocr'
      firstPage = $FirstPage
      lastPage = if ($LastPage -gt 0) { $LastPage } else { $FirstPage + $images.Count - 1 }
    }
    entries = $deduplicated
    extractedCount = $deduplicated.Count
  }
  [IO.File]::WriteAllText($outputPath, ($payload | ConvertTo-Json -Depth 8), [Text.UTF8Encoding]::new($false))
  Write-Output ([ordered]@{
    ok = $true
    documentType = $DocumentType
    extractedCount = $deduplicated.Count
    output = $outputPath
    firstPage = $FirstPage
    lastPage = if ($LastPage -gt 0) { $LastPage } else { $FirstPage + $images.Count - 1 }
  } | ConvertTo-Json -Compress)
}
finally {
  if (Test-Path -LiteralPath $workDir) { Remove-Item -LiteralPath $workDir -Recurse -Force }
}
