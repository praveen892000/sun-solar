export type SeedPage = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML
  metaTitle: string;
  metaDescription: string;
};

export const pages: SeedPage[] = [
  // ------------------------------------------------------------------ ABOUT
  {
    slug: "about",
    title: "About Us",
    excerpt:
      "Sri Sun Solar Energiser Pvt Ltd is a MNRE- and TEDA-registered solar EPC company in Chennai and a REC channel partner in India.",
    metaTitle: "About Sri Sun Solar Energiser Pvt Ltd | Solar Company in Chennai",
    metaDescription:
      "Learn about Sri Sun Solar Energiser Pvt Ltd - a MNRE channel partner, TEDA and TNPHC registered solar EPC company in Guindy, Chennai with 12+ years of experience.",
    content: `<h2>Profile</h2>
<p>Sri Sun Solar Energiser Pvt Ltd is an MNRE- and TEDA-registered company, and a TNPHC-registered contractor. We are a channel partner of REC Pte Ltd in India for solar modules, and a REC Certified Solar Professional installer.</p>
<ul>
<li>12+ years of experience</li>
<li>Save money with solar panels</li>
<li>Committed to your success</li>
<li>Safety comes first</li>
<li>Save the planet with clean energy</li>
</ul>

<h2>Our mission</h2>
<p>At Sri Sun Solar, our mission is to deliver premium solar products and services that lower your energy costs, reduce your carbon footprint, and maximise your return on investment. We empower homeowners, businesses and industries to harness clean, renewable energy while contributing to a more sustainable environment.</p>

<h2>What we offer</h2>
<ul>
<li><strong>End-to-end solar solutions:</strong> from initial consultation and site survey to design, supply, installation and commissioning, we provide comprehensive solar PV solutions tailored to your needs.</li>
<li><strong>On-grid and off-grid systems:</strong> we specialise in both rooftop and ground-mounted solar installations for residential, commercial and industrial clients.</li>
<li><strong>Operation &amp; maintenance (O&amp;M):</strong> our expert team ensures the longevity and optimal performance of your solar system with dedicated O&amp;M services.</li>
<li><strong>Subsidy assistance:</strong> we guide you through government subsidy schemes, including the PM Surya Ghar rooftop programme, making solar more affordable for everyone.</li>
<li><strong>Quality assurance:</strong> as partners of leading brands such as REC and Fronius, we stand behind the reliability of our products and workmanship.</li>
</ul>

<h2>Credentials</h2>
<p>Sri Sun Solar Energiser Pvt Ltd is an MNRE Channel Partner and a TEDA- and TNPHC-registered company. We are also a channel partner of REC Pte Ltd in India for solar modules.</p>

<h2>Visit us</h2>
<p>D-8/1, T.V.K Industrial Estate, Guindy, Chennai<br />Phone: 044-2225 2095<br />Email: <a href="mailto:info@srisunsolar.com">info@srisunsolar.com</a></p>`,
  },

  // -------------------------------------------------------------------- EPC
  {
    slug: "epc",
    title: "EPC Solar Solutions",
    excerpt:
      "From feasibility to commissioning and O&M - complete solar EPC, consultancy and asset management by an experienced team.",
    metaTitle: "Solar EPC Company in Chennai | Rooftop & Ground-Mount | Sri Sun Solar",
    metaDescription:
      "Sri Sun Solar offers complete solar EPC: feasibility, design, procurement, construction, commissioning and O&M for rooftop and ground-mounted plants in Tamil Nadu.",
    content: `<p>Sri Sun Solar Energiser Pvt Ltd was established in 2013 by professionals with 20+ years of industrial automation experience, with the aim of raising standards in renewable energy projects using expertise gained through three decades of on-field work.</p>

<h2>Our service pillars</h2>
<ul>
<li><strong>EPC:</strong> seamless project execution with engineering expertise.</li>
<li><strong>Consultancy:</strong> international-class consultancy services delivered by an expert team.</li>
<li><strong>O&amp;M:</strong> an expert team with immense experience in operations and maintenance.</li>
</ul>

<h2>From engineering to a marvel</h2>
<h3>1. Feasibility study</h3>
<ul>
<li>Site feasibility study</li>
<li>Estimation of capacity</li>
<li>Energy yield analysis</li>
<li>Financial estimation and payback calculation</li>
</ul>
<h3>2. Design and detailed engineering</h3>
<ul>
<li>Detailed Project Report (DPR)</li>
<li>Plant overall layout</li>
<li>Single line diagrams</li>
<li>Necessary electrical and civil drawings</li>
</ul>
<h3>3. Procurement</h3>
<ul>
<li>Preparation of detailed BOQ</li>
<li>Preparation of RFP</li>
<li>Vendor selection</li>
<li>Validation of equipment cost</li>
<li>Procurement and supply</li>
</ul>
<h3>4. Construction</h3>
<ul>
<li>Site preparation</li>
<li>Civil and infrastructure works</li>
<li>Equipment foundation and erection</li>
<li>Quality control</li>
</ul>
<h3>5. Installation and commissioning</h3>
<ul>
<li>Complete plant installation and commissioning</li>
<li>Synchronisation of the plant with metering</li>
<li>Plant monitoring</li>
</ul>

<h2>Our quality pillars</h2>
<ul>
<li><strong>Expert engineering:</strong> three decades of on-field experience and an engineering team with a strong academic background.</li>
<li><strong>First-quality procurement:</strong> multi-level quality control and the finest procurement standards, with zero-defect-tolerance vendor policies.</li>
<li><strong>Seamless construction:</strong> an efficient project management team with public-sector experience, combined with planned engineering and procurement, for smooth and on-time completion.</li>
</ul>

<h2>Consultancy services</h2>
<p><em>For project developers and owners - highest quality in project construction.</em></p>
<ul>
<li>Maximising ROI with the highest yields</li>
<li>Protecting the owner's interest</li>
<li>Detailed engineering for cost optimisation</li>
<li>Contractor- and vendor-independent advice</li>
</ul>

<h2>O&amp;M and asset management</h2>
<p><em>For project investors, developers and EPC contractors.</em></p>
<ul>
<li>24x7 control room with a remote-monitoring cloud platform</li>
<li>Dedicated analytics team for continuous generation improvement</li>
<li>In-house HSSE team for a safe working environment</li>
<li>Expert analytics and execution team for O&amp;M</li>
<li>Plant health management with an analytics team</li>
<li>Asset management services</li>
<li>Bridging the gap between buyer and seller</li>
<li>PV forecasting services</li>
</ul>

<p><a href="/contact-us">Contact us</a> to discuss your rooftop or ground-mounted solar project.</p>`,
  },

  // ---------------------------------------------------------------- SUBSIDY
  {
    slug: "subsidy",
    title: "Solar Subsidy for Residential Customers",
    excerpt:
      "Avail up to ₹78,000 central subsidy for a 3 kW rooftop system under the PM Surya Ghar Muft Bijli Yojana.",
    metaTitle: "PM Surya Ghar Solar Subsidy in Chennai - Up to ₹78,000 | Sri Sun Solar",
    metaDescription:
      "Get up to ₹78,000 subsidy for a 3 kW rooftop solar system under PM Surya Ghar Muft Bijli Yojana. Sri Sun Solar handles feasibility, installation, net metering and subsidy claims.",
    content: `<p><strong>Solar subsidy for residential customers - avail 3 kW, up to ₹78,000.</strong></p>

<h2>Central subsidy under PM Surya Ghar</h2>
<table>
<thead><tr><th>System size</th><th>Subsidy</th></tr></thead>
<tbody>
<tr><td>1 kW</td><td>₹30,000</td></tr>
<tr><td>2 kW</td><td>₹60,000</td></tr>
<tr><td>3 kW and above</td><td>₹78,000 (maximum)</td></tr>
</tbody>
</table>
<p>Residents' welfare associations and group housing societies can claim <strong>₹18,000 per kW</strong> for common-facility installations.</p>

<h2>Approximate cost</h2>
<p>A typical 3 kW system costs roughly ₹1.5-1.8 lakh before subsidy. After the ₹78,000 central subsidy, the net cost works out to around ₹72,000-₹1,02,000, depending on the equipment you select. For an exact quotation, call us on <strong>044-2225 2095</strong>.</p>

<h2>How it works</h2>
<ol>
<li>Register on <a href="https://pmsuryaghar.gov.in" rel="noopener">pmsuryaghar.gov.in</a> and apply for TANGEDCO feasibility.</li>
<li>Choose an empanelled vendor such as Sri Sun Solar.</li>
<li>We install the system with ALMM-listed modules.</li>
<li>TANGEDCO inspects and installs the net meter.</li>
<li>Subsidy is credited to your bank account, typically within about 30 days of commissioning.</li>
</ol>

<h2>Who is eligible?</h2>
<ul>
<li>Residential consumers with a TANGEDCO connection who own the property.</li>
<li>Apartments are eligible with RWA approval.</li>
<li>Commercial, industrial and agricultural connections do not qualify for the residential subsidy.</li>
</ul>

<p>See the <a href="/faq">full PM Surya Ghar FAQ</a> or <a href="/contact-us">request a free site survey</a>.</p>`,
  },

  // ---------------------------------------------------------------- PRIVACY
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    excerpt:
      "How Sri Sun Solar Energiser Pvt Ltd collects, uses and protects your personal data under the Digital Personal Data Protection Act, 2023.",
    metaTitle: "Privacy Policy | Sri Sun Solar Energiser Pvt Ltd",
    metaDescription:
      "Privacy policy of Sri Sun Solar Energiser Pvt Ltd: what personal data we collect, how we use it, your rights under the DPDP Act 2023 and how to contact us.",
    content: `<p><em>Effective date: 18 November 2026</em></p>

<h2>1. Introduction</h2>
<p>Sri Sun Solar Energiser Pvt Ltd ("Sri Sun Solar", "we", "us") respects your privacy. This policy explains how we handle personal data in line with the Digital Personal Data Protection Act, 2023 (DPDP Act) of India.</p>

<h2>2. Information we collect</h2>
<ul>
<li><strong>Personally identifiable information:</strong> your name, phone number, email address, EB consumer number and pincode when you submit an enquiry or contact us.</li>
<li><strong>Technical data:</strong> IP address, browser type, device information and pages visited.</li>
<li><strong>Voluntary submissions:</strong> any additional information you choose to provide in forms, calls or emails.</li>
</ul>

<h2>3. Purpose and use of information</h2>
<p>We use your information to:</p>
<ul>
<li>respond to your queries and prepare quotations;</li>
<li>provide installation, subsidy assistance, net-metering support and after-sales service;</li>
<li>send you updates and marketing communications, where permitted and with your consent;</li>
<li>improve user experience and keep our website secure; and</li>
<li>comply with applicable legal and regulatory obligations.</li>
</ul>

<h2>4. Cookies and tracking</h2>
<p>Our website may use cookies and similar technologies, including analytics tools, to understand how visitors use the site. You can disable cookies in your browser settings; some features may not work as intended.</p>

<h2>5. Data disclosure and third parties</h2>
<p>We do not sell or rent your personal data. Disclosure may occur exclusively under the following circumstances:</p>
<ul>
<li>to government agencies, DISCOM (TANGEDCO) and the national rooftop solar portal, as required to process feasibility, net metering and subsidy applications on your behalf;</li>
<li>to our installation partners, technicians and equipment manufacturers, only as needed to deliver and service your system;</li>
<li>to trusted service providers (such as hosting, analytics, email and SMS providers) who process data on our behalf under confidentiality obligations;</li>
<li>to comply with a legal obligation, court order or lawful request by a public authority; and</li>
<li>to protect our rights, property or safety, or that of our customers or the public.</li>
</ul>

<h2>6. Data security and retention</h2>
<p>We use reasonable technical and organisational measures to protect your data. We retain personal data only for as long as needed for the purposes described above or as required by law, after which it is deleted or anonymised.</p>

<h2>7. Your rights under the DPDP Act</h2>
<p>You have the right to access, correct, update, or erase your personal data; to withdraw consent; and to opt out of marketing communications. To exercise these rights, email <a href="mailto:admin@srisunsolar.com">admin@srisunsolar.com</a>.</p>

<h2>8. Children's privacy</h2>
<p>Our services are not directed to persons under 18 years of age, and we do not knowingly collect personal data from children without verifiable parental consent.</p>

<h2>9. External links</h2>
<p>Our website may link to third-party websites. We are not responsible for their privacy practices; please review their policies separately.</p>

<h2>10. Updates to this policy</h2>
<p>We may update this policy from time to time. Changes will be posted on this page with a revised effective date.</p>

<h2>11. Contact</h2>
<p>Sri Sun Solar Energiser Pvt Ltd, D-8/1, T.V.K Industrial Estate, Guindy, Chennai.<br />Email: <a href="mailto:admin@srisunsolar.com">admin@srisunsolar.com</a> | Phone: 044-2225 2095</p>`,
  },

  // ------------------------------------------------------------------ TERMS
  {
    slug: "terms",
    title: "Terms and Conditions",
    excerpt: "Terms governing the use of the Sri Sun Solar website and our quotations and services.",
    metaTitle: "Terms and Conditions | Sri Sun Solar Energiser Pvt Ltd",
    metaDescription:
      "Terms and conditions for using the Sri Sun Solar website and for quotations, installations and services provided by Sri Sun Solar Energiser Pvt Ltd.",
    content: `<p><em>Effective date: 18 November 2026</em></p>
<p>These terms govern your use of the website of Sri Sun Solar Energiser Pvt Ltd ("Sri Sun Solar") and apply to enquiries and quotations made through it. By using this website you agree to these terms.</p>

<h2>1. Use of the website</h2>
<p>You may use this website for lawful purposes only. You must not attempt to gain unauthorised access to the site, interfere with its operation, or submit false or misleading information.</p>

<h2>2. Information and estimates</h2>
<p>Content on this website, including savings, generation, cost and subsidy figures, is indicative and provided for general information. Actual results depend on site conditions, equipment, tariffs and government policy. Subsidy amounts and eligibility are determined by the relevant government authorities and may change without notice.</p>

<h2>3. Quotations and orders</h2>
<ul>
<li>Quotations are valid for the period stated in the quotation and are subject to a site survey.</li>
<li>An order is confirmed only on written acceptance of our quotation and receipt of the agreed advance payment.</li>
<li>Prices exclude statutory approvals and utility charges unless expressly stated.</li>
</ul>

<h2>4. Installation, warranty and service</h2>
<p>Equipment warranties are provided by the respective manufacturers on their stated terms (for example, product and performance warranties for panels and inverters). Workmanship and service terms will be set out in your order documents. Warranty may be void in case of misuse, unauthorised modification or damage caused by events outside normal operating conditions.</p>

<h2>5. Government schemes</h2>
<p>We assist customers with applications for schemes such as PM Surya Ghar Muft Bijli Yojana. We do not guarantee approval or the timing of subsidy disbursement, which rests with the government agencies concerned.</p>

<h2>6. Intellectual property</h2>
<p>All content, logos and trademarks on this website belong to Sri Sun Solar or their respective owners and may not be copied or reused without prior written permission.</p>

<h2>7. Limitation of liability</h2>
<p>To the fullest extent permitted by law, Sri Sun Solar is not liable for indirect or consequential losses arising from the use of this website or reliance on information provided on it.</p>

<h2>8. Privacy</h2>
<p>Your use of this website is also governed by our <a href="/privacy-policy">Privacy Policy</a>.</p>

<h2>9. Governing law</h2>
<p>These terms are governed by the laws of India. Courts at Chennai, Tamil Nadu shall have jurisdiction over any dispute.</p>

<h2>10. Contact</h2>
<p>Sri Sun Solar Energiser Pvt Ltd, D-8/1, T.V.K Industrial Estate, Guindy, Chennai. Email: <a href="mailto:info@srisunsolar.com">info@srisunsolar.com</a> | Phone: 044-2225 2095</p>`,
  },

  // -------------------------------------------------------------------- FAQ
  {
    slug: "faq",
    title: "FAQs: PM Surya Ghar Muft Bijli Yojana (Tamil Nadu)",
    excerpt:
      "Answers to common questions about rooftop solar subsidy, eligibility, cost and process for residential consumers in Tamil Nadu.",
    metaTitle: "PM Surya Ghar Yojana FAQ for Tamil Nadu | Sri Sun Solar",
    metaDescription:
      "FAQs on PM Surya Ghar Muft Bijli Yojana in Tamil Nadu: eligibility, subsidy of ₹30,000-₹78,000, cost, process, TANGEDCO net metering and timelines.",
    content: `<h2>About the scheme</h2>
<h3>What is the PM Surya Ghar Muft Bijli Yojana?</h3>
<p>It is a central government scheme, launched on 13 February 2024 and implemented by MNRE, to promote rooftop solar for households with a goal of free electricity - up to about 300 units a month after subsidy. The scheme has an outlay of ₹75,021 crore and aims to cover 1 crore homes by 2027. In Tamil Nadu it is implemented with TANGEDCO.</p>

<h2>Eligibility</h2>
<h3>Who can apply?</h3>
<ul>
<li>Residential consumers with a TANGEDCO electricity connection.</li>
<li>Owners of the property. Apartments can participate with RWA approval.</li>
<li>Commercial, industrial and agricultural connections are not eligible for the residential subsidy.</li>
<li>No income ceiling is stated for the scheme.</li>
</ul>

<h2>Subsidy and cost</h2>
<h3>How much is the central subsidy?</h3>
<table>
<thead><tr><th>System</th><th>Subsidy</th></tr></thead>
<tbody>
<tr><td>1 kW</td><td>₹30,000</td></tr>
<tr><td>2 kW</td><td>₹60,000</td></tr>
<tr><td>3 kW and above</td><td>₹78,000 (capped)</td></tr>
</tbody>
</table>
<h3>What does a 3 kW system cost?</h3>
<p>Roughly ₹1.5-1.8 lakh before subsidy. After the ₹78,000 subsidy, the net cost is around ₹72,000-₹1,02,000.</p>

<h2>Process</h2>
<h3>How do I apply?</h3>
<ol>
<li>Register on <a href="https://pmsuryaghar.gov.in" rel="noopener">pmsuryaghar.gov.in</a> with your consumer number.</li>
<li>Apply for TANGEDCO feasibility approval.</li>
<li>Select an empanelled vendor (Sri Sun Solar has been an empanelled partner since 2013).</li>
<li>Install the plant and complete net metering with TANGEDCO.</li>
<li>Submit your bank details; the subsidy reaches your account in about 30 days.</li>
</ol>

<h2>Technical</h2>
<h3>What equipment is used?</h3>
<p>Modules must be ALMM-listed (DCR). Panels typically carry a performance life of about 25 years; inverters last roughly 8-12 years.</p>
<h3>How long does installation take?</h3>
<p>Installation is typically completed within 2-5 days after feasibility approval.</p>

<h2>Help</h2>
<p>The national helpline is <strong>15555</strong>. You can also call Sri Sun Solar on 044-2225 2095 or <a href="/contact-us">contact us online</a> for a free site survey.</p>`,
  },
];
