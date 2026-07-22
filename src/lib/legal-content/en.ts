import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Effective date",
    referenceDate: "As of",
    login: "Log in",
    close: "Close",
  },
  documents: {
    terms: {
      title: "Terms of Service",
      description: `These terms describe the conditions and scope of the ${companyInfo.serviceName} service.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Nature of the Service",
          paragraphs: [
            "Naming-Link is an AI-powered naming studio offering four services: (1) matching Korean names with meaningful Hanja characters, (2) converting Korean names into global names, (3) converting foreign names into Korean names, and (4) transcribing global names into Korean Hangul by pronunciation.",
            "Results are reference material to support naming and interpretation. They do not guarantee eligibility for official registration such as family registries, passports, visas, trademarks, or legal documents.",
          ],
        },
        {
          title: "2. Members and Guests",
          paragraphs: [
            "Name analysis and ad-reward candidate unlocking are available without an account. Sign-up or login is requested only for features that require an account, such as ordering merchandise and viewing order history.",
          ],
        },
        {
          title: "3. AI Results and Your Responsibility to Review",
          paragraphs: [
            "AI recommendations include linguistic, cultural, and traditional references. Before finalizing a name, users should confirm its suitability through relevant authorities, experts, local speakers, and legal or trademark review.",
          ],
        },
        {
          title: "4. Paid Services",
          paragraphs: [
            "The Hanja meaning-matching service offers the following detailed products: (1) detailed explanations for up to 5 candidates plus a comprehensive Hanja analysis: ₩2,900; (2) extended explanations for up to 10 candidates, a comprehensive Hanja analysis, and a keepsake PDF: ₩4,900; (3) details for up to 10 candidates, a comprehensive Hanja analysis, a Saju (Four Pillars) and Five Elements analysis, and a keepsake PDF: ₩9,900.",
            "In the global name conversion, Korean name conversion, and Hangul pronunciation services, a product that unlocks all remaining candidates at once without ads (₩990) may be offered. Until payment features are activated, candidates can only be unlocked through ad rewards.",
            "Paid detailed reports, analysis results, and PDF files remain available for viewing and download for 24 hours after payment, after which they are automatically deleted.",
            "Physical products such as Korean name merchandise may be offered at separate prices and conditions. For every paid product, the product details, price, delivery method, and refund conditions are disclosed on screen before payment.",
          ],
        },
        {
          title: "5. Ad-Reward Features",
          paragraphs: [
            "Unlocking candidates by watching ads applies only after the ad provider confirms a valid reward. Automated ad playback, reward manipulation, and abnormal repeated requests may be restricted.",
          ],
        },
        {
          title: "6. Prohibited Conduct",
          paragraphs: [
            "The following are prohibited: entering another person's personal information without consent, generating names for discriminatory, hateful, or impersonation purposes, automated excessive requests, causing service disruption, and falsely presenting results as officially certified.",
          ],
        },
        {
          title: "7. Limitation of Liability",
          paragraphs: [
            "Except in cases of intent or gross negligence, the company is not liable for indirect damages, loss of expected profits, rejection of official registration, or third-party disputes arising from the use of AI recommendations.",
          ],
        },
        {
          title: "8. Contact",
          paragraphs: [`Service inquiries: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      description: `This policy describes how ${companyInfo.serviceName} handles personal information.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Personal Information We Process",
          paragraphs: [
            "When you use the name services as a guest, your name, date and time of birth, country, language, purpose of use, and pronunciation hints are processed temporarily to generate results. Your inputs and the generated results are not stored in the service database.",
            "When you purchase a paid detailed report, order identifiers, payment status, and the inputs and analysis results needed to generate the report are processed for the retention period (24 hours after payment). Payment method details such as card numbers are handled directly by the payment gateway; the company does not store them.",
            "Only when you use the merchandise ordering feature may the orderer's name, email, phone number, shipping address, payment status, and order processing information additionally be processed.",
            "For service stability and abuse prevention, we may keep minimal operational logs: a de-identified visitor hash that changes daily, request time, service type, free-usage counts, AI token usage, response time, processing status, and ad impression and reward events.",
          ],
        },
        {
          title: "2. Purposes of Processing",
          paragraphs: [
            "Personal information is processed to provide name recommendations based on your inputs, pronunciation analysis, language and cultural analysis by country, free-usage limits, ad-reward verification, customer support, payment and delivery processing, and fraud prevention.",
          ],
        },
        {
          title: "3. Retention and Deletion",
          paragraphs: [
            "Analysis inputs and results are stored in your account only when a logged-in member explicitly chooses to save them, and are deleted when the member deletes them or the purpose of retention ends. Inputs and results of guests, and of members who do not choose to save, are not stored.",
            "The inputs, analysis results, and PDF files of paid detailed reports are automatically deleted 24 hours after payment. Payment and order transaction records are retained separately for the statutory periods required by applicable law.",
            "Shipping details are deleted or de-identified once the period needed for order processing, returns, and dispute resolution has passed.",
          ],
        },
        {
          title: "4. Third Parties and Processors",
          paragraphs: [
            "To operate the service, necessary information may be processed by or entrusted to Supabase (database and authentication), Vercel (hosting), the OpenAI API (AI analysis), advertising networks, the payment gateway (PortOne), and shipping and production partners.",
          ],
        },
        {
          title: "5. International Transfers",
          paragraphs: [
            "Personal information may be processed on servers outside your country during cloud hosting, authentication, AI API calls, advertising, and email delivery. The destination countries, processors, purposes, and retention periods will be disclosed in detail once service providers are finalized.",
          ],
        },
        {
          title: "6. Your Rights",
          paragraphs: [
            "You may request access to, correction of, deletion of, or suspension of processing of your personal information, and may withdraw consent. Requests are received by email at the customer center and processed after identity verification.",
          ],
        },
        {
          title: "7. Privacy Officer",
          paragraphs: [
            `Officer: ${companyInfo.privacyOfficer}`,
            `Email: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Refund and Cancellation Policy",
      description:
        "This policy describes the cancellation and refund standards for digital products and custom-made merchandise.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. General Principles",
          paragraphs: [
            "Once payment features are activated, the refundable scope may vary depending on each product's delivery method, production start time, and download status. Specific conditions are disclosed on the product screen before payment.",
          ],
        },
        {
          title: "2. Hanja Detailed Reports (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "You may cancel after payment as long as AI detailed analysis generation has not started. Once generation is complete and the report can be viewed or downloaded, refunds for a simple change of mind may be restricted.",
            "If content errors, generation failures due to system faults, or payment amount mismatches are confirmed, we will reissue the report or provide a refund. Expiration of the retention period (24 hours after payment) is not grounds for a refund.",
          ],
        },
        {
          title: "3. Unlock All Candidates (₩990)",
          paragraphs: [
            "Unlocking all candidates in the global name conversion, Korean name conversion, and Hangul pronunciation services is digital content delivered immediately upon payment. You may cancel before viewing begins; after viewing, refunds for a simple change of mind may be restricted.",
            "If candidates fail to unlock properly due to a system error, we will re-deliver them or provide a refund.",
          ],
        },
        {
          title: "4. Custom-Made Merchandise",
          paragraphs: [
            "Personalized items can be cancelled until production begins. After production begins, refunds for a simple change of mind may be restricted. Typos, damage, production errors, or shipping problems are handled by exchange, remake, or refund as appropriate after confirmation.",
          ],
        },
        {
          title: "5. Ad-Based Unlocking",
          paragraphs: [
            "Ad-reward benefits are not paid products. If a reward is not granted due to an ad network error, retry within the service or contact the customer center.",
          ],
        },
        {
          title: "6. Contact",
          paragraphs: [`Refund inquiries: ${companyInfo.email}`],
        },
      ],
    },
    pricing: {
      title: "Pricing Guide",
      description:
        "This guide describes the scope of free services and the prices of paid products.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Basic Analysis (Free)",
          paragraphs: [
            "The basic analysis of all four services — Hanja meaning matching, global name conversion, Korean name conversion, and Hangul pronunciation transcription — is free for guests, and daily usage limits may apply.",
          ],
        },
        {
          title: "Ad-Reward Usage",
          paragraphs: [
            "Unlocking candidates after watching an ad is an ad-based benefit provided at no charge. Each ad unlocks the next candidate. Availability may vary by ad inventory, country, device, or ad provider policy.",
          ],
        },
        {
          title: "Hanja Meaning-Matching Detailed Products",
          paragraphs: [
            "Detailed explanations for up to 5 candidates plus a comprehensive Hanja analysis: ₩2,900",
            "Extended explanations for up to 10 candidates, a comprehensive Hanja analysis, and a keepsake PDF: ₩4,900",
            "Details for up to 10 candidates, a comprehensive Hanja analysis, a Saju (Four Pillars) and Five Elements analysis, and a keepsake PDF: ₩9,900",
            "Paid reports and PDFs remain available for viewing and download for 24 hours after payment, after which they are automatically deleted.",
          ],
        },
        {
          title: "Unlock All Candidates",
          paragraphs: [
            "Unlock all remaining candidates at once, without ads, in the global name conversion, Korean name conversion, and Hangul pronunciation services: ₩990 (payment feature in preparation)",
          ],
        },
        {
          title: "Korean Name Merchandise",
          paragraphs: [
            "Physical merchandise such as name stamps is announced separately with per-product prices, shipping fees, and production times.",
          ],
        },
        {
          title: "Before Full Payment Launch",
          paragraphs: [
            "Once payment gateway review, e-commerce business registration, and production partnership terms are finalized, the actual payment amount, shipping fees, production time, and refund conditions will be disclosed again on each product screen.",
          ],
        },
      ],
    },
  },
};

export default content;
