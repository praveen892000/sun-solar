import { COMPANY } from "@/lib/company";

/** Default legal page bodies. Overridden by Page rows with slug "privacy-policy" / "terms". */

export const LEGAL_UPDATED = "18 November 2026";

export const PRIVACY_HTML = `
<h2>1. Introduction</h2>
<p>${COMPANY.name} ("Sri Sun Solar", "we", "us") respects your privacy. This policy explains how we collect, use and protect your personal data when you use our website or contact us, in line with the Digital Personal Data Protection Act, 2023 (DPDP Act).</p>
<h2>2. Information we collect</h2>
<ul>
  <li><strong>Personal information:</strong> your name, phone number, email address, EB consumer number and pincode when you submit an enquiry.</li>
  <li><strong>Technical data:</strong> IP address, browser type, device information and pages visited.</li>
  <li><strong>Voluntary submissions:</strong> anything else you choose to share in a message or call.</li>
</ul>
<h2>3. How we use your information</h2>
<ul>
  <li>To respond to your queries and prepare quotes and surveys.</li>
  <li>To install, commission and support your solar system, including subsidy and utility paperwork.</li>
  <li>To send updates and offers, where permitted by law and with your consent.</li>
  <li>To improve our website, keep it secure and meet legal obligations.</li>
</ul>
<h2>4. Cookies and tracking</h2>
<p>We may use cookies and similar technologies to keep the website working and understand how it is used. You can control cookies through your browser settings.</p>
<h2>5. Disclosure to third parties</h2>
<p>We do not sell or rent your personal data. We may share it only in these circumstances:</p>
<ul>
  <li>With utilities, government portals and agencies (such as TANGEDCO and the PM Surya Ghar portal) as needed to process your application and subsidy.</li>
  <li>With installation partners, manufacturers and service providers who work on your project and are bound to keep data confidential.</li>
  <li>With technology providers that host our website or help us run it, under confidentiality obligations.</li>
  <li>Where required by law, court order or a government authority.</li>
  <li>With your explicit consent.</li>
</ul>
<h2>6. Data security and retention</h2>
<p>We use reasonable safeguards to protect your data. We keep it only as long as needed for the purposes above or as the law requires, and then delete or anonymise it.</p>
<h2>7. Your rights</h2>
<p>Under the DPDP Act you may ask to access, correct, withdraw consent for, or erase your personal data, and you may opt out of marketing messages. Write to <a href="mailto:${COMPANY.emails.admin}">${COMPANY.emails.admin}</a>.</p>
<h2>8. Children's privacy</h2>
<p>Our website is not directed at anyone under 18, and we do not knowingly collect data from children.</p>
<h2>9. External links</h2>
<p>Our website may link to third-party sites. We are not responsible for their content or privacy practices.</p>
<h2>10. Updates to this policy</h2>
<p>We may update this policy from time to time. The latest version, with its date, will always be on this page.</p>
<h2>11. Contact</h2>
<p>For privacy questions, email <a href="mailto:${COMPANY.emails.admin}">${COMPANY.emails.admin}</a> or write to ${COMPANY.address.full}.</p>
`;

export const TERMS_HTML = `
<h2>1. About these terms</h2>
<p>These terms govern your use of the Sri Sun Solar website. By using it, you agree to them. If you do not agree, please do not use the site.</p>
<h2>2. Information on this website</h2>
<p>We try to keep the site accurate, but content such as subsidy amounts, product specifications, savings and costs is indicative and may change. Government scheme rules are set by the relevant authorities, and eligibility and subsidy amounts are decided by them.</p>
<h2>3. Quotations and projects</h2>
<p>Any quotation is valid only in writing, for the period stated in it. Final scope, price, timelines and warranty for an installation are set out in the signed proposal or purchase order for your project.</p>
<h2>4. Enquiries and your information</h2>
<p>When you submit an enquiry you confirm that the details you provide are accurate. We use them as described in our <a href="/privacy-policy">Privacy Policy</a>.</p>
<h2>5. Intellectual property</h2>
<p>The content, logos and design of this website belong to Sri Sun Solar or its licensors. Third-party brand names, such as REC, Fronius and Growatt, belong to their owners. You may not copy or reuse our content without permission.</p>
<h2>6. Acceptable use</h2>
<p>You agree not to misuse the site, attempt unauthorised access, introduce harmful code, or submit false or misleading enquiries.</p>
<h2>7. Limitation of liability</h2>
<p>To the extent permitted by law, Sri Sun Solar is not liable for losses arising from reliance on information on this website, or from interruptions to it. Nothing here limits liability that cannot legally be limited.</p>
<h2>8. Changes</h2>
<p>We may update these terms at any time. Continued use of the site means you accept the updated terms.</p>
<h2>9. Governing law</h2>
<p>These terms are governed by the laws of India. Courts at Chennai, Tamil Nadu have jurisdiction over disputes.</p>
<h2>10. Contact</h2>
<p>Questions about these terms: <a href="mailto:${COMPANY.emails.info}">${COMPANY.emails.info}</a> or ${COMPANY.phone}.</p>
`;
