export type SeedPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML
  publishedAt: string; // ISO date
  metaTitle: string;
  metaDescription: string;
};

const cta = `<hr />
<p><strong>Ready to go solar?</strong> With 12+ years of experience and 500+ installations across Chennai and Tamil Nadu, Sri Sun Solar Energiser Pvt Ltd will handle everything from design to TANGEDCO net metering and subsidy paperwork. Call <strong>044-2225 2095</strong> or write to <a href="mailto:sales@srisunsolar.com">sales@srisunsolar.com</a>.</p>`;

export const posts: SeedPost[] = [
  {
    slug: "solar-panels-cut-your-lpg-bill-too",
    title: "Your Solar Panels Did Something Nobody Expected — They Cut Your LPG Bill Too",
    excerpt:
      "Once a rooftop solar system covers your electricity, electric cooking becomes nearly free - and one LPG cylinder can last 120 days instead of 45.",
    publishedAt: "2026-03-14",
    metaTitle: "How Rooftop Solar Cuts Your LPG Bill Too | Sri Sun Solar",
    metaDescription:
      "See how electric cooking powered by rooftop solar stretched one household's LPG cylinder from 45 to 120 days. Solar savings beyond your electricity bill.",
    content: `<p>Most people install solar to cut the electricity bill. But a growing number of our customers in Chennai are discovering a second benefit: <strong>their LPG cylinders are lasting far longer</strong>.</p>
<h2>Solar, electric cooking and LPG: the connection</h2>
<p>When your rooftop system generates more units than your home needs during the day, that surplus is effectively free. Families use it to run an induction cooktop, an electric kettle, a rice cooker or an air fryer - and every meal cooked on solar power is a meal that does not burn LPG.</p>
<h2>A real example from Gerugambakkam</h2>
<p>One of our customers in Gerugambakkam shifted most of his daily cooking to an induction cooktop after installing solar. His single LPG cylinder, which earlier lasted about <strong>45 days</strong>, now lasts around <strong>120 days</strong>. That is almost three cylinders saved every year, on top of a near-zero electricity bill.</p>
<h2>Tips to get the most from solar cooking</h2>
<ul>
<li>Cook the heaviest meals during daylight hours when your panels are producing.</li>
<li>Use a good-quality induction cooktop - it is far more efficient than a resistive hot plate.</li>
<li>Size your solar system with cooking in mind; an extra 1-2 kW can pay for itself quickly.</li>
<li>Keep LPG for early-morning or night cooking if you do not use batteries.</li>
</ul>
${cta}`,
  },
  {
    slug: "stp-fire-systems-rwa-commercial-tariff-tnerc-guidance",
    title:
      "Are STP and Fire Systems in Your RWA Billed Under Commercial Tariff? TNERC Guidance for Tariff Optimisation",
    excerpt:
      "Residents' welfare associations in Tamil Nadu may be paying more than necessary on common-area meters. Here is what TNERC guidance says and how to act.",
    publishedAt: "2026-02-24",
    metaTitle: "RWA Tariff Optimisation: STP & Fire Systems under TNERC | Sri Sun Solar",
    metaDescription:
      "Are STP, WTP and fire-fighting loads in your apartment complex billed at commercial tariff? Understand TNERC guidance and optimise your RWA electricity bill.",
    content: `<p>Many apartment communities in Tamil Nadu pay a <strong>commercial tariff</strong> on their common-area meter even though the loads - lifts, lighting, water pumps, sewage treatment plants (STP) and fire-fighting systems - serve residents only.</p>
<h2>What TNERC says</h2>
<p>As per the TNERC tariff order of 2023, the LT I-D category (domestic common-service supply for residential complexes) covers essential services such as STP, WTP and fire-fighting systems. A common meter generally qualifies for the domestic-type tariff, provided the usage remains predominantly residential. Where commercial activity is present in a mixed-use building, the order also provides a rule on the share of commercial load (about 25%), so it is important to review your own sanctioned load and usage.</p>
<h2>Action plan for your RWA</h2>
<ol>
<li>Collect the last 12 months of common-meter bills and note the tariff category.</li>
<li>Check the sanctioned load and the nature of each connected load.</li>
<li>Write to the TANGEDCO section office requesting correction of the tariff category, enclosing the order reference and your RWA registration.</li>
<li>Ask for a refund or adjustment where the wrong category was applied.</li>
<li>Combine tariff correction with a rooftop solar plant for the common meter to cut costs further.</li>
</ol>
<h2>Why it matters</h2>
<p>The difference between commercial and domestic common-service tariff can run to lakhs of rupees a year for a large community. Add solar under the PM Surya Ghar scheme (₹18,000 per kW for RWAs) and the savings multiply.</p>
<p><em>This article is a general guide, not legal advice. Please verify against the latest TNERC orders.</em> Contact Mr. Gokul Raj Narayanan on +91 99620 01332 for a tariff review for your community.</p>
${cta}`,
  },
  {
    slug: "topcon-vs-monoperc-solar-modules-2025",
    title: "TOPCon Solar Modules vs. MonoPERC Modules — Which Should You Choose in 2025?",
    excerpt:
      "A practical comparison of efficiency, temperature behaviour, degradation, bifacial gain and cost to help you pick the right module technology.",
    publishedAt: "2025-10-13",
    metaTitle: "TOPCon vs MonoPERC Solar Panels: Which to Choose in 2025",
    metaDescription:
      "TOPCon or MonoPERC? Compare efficiency, temperature coefficient, degradation, bifacial gain and price to choose the best solar panels for your Chennai rooftop.",
    content: `<p>Solar module technology has moved quickly. Two names dominate quotations today: <strong>MonoPERC</strong>, the established workhorse, and <strong>TOPCon</strong> (Tunnel Oxide Passivated Contact), the newer n-type technology.</p>
<h2>Head-to-head comparison</h2>
<table>
<thead><tr><th>Factor</th><th>MonoPERC</th><th>TOPCon</th></tr></thead>
<tbody>
<tr><td>Efficiency</td><td>Good (typically ~20-22%)</td><td>Higher (typically ~22-24%)</td></tr>
<tr><td>Temperature coefficient</td><td>Higher power loss in heat</td><td>Better performance on hot days</td></tr>
<tr><td>Degradation</td><td>Higher first-year and annual loss</td><td>Lower first-year and annual loss</td></tr>
<tr><td>Bifacial gain</td><td>Moderate</td><td>Higher (better rear-side response)</td></tr>
<tr><td>Cost</td><td>Lower upfront</td><td>Slight premium</td></tr>
</tbody>
</table>
<h2>Which should you choose?</h2>
<ul>
<li><strong>Tight budget or large roof:</strong> MonoPERC remains an excellent, bankable choice.</li>
<li><strong>Limited roof space, hot climate, or long-term returns:</strong> TOPCon's higher efficiency and lower degradation usually justify the premium - which is why we recommend it for premium installations.</li>
</ul>
<p>Whatever you choose, insist on ALMM-listed modules from a reputed manufacturer and a proper product and performance warranty.</p>
${cta}`,
  },
  {
    slug: "unlocking-the-power-of-microinverters",
    title: "Unlocking the Power of Microinverters: The Sri Sun Solar Energiser Advantage",
    excerpt:
      "How microinverters compare with string inverters on yield, monitoring, safety and expansion - with a 4 kWp comparison.",
    publishedAt: "2025-10-13",
    metaTitle: "Microinverters vs String Inverters | Sri Sun Solar Chennai",
    metaDescription:
      "Compare microinverters and string inverters on energy yield, monitoring, safety and expansion. Find out when microinverters are worth it for your home in Chennai.",
    content: `<p>Every solar system needs an inverter to turn DC power from the panels into AC power for your home. Traditionally, one <strong>string inverter</strong> serves all panels. A <strong>microinverter</strong> sits behind each panel instead.</p>
<h2>Why microinverters?</h2>
<ul>
<li><strong>Higher yield on difficult roofs:</strong> each panel works independently, so shade or dirt on one panel does not drag down the rest.</li>
<li><strong>Panel-level monitoring:</strong> see exactly how every module performs from your phone.</li>
<li><strong>Safety:</strong> there is no high-voltage DC cabling running across your roof.</li>
<li><strong>Easy expansion:</strong> add more panels later without redesigning the whole system.</li>
<li><strong>No inverter clipping:</strong> every panel is matched with its own inverter capacity.</li>
</ul>
<h2>When a string inverter is still the better choice</h2>
<p>For an unshaded, single-orientation roof and tight budgets, a quality string inverter such as Growatt or Fronius delivers excellent value. Microinverters shine on complex, multi-orientation or partially shaded roofs.</p>
<p>Talk to us about a free shade analysis - we will model both options and recommend the one that gives you the best return.</p>
${cta}`,
  },
  {
    slug: "whats-stopping-you-from-going-solar",
    title: "What's Stopping You from Going Solar?",
    excerpt:
      "Cost, paperwork, roof space, maintenance? We answer the most common concerns for homes, businesses, industries and MSMEs.",
    publishedAt: "2025-08-13",
    metaTitle: "What's Stopping You from Going Solar? | Sri Sun Solar Chennai",
    metaDescription:
      "Worried about cost, subsidy paperwork or maintenance? Here is how homes, businesses and MSMEs in Tamil Nadu can go solar easily with ₹78,000 PM Surya Ghar subsidy.",
    content: `<p>Solar is no longer a niche choice - yet many people still hesitate. Here are the most common questions we hear and straight answers.</p>
<h2>"It costs too much."</h2>
<p>Residential customers can claim up to <strong>₹78,000</strong> of central subsidy under the PM Surya Ghar Muft Bijli Yojana, and easy bank loans are available for rooftop solar. Most households recover their investment through bill savings in a few years, and panels last 25 years.</p>
<h2>"The paperwork looks complicated."</h2>
<p>We handle the entire process - feasibility, vendor registration, net-metering and subsidy claims - so you do not have to chase offices.</p>
<h2>Who benefits?</h2>
<ul>
<li><strong>Residential:</strong> cut bills by up to 80% or more and protect against tariff hikes.</li>
<li><strong>Commercial:</strong> shops, hospitals, schools and malls turn their roof into a profit centre.</li>
<li><strong>Industrial &amp; MSME:</strong> stabilise energy costs and benefit from accelerated depreciation.</li>
</ul>
<h2>"What about maintenance?"</h2>
<p>Solar needs very little maintenance - periodic cleaning and an annual check. Our O&amp;M team can take care of this for you.</p>
${cta}`,
  },
  {
    slug: "huge-electricity-bill-savings-by-solar-installation",
    title: "Huge Electricity Bill Savings by Solar Installation: An RWA Success Story",
    excerpt:
      "A residential community cut a monthly common-meter bill of about ₹16,000 to near zero with a 15-20 kW rooftop solar plant.",
    publishedAt: "2025-06-09",
    metaTitle: "RWA Solar Success Story: ₹16,000 Bill to Near Zero | Sri Sun Solar",
    metaDescription:
      "How a Chennai residential community used 15-20 kW rooftop solar and RWA subsidy of ₹18,000 per kW to slash its common-area electricity bill.",
    content: `<p>Common-area electricity - lifts, corridor lighting, water pumps and amenities - can be one of the biggest expenses for an apartment community. One RWA we worked with was paying around <strong>₹16,000 every month</strong> on its common meter.</p>
<h2>The solution</h2>
<p>We designed and installed a <strong>15-20 kW rooftop solar plant</strong> connected to the common meter. Daytime consumption is now met largely by solar, and the monthly bill dropped to nearly zero.</p>
<h2>Subsidy for RWAs</h2>
<p>Under PM Surya Ghar, Resident Welfare Associations and Group Housing Societies are eligible for a central subsidy of <strong>₹18,000 per kW</strong> for common-facility solar installations. This significantly reduces the payback period.</p>
<h2>Want the same for your community?</h2>
<p>Contact Mr. Tulsi Ram (RWA lead) on 6383364093 or Mr. Gokul Raj Narayanan on +91 99620 01332.</p>
${cta}`,
  },
  {
    slug: "pm-suryaghar-hybrid-solar-residential-societies-common-meters",
    title: "Benefits of PM Surya Ghar Yojana and Hybrid Solar Systems for Residential Societies' Common Meters",
    excerpt:
      "How ₹18,000 per kW subsidy and hybrid battery backup can reduce costs and keep common services running during power cuts.",
    publishedAt: "2024-10-17",
    metaTitle: "PM Surya Ghar & Hybrid Solar for Apartment Common Meters | Sri Sun Solar",
    metaDescription:
      "Residential societies can claim ₹18,000 per kW under PM Surya Ghar. Learn how hybrid solar with battery backup benefits common meters.",
    content: `<p>Apartment communities can now claim a central subsidy of <strong>₹18,000 per kW</strong> for rooftop solar that powers common facilities, under the PM Surya Ghar Muft Bijli Yojana.</p>
<h2>Why hybrid?</h2>
<p>A <strong>hybrid solar system</strong> combines panels, a hybrid inverter and batteries. Beyond cutting the monthly bill, it keeps lifts, lights and pumps running through power cuts - a major benefit for societies.</p>
<h2>Typical sizing</h2>
<p>Most societies consider systems in the range of 5 kW, 10 kW or 20 kW depending on common-area load. We prepare a cost and savings estimate for each society after studying the last 12 months of bills and the available roof area.</p>
<h2>Next steps</h2>
<ol>
<li>Share your common-meter bills and roof layout.</li>
<li>We prepare a design and savings estimate.</li>
<li>RWA approval, TANGEDCO feasibility and installation.</li>
<li>Net metering and subsidy claim support.</li>
</ol>
${cta}`,
  },
  {
    slug: "solar-plant-feasibility-approval-tangedco",
    title: "Solar Plant Feasibility Approval from TANGEDCO: Step-by-Step Guide",
    excerpt:
      "Systems up to 3 kWp get automatic feasibility approval. Here is the process, fees and portals you need.",
    publishedAt: "2024-04-26",
    metaTitle: "TANGEDCO Solar Feasibility Approval Process | Sri Sun Solar",
    metaDescription:
      "How to get TANGEDCO feasibility approval for your rooftop solar plant in Tamil Nadu - automatic approval up to 3 kWp, fees and the online process.",
    content: `<p>Before you install an on-grid rooftop system in Tamil Nadu, you need feasibility approval from <strong>TANGEDCO</strong>.</p>
<h2>Automatic approval up to 3 kWp</h2>
<p>For residential systems up to <strong>3 kWp</strong>, feasibility approval is granted automatically once the application is registered. Larger systems are evaluated against the capacity of the distribution transformer.</p>
<h2>Fees</h2>
<p>At the time of writing, the application and registration charges for a typical residential application were around <strong>₹10,589</strong>. Charges can change, so please confirm the latest amount on the official portal or with our team.</p>
<h2>Process</h2>
<ol>
<li>Register on the national rooftop portal (pmsuryaghar.gov.in) with your consumer number.</li>
<li>Apply for feasibility and pay the prescribed fees.</li>
<li>Select an empanelled vendor like Sri Sun Solar.</li>
<li>Install the system and request inspection and net-meter installation.</li>
<li>Submit bank details to receive your subsidy after commissioning.</li>
</ol>
<p>We take care of every step on your behalf.</p>
${cta}`,
  },
  {
    slug: "pm-surya-ghar-yojana-subsidy-details",
    title: "PM Surya Ghar Yojana: Subsidy Details",
    excerpt:
      "Get ₹30,000 for 1 kWp, ₹60,000 for 2 kWp and ₹78,000 for 3 kWp or above under the PM Surya Ghar Muft Bijli Yojana.",
    publishedAt: "2024-02-15",
    metaTitle: "PM Surya Ghar Yojana Subsidy Details 2024 | Sri Sun Solar Chennai",
    metaDescription:
      "PM Surya Ghar subsidy: ₹30,000 for 1 kW, ₹60,000 for 2 kW and ₹78,000 for 3 kW and above. DCR modules required. Apply with Sri Sun Solar.",
    content: `<p>The central government's <strong>PM Surya Ghar Muft Bijli Yojana</strong> offers a direct subsidy for residential rooftop solar systems.</p>
<h2>Subsidy amounts</h2>
<table>
<thead><tr><th>System size</th><th>Central subsidy</th></tr></thead>
<tbody>
<tr><td>1 kWp</td><td>₹30,000</td></tr>
<tr><td>2 kWp</td><td>₹60,000</td></tr>
<tr><td>3 kWp and above</td><td>₹78,000 (maximum)</td></tr>
</tbody>
</table>
<h2>Important conditions</h2>
<ul>
<li>The system must use <strong>DCR (domestic content requirement) / ALMM-listed modules</strong>.</li>
<li>Installation must be done by an empanelled vendor.</li>
<li>The applicant must be a residential electricity consumer who owns the rooftop.</li>
</ul>
<p>Sri Sun Solar has been helping Chennai households with end-to-end subsidy support since 2013.</p>
${cta}`,
  },
  {
    slug: "pm-surya-ghar-yojana-overview",
    title: "PM Surya Ghar Yojana: Free Electricity for 1 Crore Households",
    excerpt:
      "An overview of the scheme: up to 300 units a month for a 3 kWp system, DCR modules, and how to apply at pmsuryaghar.gov.in.",
    publishedAt: "2024-02-14",
    metaTitle: "PM Surya Ghar Yojana Explained | Sri Sun Solar Chennai",
    metaDescription:
      "Understand PM Surya Ghar Muft Bijli Yojana - 300 free units a month, DCR modules, eligibility and how to apply online. Guidance from Sri Sun Solar.",
    content: `<p>Launched in February 2024, the <strong>PM Surya Ghar Muft Bijli Yojana</strong> aims to light up 1 crore households with rooftop solar by 2027.</p>
<h2>Key points</h2>
<ul>
<li>A 3 kWp rooftop system can generate roughly 300 units of electricity per month, so many households can reach near-zero bills.</li>
<li>Subsidy is paid directly to the beneficiary's bank account after commissioning.</li>
<li>Modules must be <strong>DCR-compliant</strong>.</li>
<li>Apply online at <a href="https://pmsuryaghar.gov.in" rel="noopener">pmsuryaghar.gov.in</a>.</li>
</ul>
<p>Read our <a href="/subsidy">subsidy page</a> and <a href="/faq">FAQ</a> for the full process in Tamil Nadu.</p>
${cta}`,
  },
  {
    slug: "open-access-for-100kw-and-above",
    title: "Green Energy Open Access for 100 kW and Above",
    excerpt:
      "Commercial and industrial consumers with 100 kW or more connected load can buy green power through open access. Here is how it works.",
    publishedAt: "2022-11-17",
    metaTitle: "Green Energy Open Access for 100 kW and Above | Sri Sun Solar",
    metaDescription:
      "Consumers with 100 kW and above can access green energy through the Green Energy Open Access portal with approvals in about 15 days.",
    content: `<p>Under the Green Energy Open Access Rules, consumers with a connected load of <strong>100 kW and above</strong> can source renewable power from generators of their choice.</p>
<h2>Highlights</h2>
<ul>
<li>Applications are submitted online through <strong>greenopenaccess.in</strong>.</li>
<li>Approvals are targeted within about <strong>15 days</strong>.</li>
<li>Suitable for factories, malls, hospitals and large campuses looking for lower energy costs and green credentials.</li>
</ul>
<p>Our EPC and consultancy team can help you evaluate on-site solar, open access or a hybrid of both.</p>
${cta}`,
  },
];
