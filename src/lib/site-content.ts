import { z } from "zod";
import { companyInfo } from "@/lib/company";
import { getLegalLocaleContent } from "@/lib/legal-content";
import { legalDocumentKinds } from "@/lib/legal-content/types";
import { supportedLocales, type Locale } from "@/lib/services";

export { legalDocumentKinds };
export type {
  LegalDocumentKind,
  PolicySectionContent,
  PolicyDocumentContent,
} from "@/lib/legal-content/types";
import type { LegalDocumentKind } from "@/lib/legal-content/types";

export type FooterContent = {
  companyName: string;
  serviceName: string;
  subtitle: string;
  representative: string;
  businessNumber: string;
  mailOrderNumber: string;
  address: string;
  customerCenter: string;
  email: string;
  privacyOfficer: string;
  hostingProvider: string;
  copyrightYear: number;
};

const policySectionSchema = z.object({
  title: z.string().trim().min(1).max(160),
  paragraphs: z.array(z.string().trim().min(1).max(5000)).min(1).max(30),
});

export const policyDocumentSchema = z.object({
  title: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1).max(2000),
  effectiveDate: z.string().date(),
  sections: z.array(policySectionSchema).min(1).max(40),
});

export const footerContentSchema = z.preprocess(
  (value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return value;

    const content = value as Record<string, unknown>;

    const isLegacyContent = typeof content.companyName !== "string";

    const sourceServiceName = isLegacyContent
      ? "Naming-Link"
      : typeof content.serviceName === "string"
        ? content.serviceName
        : "Naming-Link";
    const combinedServiceName = sourceServiceName.match(/^(.+?)\((.+)\)$/);

    return {
      ...content,
      companyName: isLegacyContent
        ? "(주)Platforest"
        : content.companyName,
      serviceName: combinedServiceName?.[1]?.trim() ?? sourceServiceName,
      subtitle:
        content.subtitle ??
        combinedServiceName?.[2]?.trim() ??
        content.studioName ??
        "Global Naming Studio",
      customerCenter: content.customerCenter ?? companyInfo.customerCenter,
    };
  },
  z.object({
    companyName: z.string().trim().min(1).max(120),
    serviceName: z.string().trim().min(1).max(120),
    subtitle: z.string().trim().min(1).max(160),
    representative: z.string().trim().min(1).max(120),
    businessNumber: z.string().trim().min(1).max(120),
    mailOrderNumber: z.string().trim().min(1).max(120),
    address: z.string().trim().min(1).max(500),
    customerCenter: z.string().trim().min(1).max(120),
    email: z.string().trim().email().max(320),
    privacyOfficer: z.string().trim().min(1).max(120),
    hostingProvider: z.string().trim().min(1).max(200),
    copyrightYear: z.number().int().min(2020).max(2100),
  }),
);

export const managedContentRequestSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.enum(legalDocumentKinds),
    locale: z.enum(supportedLocales as [Locale, ...Locale[]]),
    content: policyDocumentSchema,
    action: z.enum(["save_draft", "publish"]),
  }),
  z.object({
    kind: z.literal("footer"),
    locale: z.literal("global"),
    content: footerContentSchema,
    action: z.enum(["save_draft", "publish"]),
  }),
]);

export function getContentKey(
  kind: LegalDocumentKind | "footer",
  locale: Locale | "global",
) {
  return kind === "footer" ? "footer.global" : `legal.${kind}.${locale}`;
}

export const fallbackFooterContent: FooterContent = {
  companyName: "(주)Platforest",
  serviceName: "Naming-Link",
  subtitle: "Global Naming Studio",
  representative: companyInfo.representative,
  businessNumber: companyInfo.businessNumber,
  mailOrderNumber: companyInfo.mailOrderNumber,
  address: companyInfo.address,
  customerCenter: companyInfo.customerCenter,
  email: companyInfo.email,
  privacyOfficer: companyInfo.privacyOfficer,
  hostingProvider: companyInfo.hostingProvider,
  copyrightYear: 2026,
};

export function getFallbackPolicyDocument(
  kind: LegalDocumentKind,
  locale: Locale = "ko",
) {
  return getLegalLocaleContent(locale).documents[kind];
}

export function parseManagedContent(
  kind: LegalDocumentKind | "footer",
  value: unknown,
) {
  return kind === "footer"
    ? footerContentSchema.safeParse(value)
    : policyDocumentSchema.safeParse(value);
}
