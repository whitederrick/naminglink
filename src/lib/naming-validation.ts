export type NamingFieldErrors = Record<string, string>;

const hangulNamePattern = /^[가-힣]+$/;
const singleHangulPattern = /^[가-힣]$/;
const singleHanjaPattern = /^\p{Script=Han}$/u;

function inputString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateHanjaMeaningInput(
  inputFactors: Record<string, unknown>,
): NamingFieldErrors {
  const errors: NamingFieldErrors = {};
  const familyName = inputString(inputFactors.familyName);
  const givenName = inputString(inputFactors.givenNameHangul);
  const generationUsage = inputString(inputFactors.generationNameUsage);
  const generationSyllable = inputString(inputFactors.generationSyllable);
  const generationHanja = inputString(inputFactors.generationHanja);

  if (!familyName) {
    errors.familyName = "성을 한글로 입력해 주세요.";
  } else if (!hangulNamePattern.test(familyName)) {
    errors.familyName = "성에는 완성형 한글만 입력해 주세요.";
  }

  if (!givenName) {
    errors.givenNameHangul = "이름을 한글로 입력해 주세요.";
  } else if (!hangulNamePattern.test(givenName)) {
    errors.givenNameHangul = "이름에는 완성형 한글만 입력해 주세요.";
  }

  if (generationUsage === "used" && !generationSyllable) {
    errors.generationSyllable = "사용하는 돌림자 한 글자를 입력해 주세요.";
  } else if (generationSyllable && !singleHangulPattern.test(generationSyllable)) {
    errors.generationSyllable = "돌림자 글자는 한글 한 글자로 입력해 주세요.";
  } else if (generationUsage === "used" && givenName && generationSyllable) {
    const occurrenceCount = Array.from(givenName).filter(
      (syllable) => syllable === generationSyllable,
    ).length;

    if (occurrenceCount === 0) {
      errors.generationSyllable =
        "\ub3cc\ub9bc\uc790 \uae00\uc790\ub294 \uc785\ub825\ud55c \uc774\ub984\uc5d0 \ubc18\ub4dc\uc2dc \ud3ec\ud568\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.";
    } else if (occurrenceCount > 1) {
      errors.generationSyllable =
        "\uac19\uc740 \uc74c\uc808\uc774 \uc774\ub984\uc5d0 \ub450 \ubc88 \uc788\uc5b4 \ub3cc\ub9bc\uc790 \uc704\uce58\ub97c \uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";
    }
  }

  if (generationUsage === "used" && !generationHanja) {
    errors.generationHanja = "돌림자에 사용하는 한자 한 글자를 입력해 주세요.";
  } else if (generationHanja && !singleHanjaPattern.test(generationHanja)) {
    errors.generationHanja = "사용 한자는 한자 한 글자로 입력해 주세요.";
  }

  return errors;
}
