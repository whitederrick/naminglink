export const legalDocumentKinds = [
  "terms",
  "privacy",
  "refund",
  "pricing",
] as const;

export type LegalDocumentKind = (typeof legalDocumentKinds)[number];

export type PolicySectionContent = {
  title: string;
  paragraphs: string[];
};

export type PolicyDocumentContent = {
  title: string;
  description: string;
  effectiveDate: string;
  sections: PolicySectionContent[];
};

export type LegalDocumentSet = Record<LegalDocumentKind, PolicyDocumentContent>;

export type LegalPageLabels = {
  effectiveDate: string;
  referenceDate: string;
  login: string;
};

export type LegalLocaleContent = {
  labels: LegalPageLabels;
  documents: LegalDocumentSet;
};
