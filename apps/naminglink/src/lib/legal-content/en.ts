import { companyInfo, romanize, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
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
            "The detailed products available through the Hanja meaning-matching service are as follows: (1) detailed descriptions of up to five candidates and a comprehensive Hanja analysis: ₩2,900; (2) expanded descriptions of up to ten candidates, a comprehensive Hanja analysis, and a keepsake PDF: ₩4,900; (3) detailed descriptions of up to ten candidates, a comprehensive Hanja analysis, a Saju (Four Pillars) and Five Elements analysis, and a keepsake PDF: ₩9,900.",
            "The Global Name Conversion, Korean Name Conversion, and Hangul Pronunciation Transcription services may offer an option to unlock all remaining candidates at once without advertisements (₩990 for domestic payments and US$1.99 for international payments). Until payment functionality is available, candidates may be viewed only through advertisement-based rewards.",
            "The following digital products are available for international users: (4) Comprehensive Korean Name Report PDF (US$9.99): name art in the selected font for all recommended candidates, explanations of their meanings, and a Saju (Four Pillars) and Five Elements reference; (5) Hangul Pronunciation Art PDF (US$2.99): name art in the selected font and a pronunciation guide; (6) Name Art Pack PDF (US$1.99): artwork featuring one selected name in each chosen font. The price and the number of fonts included for each product are as displayed on the product page.",
            "Paid detailed reports, analysis results, and PDF files may be viewed and downloaded again for 24 hours after payment. They will be automatically deleted once the storage period expires.",
            "The Korean domestic prices for physical merchandise, including name stamps, are ₩39,000, ₩59,000, and ₩79,000. The applicable terms will be provided for each product.",
            "The international prices for the same physical merchandise are US$39.90, US$59.90, and US$79.90, including international shipping.",
            "The product details, price, delivery method, and refund terms for every paid product will be displayed before payment.",
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
            "When you sign up or log in as a member, your email address and sign-in records (authentication history) are processed.",
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
            "Shipping details for goods orders (orderer name, email, phone number, delivery address, order notes, and the text to be engraved on the stamp) are deleted 90 days after the delivery is completed or the order is cancelled. Information entered for orders abandoned before payment is deleted after 24 hours. Payment and order transaction records remain after this deletion, retained for the statutory periods required by applicable law.",
          ],
        },
        {
          title: "4. Third Parties and Processors",
          paragraphs: [
            "To operate the service, necessary information may be processed by or entrusted to Supabase (database and authentication), Vercel (hosting), the OpenAI API (AI analysis), advertising networks, the payment gateway (PortOne), and shipping and production partners.",
          ],
        },
        {
          title: "5. Cookies and Advertising",
          paragraphs: [
            "The service itself does not use cookies to identify or track visitors. What you enter for a name analysis is never passed to an advertising provider.",
            "This service shows advertising through Google AdSense. In doing so, third-party vendors including Google may store or read cookies in your browser, and Google uses cookies to serve ads based on your visits to this and other sites.",
            "The same cookies are used when you watch a rewarded ad or use the offerwall. The service only learns whether the ad was watched through and that the corresponding reward was granted; it receives no information from the ad provider that could identify you.",
            "You can opt out of personalised advertising in Google Ads Settings (google.com/settings/ads). Opting out does not remove ads — it only makes them less relevant to you. Personalised advertising from third-party vendors generally can be switched off in one place at aboutads.info/choices, and you may also block cookies in your browser settings.",
            "For visitors in the European Economic Area, the United Kingdom and Switzerland, consent is requested through Google’s consent message before any advertising cookie is used.",
          ],
        },
        {
          title: "6. International Transfers of Personal Data",
          paragraphs: [
            "To provide the service, the company transfers personal data abroad (as processing entrustment) as set out below. Transfers are made electronically over the network.",
            "(1) OpenAI, L.L.C. (United States) — Items transferred: analysis inputs such as name, date and time of birth, gender, country, and language — Purpose: AI-based name, pronunciation, and meaning analysis — Retention: for the service period (per OpenAI's policy, API inputs are not used to train models and are retained for up to 30 days for abuse monitoring, then deleted).",
            "(2) Supabase, Inc. (United States) — Items transferred: order and payment status, member email, paid-report inputs and results (24 hours after payment), and orderer name, contact, and shipping address for merchandise orders — Purpose: database, authentication, and storage — Retention: for the service period or each item's retention period.",
            "(3) Vercel, Inc. (United States) — Items transferred: connection and request information sent while using the service — Purpose: application hosting — Retention: for the service period.",
            "You may refuse consent to the international transfer of your personal data; however, because this processing is essential to providing the service, refusal may limit your use of the service.",
          ],
        },
        {
          title: "7. Your Rights",
          paragraphs: [
            "You may request access to, correction of, deletion of, or suspension of processing of your personal information, and may withdraw consent. Requests are received by email at the customer center and processed after identity verification.",
          ],
        },
        {
          title: "8. Privacy Officer",
          paragraphs: [
            `Officer: ${romanize(companyInfo.privacyOfficer)}`,
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
            "Once payment functionality becomes available, the scope of available refunds may vary depending on how each product is provided, when production begins, and whether the product is downloadable. The specific terms will be displayed on the product page before payment.",
          ],
        },
        {
          title: "2. Hanja Detailed Reports",
          paragraphs: [
            "The Korean domestic prices for the detailed Hanja reports are ₩2,900, ₩4,900, and ₩9,900.",
            "Orders may be canceled after payment but before the AI begins generating the detailed analysis. Once the analysis has been generated and is available to view or download, refunds due to a change of mind may be restricted.",
            "If a content error, a generation failure caused by a system fault, or a discrepancy in the payment amount is confirmed, we will reissue the report or provide a refund. Expiry of the retention period (24 hours after payment) is not grounds for a refund.",
          ],
        },
        {
          title: "3. Unlock All Candidates",
          paragraphs: [
            "The Korean domestic price for unlocking all candidates at once is ₩990.",
            "The international price for the same product is US$1.99.",
            "The option to unlock all candidates in the Global Name Conversion, Korean Name Conversion, and Hangul Pronunciation Transcription services is digital content provided immediately after payment. Orders may be canceled before viewing begins. Once the candidates have been viewed, refunds due to a change of mind may be restricted.",
            "If the candidates are not properly unlocked due to a system error, we will provide access again or issue a refund.",
          ],
        },
        {
          title: "4. Global Digital PDF Products",
          paragraphs: [
            "The Comprehensive Korean Name Report (US$9.99), Hangul Pronunciation Art (US$2.99), and Name Art Pack (US$1.99) are digital products generated after payment. Orders may be canceled before PDF generation begins. Once generation is complete and the PDF is available to download, refunds due to a change of mind may be restricted.",
            "If a generation failure, a content error, or a discrepancy in the payment amount is confirmed, we will reissue the product or provide a refund. Expiry of the retention period (24 hours after payment) is not grounds for a refund.",
          ],
        },
        {
          title: "5. Custom-Made Merchandise (Name Stamps, etc.)",
          paragraphs: [
            "The Korean domestic prices for personalized products, including name stamps, are ₩39,000, ₩59,000, and ₩79,000.",
            "The international prices for the same products are US$39.90, US$59.90, and US$79.90, including international shipping.",
            "Personalized products may be canceled before production begins. Once production begins, refunds due to a change of mind may be restricted because the personalized engraving has been finalized. If the product contains a typographical error, arrives damaged, is made incorrectly, or has a delivery issue, we will review the matter and provide an exchange, remake, or refund as appropriate.",
          ],
        },
        {
          title: "6. Ad-Based Unlocking",
          paragraphs: [
            "Benefits provided in exchange for viewing advertisements are not paid products. If a reward is not issued due to an advertising network error, please try again within the service or contact customer support.",
          ],
        },
        {
          title: "7. Contact",
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
            "The basic analysis of all four services — Hanja meaning matching, global name conversion, Korean name conversion, and Hangul pronunciation transcription — is free for guests, and daily usage limits may apply. Only products you can pay for right now are listed below with their prices; products that have not opened yet are not shown.",
          ],
        },
        {
          title: "Ad-Reward Usage",
          paragraphs: [
            "Unlocking candidates after watching an ad is an ad-based benefit provided at no charge. Each ad unlocks the next candidate. Availability may vary by ad inventory, country, device, or ad provider policy. While no ads are being served, those candidates are shown for free without this step.",
          ],
        },
        {
          title: "Hanja Meaning-Matching Detailed Products",
          paragraphs: [
            "Detailed descriptions of up to five candidates and a comprehensive Hanja analysis: ₩2,900",
            "Expanded descriptions of up to ten candidates, a comprehensive Hanja analysis, and a keepsake PDF: ₩4,900",
            "Detailed descriptions of up to ten candidates, a comprehensive Hanja analysis, a Saju (Four Pillars) and Five Elements analysis, and a keepsake PDF: ₩9,900",
            "Paid reports and PDFs may be viewed and downloaded again for 24 hours after payment. They will be automatically deleted afterward.",
          ],
        },
        {
          title: "Unlock All Candidates",
          paragraphs: [
            "Unlock all remaining candidates at once without advertisements in the Global Name Conversion, Korean Name Conversion, and Hangul Pronunciation Transcription services (Korean domestic payment): ₩990",
            "International price for the same product: US$1.99",
          ],
        },
        {
          title: "Global Digital PDF Products",
          paragraphs: [
            "Comprehensive Korean Name Report PDF (name art for all recommended candidates, explanations of their meanings, and a Saju (Four Pillars) and Five Elements reference): US$9.99",
            "Hangul Pronunciation Art PDF (name art in the selected font and a pronunciation guide): US$2.99",
            "Name Art Pack PDF (artwork featuring one selected name in each chosen font): US$1.99",
            "The prices and number of fonts included are as displayed on the relevant product page. PDFs may be downloaded again for 24 hours after payment and will be automatically deleted afterward.",
          ],
        },
        {
          title: "Korean Name Merchandise",
          paragraphs: [
            "Name stamp (Korean domestic payment): ₩39,000 / ₩59,000 / ₩79,000",
            "Name stamp (international payment): US$39.90 / US$59.90 / US$79.90, including international shipping",
            "For other physical merchandise, the price, shipping fee, and production time will be provided separately for each product.",
          ],
        },
        {
          title: "How Prices Are Announced",
          paragraphs: [
            "The payment amount, shipping fee, production time, and refund terms will be displayed again on the product page before payment. If a price in this document differs from the price displayed on the product page, the price on the product page will apply.",
          ],
        },
      ],
    },
  },
};

export default content;
