/** Fallback blog posts shown until posts are added through the admin panel. */

export type BlogPostView = {
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  coverImage: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  publishedAt: Date;
};

const base = { coverImage: null, metaTitle: null, metaDescription: null } as const;

export const FALLBACK_BLOG: BlogPostView[] = [
  {
    ...base,
    slug: "solar-cuts-your-lpg-bill-too",
    title: "Your solar panels cut your LPG bill too",
    excerpt:
      "Solar power makes electric cooking affordable, and one family stretched a cylinder from 45 to 120 days.",
    publishedAt: new Date("2026-03-14T00:00:00+05:30"),
    content: `
<p>Most people install rooftop solar to cut the electricity bill. A pleasant side effect is what it does to the LPG bill.</p>
<h2>From solar to the kitchen</h2>
<p>When your roof generates surplus power during the day, an induction cooktop or electric kettle costs almost nothing to run. Cooking more with electricity means fewer LPG refills.</p>
<p>One of our customers in Gerugambakkam shifted a large part of the family's cooking to induction. Their LPG cylinder, which used to last about 45 days, now lasts around 120.</p>
<h2>How to get started</h2>
<ul>
  <li>Size your solar system with your cooking load in mind.</li>
  <li>Cook during sunlight hours where possible, when generation is highest.</li>
  <li>Pair solar with energy-efficient appliances to stretch every unit further.</li>
</ul>
<p>Talk to our team and we will plan your system around your actual household usage.</p>`,
  },
  {
    ...base,
    slug: "stp-and-fire-systems-in-rwa-commercial-tariff",
    title: "Are STP and fire systems in your RWA billed under commercial tariff?",
    excerpt:
      "TNERC guidance may allow residents' associations to move STP, WTP and fire systems to a lower tariff. Here is what to check.",
    publishedAt: new Date("2026-02-24T00:00:00+05:30"),
    content: `
<p>Many apartment communities in Tamil Nadu pay a commercial tariff on the common meter that feeds sewage treatment plants (STP), water treatment plants (WTP) and fire systems. TNERC's 2023 tariff order for LT I-D may let such loads be billed at the lower domestic common-area rate.</p>
<h2>What to check</h2>
<ul>
  <li>Whether your STP, WTP and fire-fighting loads are included in the LT I-D category.</li>
  <li>Whether any mixed-use portion of the premises stays within the permitted share.</li>
  <li>Your current tariff category on the EB bill and the connected load for each system.</li>
</ul>
<h2>Next steps</h2>
<p>An audit of your bills and connected load shows whether a tariff change is possible. Pairing it with rooftop solar on the common meter can reduce the bill further. Contact Sri Sun Solar for an RWA tariff and solar review.</p>`,
  },
  {
    ...base,
    slug: "topcon-vs-monoperc-solar-modules",
    title: "TOPCon vs MonoPERC solar modules: which should you choose?",
    excerpt:
      "A practical comparison of efficiency, temperature behaviour, degradation and cost to help you pick the right module.",
    publishedAt: new Date("2025-10-13T00:00:00+05:30"),
    content: `
<p>Both TOPCon and MonoPERC modules are widely used in India. The right choice depends on your roof, your budget and how long you plan to benefit from the system.</p>
<h2>How they compare</h2>
<table>
  <thead><tr><th>Factor</th><th>TOPCon</th><th>MonoPERC</th></tr></thead>
  <tbody>
    <tr><td>Efficiency</td><td>Higher</td><td>Good</td></tr>
    <tr><td>High-temperature behaviour</td><td>Better</td><td>Good</td></tr>
    <tr><td>Long-term degradation</td><td>Lower</td><td>Moderate</td></tr>
    <tr><td>Bifacial gain</td><td>Stronger</td><td>Available</td></tr>
    <tr><td>Upfront cost</td><td>Higher</td><td>Lower</td></tr>
  </tbody>
</table>
<h2>Our view</h2>
<p>For premium installations and limited roof space, TOPCon is usually the better long-term choice. MonoPERC remains a sensible, cost-effective option for budget-focused projects.</p>`,
  },
  {
    ...base,
    slug: "whats-stopping-you-from-going-solar",
    title: "What's stopping you from going solar?",
    excerpt:
      "Cost, paperwork and doubts about payback hold many people back. Here is how solar works for homes, businesses and industry.",
    publishedAt: new Date("2025-08-13T00:00:00+05:30"),
    content: `
<p>The most common questions we hear are about cost, approvals and payback. Each has a straightforward answer.</p>
<h2>Cost</h2>
<p>For homes, the PM Surya Ghar scheme provides central subsidy of ₹30,000 for 1 kW, ₹60,000 for 2 kW and ₹78,000 for 3 kW and above. Bank loans are also available for rooftop solar.</p>
<h2>Paperwork</h2>
<p>We manage the application, TANGEDCO feasibility and net metering for you.</p>
<h2>Who benefits</h2>
<ul>
  <li><strong>Residential:</strong> lower bills and subsidy support.</li>
  <li><strong>Commercial:</strong> predictable power cost and accelerated depreciation.</li>
  <li><strong>Industrial and MSME:</strong> savings on high daytime consumption.</li>
</ul>
<p>Get in touch for a site survey and a clear estimate of your savings.</p>`,
  },
  {
    ...base,
    slug: "solar-plant-feasibility-approval",
    title: "Solar plant feasibility approval in Tamil Nadu",
    excerpt:
      "How TANGEDCO feasibility approval works for rooftop solar, and what to expect for small residential systems.",
    publishedAt: new Date("2024-04-26T00:00:00+05:30"),
    content: `
<p>Before installing a grid-connected rooftop system, you need feasibility approval from TANGEDCO. For small residential systems up to 3 kWp, approval has been largely automatic through the online portal.</p>
<h2>What you need</h2>
<ul>
  <li>Your EB consumer number and a recent bill.</li>
  <li>Proof of ownership of the premises.</li>
  <li>The proposed system capacity.</li>
</ul>
<p>Fees and procedures can change, so please check current requirements with us before you apply. Sri Sun Solar files the application for every customer.</p>`,
  },
  {
    ...base,
    slug: "pm-surya-ghar-yojana-subsidy-details",
    title: "PM Surya Ghar Yojana: subsidy details for homes",
    excerpt:
      "Central subsidy of ₹30,000, ₹60,000 and ₹78,000 for 1 kW, 2 kW and 3 kW and above, and what it means for your home.",
    publishedAt: new Date("2024-02-15T00:00:00+05:30"),
    content: `
<p>The PM Surya Ghar Muft Bijli Yojana supports households that install rooftop solar. Central financial assistance depends on the size of your system.</p>
<table>
  <thead><tr><th>System size</th><th>Subsidy</th></tr></thead>
  <tbody>
    <tr><td>1 kW</td><td>₹30,000</td></tr>
    <tr><td>2 kW</td><td>₹60,000</td></tr>
    <tr><td>3 kW and above</td><td>₹78,000 (capped)</td></tr>
  </tbody>
</table>
<p>A 3 kW system can supply roughly 300 units a month. Modules must be from the approved list, and the scheme is applied for at pmsuryaghar.gov.in. Read our <a href="/subsidy">subsidy guide</a> or <a href="/faq">FAQ</a> for details.</p>`,
  },
];
