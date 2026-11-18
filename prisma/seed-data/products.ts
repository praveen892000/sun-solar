export type SeedCategory = {
  slug: string;
  name: string;
  description: string;
};

export type SeedProduct = {
  slug: string;
  name: string;
  brand: string;
  category: string; // category slug
  excerpt: string;
  content: string; // HTML
  features: string[]; // stored newline-separated
  metaTitle: string;
  metaDescription: string;
};

export const categories: SeedCategory[] = [
  {
    slug: "solar-panels",
    name: "Solar Panels",
    description:
      "Tier-1 solar modules from REC, Novasys and Navitas for homes, businesses and industries.",
  },
  {
    slug: "solar-inverters",
    name: "Solar Inverters",
    description:
      "Reliable on-grid string inverters from Growatt, K-Solar and Fronius with remote monitoring.",
  },
  {
    slug: "batteries",
    name: "Batteries",
    description:
      "Solar-ready batteries from Luminous and Exide for hybrid and off-grid backup systems.",
  },
  {
    slug: "solar-water-heaters",
    name: "Solar Water Heaters",
    description: "Solar water heating systems that cut your electricity and gas bills.",
  },
  {
    slug: "solar-pumps",
    name: "Solar Pumps",
    description: "Solar-powered water pumping solutions for agriculture, farms and institutions.",
  },
  {
    slug: "solar-appliances",
    name: "Solar Appliances",
    description: "Energy-efficient appliances, including BLDC fans, that pair perfectly with solar.",
  },
];

const brandNote = (brand: string) =>
  `<p>Supplied and installed by <strong>Sri Sun Solar Energiser Pvt Ltd</strong>, a MNRE channel partner and TEDA- and TNPHC-registered company in Chennai. Call <strong>044-2225 2095</strong> or <a href="/contact-us">contact us</a> for a free site survey and a customised ${brand} quotation.</p>`;

export const products: SeedProduct[] = [
  // ---------- REC ----------
  {
    slug: "rec-alpha-pure-series",
    name: "REC Alpha Pure Series",
    brand: "REC",
    category: "solar-panels",
    excerpt:
      "Full-black heterojunction (HJT) modules with up to 410 Wp and an industry-leading 92% output after 25 years.",
    content: `<p>The <strong>REC Alpha Pure Series</strong> brings heterojunction (HJT) cell technology with a gapless cell layout to residential and commercial rooftops. It delivers high power density in a sleek, full-black design.</p>
<h3>Why choose REC Alpha Pure</h3>
<ul>
<li>Up to <strong>410 Wp</strong> with around 222 W/m² power density</li>
<li>Lead-free, RoHS-compliant, solder-free cell connections</li>
<li>Intersolar Award winner 2022</li>
<li><strong>92%</strong> of rated power guaranteed after 25 years</li>
<li>Eligible for the REC ProTrust warranty when installed by a REC Certified Solar Professional</li>
</ul>
${brandNote("REC")}`,
    features: [
      "Heterojunction (HJT) cell technology",
      "Gapless cell layout, full-black design",
      "Up to 410 Wp, ~222 W/m² power density",
      "Lead-free and solder-free construction",
      "92% power output after 25 years",
      "ProTrust warranty eligible",
    ],
    metaTitle: "REC Alpha Pure Solar Panels in Chennai | Sri Sun Solar",
    metaDescription:
      "Buy REC Alpha Pure HJT solar panels in Chennai - up to 410 Wp, full black, 92% output after 25 years. Installed by REC Certified Solar Professionals.",
  },
  {
    slug: "rec-alpha-pure-r-series",
    name: "REC Alpha Pure-R Series",
    brand: "REC",
    category: "solar-panels",
    excerpt:
      "Up to 430 Wp in under 2 m² - the most space-efficient REC residential module for compact rooftops.",
    content: `<p>The <strong>REC Alpha Pure-R Series</strong> packs up to <strong>430 Wp</strong> into a module of less than 2 m², making it ideal where roof space is limited and every watt counts.</p>
<h3>Highlights</h3>
<ul>
<li>Power density of about 223 W/m²</li>
<li>Low module current (~9 A) for lower system losses</li>
<li>Full-black, lead-free HJT design</li>
<li>Mechanical load rating up to 7000 Pa</li>
<li>92% power output after 25 years; ProTrust eligible</li>
</ul>
${brandNote("REC")}`,
    features: [
      "Up to 430 Wp in less than 2 m²",
      "223 W/m² power density",
      "Low current (~9 A)",
      "Full black, lead-free HJT cells",
      "Up to 7000 Pa load rating",
      "92% power after 25 years",
    ],
    metaTitle: "REC Alpha Pure-R 430 Wp Solar Panels | Sri Sun Solar Chennai",
    metaDescription:
      "REC Alpha Pure-R panels deliver up to 430 Wp in under 2 m2. Ideal for compact Chennai rooftops. Get a quote from Sri Sun Solar.",
  },
  {
    slug: "rec-n-peak-2-series",
    name: "REC N-Peak 2 Series",
    brand: "REC",
    category: "solar-panels",
    excerpt:
      "Mono half-cut n-type modules with Twin Design for dependable, long-term performance. Also available in full black.",
    content: `<p>The <strong>REC N-Peak 2 Series</strong> uses n-type mono half-cut cells in REC's Twin Design, giving excellent performance in partial shading and a strong, durable frame for demanding conditions.</p>
<ul>
<li>n-type monocrystalline half-cut cells with Twin Design</li>
<li>Low light-induced degradation (LID)</li>
<li>Super-strong frame for wind and snow loads</li>
<li>92% power output after 25 years</li>
<li>N-Peak 2 Black variant available for a premium all-black look</li>
</ul>
${brandNote("REC")}`,
    features: [
      "n-type mono half-cut cells",
      "Twin Design for shade tolerance",
      "Low LID",
      "Super-strong frame",
      "92% power after 25 years",
      "Black variant available",
    ],
    metaTitle: "REC N-Peak 2 Solar Panels Chennai | Sri Sun Solar",
    metaDescription:
      "REC N-Peak 2 n-type half-cut solar modules with Twin Design and 92% output after 25 years. Supplied and installed in Chennai by Sri Sun Solar.",
  },
  {
    slug: "rec-twinpeak-4-series",
    name: "REC TwinPeak 4 Series",
    brand: "REC",
    category: "solar-panels",
    excerpt:
      "Next-generation Twin Design mono modules with larger cells and low LID, in standard and black versions.",
    content: `<p>The <strong>REC TwinPeak 4 Series</strong> combines Twin Design with larger mono cells for higher output per module and proven REC reliability. A TwinPeak 4 Black version is available with a black backsheet.</p>
<ul>
<li>Twin Design mono cells with larger cell size</li>
<li>Low LID for stable early-life performance</li>
<li>86% power output after 25 years</li>
<li>Backed by REC's global quality and testing programme</li>
</ul>
${brandNote("REC")}`,
    features: [
      "Twin Design mono modules",
      "Larger cell format",
      "Low LID",
      "86% power after 25 years",
      "Black version available",
    ],
    metaTitle: "REC TwinPeak 4 Solar Panels | Sri Sun Solar Chennai",
    metaDescription:
      "REC TwinPeak 4 Twin Design mono solar modules - reliable, high output, available in black. Sri Sun Solar is a REC channel partner in India.",
  },
  // ---------- NOVASYS ----------
  {
    slug: "novasys-alpha-plus",
    name: "Novasys Alpha Plus",
    brand: "Novasys",
    category: "solar-panels",
    excerpt:
      "525-550 Wp MBB M10 mono PERC half-cut modules (144 cells) for commercial and industrial rooftops.",
    content: `<p><strong>Novasys Alpha Plus</strong> modules use multi-busbar (MBB) M10 mono PERC half-cut cells in a 144-cell layout to deliver 525-550 Wp per module, reducing balance-of-system cost on large installations.</p>
<ul>
<li>25-year linear performance warranty with 85% output guaranteed</li>
<li>12-year product warranty</li>
<li>Excellent low-light performance and positive power tolerance</li>
<li>PID, LID and salt-mist resistant</li>
</ul>
${brandNote("Novasys")}`,
    features: [
      "MBB M10 mono PERC half-cut, 144 cells",
      "525-550 Wp",
      "25-year linear warranty (85% output)",
      "12-year product warranty",
      "PID / LID / salt-mist resistant",
    ],
    metaTitle: "Novasys Alpha Plus 550 Wp Solar Panels | Sri Sun Solar",
    metaDescription:
      "Novasys Alpha Plus 525-550 Wp mono PERC half-cut solar panels for commercial and industrial projects in Tamil Nadu.",
  },
  {
    slug: "novasys-pulsar",
    name: "Novasys Pulsar",
    brand: "Novasys",
    category: "solar-panels",
    excerpt: "325-400 Wp mono PERC 72-cell modules rated for 1500 V systems.",
    content: `<p>The <strong>Novasys Pulsar</strong> series offers 72-cell mono PERC modules from 325 to 400 Wp and is designed for 1500 V system architectures, suitable for residential, commercial and industrial installations.</p>
<ul>
<li>High efficiency mono PERC cells</li>
<li>1500 V system voltage</li>
<li>25-year linear power warranty</li>
<li>Resistant to PID, LID and salt-mist corrosion</li>
</ul>
${brandNote("Novasys")}`,
    features: [
      "Mono PERC, 72 cells",
      "325-400 Wp",
      "1500 V system voltage",
      "25-year linear warranty",
    ],
    metaTitle: "Novasys Pulsar Mono PERC Solar Panels | Sri Sun Solar",
    metaDescription:
      "Novasys Pulsar 325-400 Wp mono PERC 72-cell solar modules, 1500 V rated. Quotes and installation across Chennai.",
  },
  {
    slug: "novasys-rigel-bifacial",
    name: "Novasys Rigel Bifacial",
    brand: "Novasys",
    category: "solar-panels",
    excerpt:
      "375-400 Wp bifacial mono PERC modules that capture light on both sides for extra yield.",
    content: `<p>The <strong>Novasys Rigel</strong> is a bifacial mono PERC module (72 cells, 375-400 Wp) that generates power from both the front and rear surface. With the right ground or elevated mounting and reflective surface, bifacial gain can significantly raise annual energy yield (up to about 30% in ideal conditions).</p>
<ul>
<li>Bifacial mono PERC, 72 cells</li>
<li>Great for ground-mount, carports and elevated terrace structures</li>
<li>Resistant to PID, LID and salt mist</li>
</ul>
${brandNote("Novasys")}`,
    features: [
      "Bifacial mono PERC, 72 cells",
      "375-400 Wp",
      "Up to ~30% additional yield in ideal conditions",
      "Ideal for ground-mount and elevated structures",
    ],
    metaTitle: "Novasys Rigel Bifacial Solar Panels | Sri Sun Solar",
    metaDescription:
      "Novasys Rigel bifacial mono PERC solar panels (375-400 Wp) for higher yield. Supplied and installed by Sri Sun Solar, Chennai.",
  },
  {
    slug: "novasys-vega-poly",
    name: "Novasys Vega Polycrystalline",
    brand: "Novasys",
    category: "solar-panels",
    excerpt:
      "Economical polycrystalline modules from 250 to 335 Wp, popular for solar pumping and budget rooftops.",
    content: `<p>The <strong>Novasys Vega</strong> range offers cost-effective polycrystalline modules in two families:</p>
<ul>
<li><strong>Vega 72:</strong> 72-cell modules, 310-335 Wp</li>
<li><strong>Vega 54 / 60 / 66:</strong> 250-305 Wp, ideal for solar pump systems</li>
</ul>
<p>Small-format <strong>Novasys Small 36</strong> modules (10-60 Wp) with a 10-year linear warranty are also available for lighting and small off-grid loads.</p>
${brandNote("Novasys")}`,
    features: [
      "Polycrystalline technology",
      "Vega 72: 310-335 Wp",
      "Vega 54/60/66: 250-305 Wp, ideal for pumps",
      "Small 36: 10-60 Wp with 10-year linear warranty",
    ],
    metaTitle: "Novasys Vega Polycrystalline Solar Panels | Sri Sun Solar",
    metaDescription:
      "Affordable Novasys Vega polycrystalline solar panels (250-335 Wp) for rooftops and solar pumps. Chennai supply and installation.",
  },
  // ---------- NAVITAS ----------
  {
    slug: "navitas-bonito-pro-9bb",
    name: "Navitas Bonito Pro 9BB",
    brand: "Navitas",
    category: "solar-panels",
    excerpt: "435-500 W mono modules with 9-busbar cells and up to 21.47% efficiency.",
    content: `<p>The <strong>Navitas Bonito Pro 9BB</strong> series delivers best-in-class performance and reliability using high-quality materials for high PV yield.</p>
<table>
<thead><tr><th>Cells</th><th>Power</th><th>Max efficiency</th><th>Tolerance</th></tr></thead>
<tbody>
<tr><td>144</td><td>435-465 W</td><td>21.47%</td><td>4.99 W</td></tr>
<tr><td>156</td><td>460-500 W</td><td>21.47%</td><td>4.99 W</td></tr>
</tbody>
</table>
${brandNote("Navitas")}`,
    features: [
      "9-busbar (9BB) cell technology",
      "144-cell: 435-465 W; 156-cell: 460-500 W",
      "Up to 21.47% module efficiency",
      "Positive power tolerance (4.99 W)",
    ],
    metaTitle: "Navitas Bonito Pro 9BB Solar Panels | Sri Sun Solar",
    metaDescription:
      "Navitas Bonito Pro 9BB mono solar modules, 435-500 W with up to 21.47% efficiency. Authorised supply and installation in Chennai.",
  },
  {
    slug: "navitas-bonito-max-10bb",
    name: "Navitas Bonito Max 10BB",
    brand: "Navitas",
    category: "solar-panels",
    excerpt: "High-power 10-busbar modules from 525 W to 605 W with up to 21.67% efficiency.",
    content: `<p>The <strong>Navitas Bonito Max 10BB</strong> series is built for commercial and industrial projects that need high power per module to reduce structure and installation costs.</p>
<table>
<thead><tr><th>Cells</th><th>Power</th><th>Max efficiency</th><th>Tolerance</th></tr></thead>
<tbody>
<tr><td>144</td><td>525-560 W</td><td>21.67%</td><td>4.99 W</td></tr>
<tr><td>156</td><td>560-605 W</td><td>21.64%</td><td>4.99 W</td></tr>
</tbody>
</table>
${brandNote("Navitas")}`,
    features: [
      "10-busbar (10BB) cell technology",
      "144-cell: 525-560 W; 156-cell: 560-605 W",
      "Up to 21.67% module efficiency",
      "Ideal for C&I rooftops and ground-mount",
    ],
    metaTitle: "Navitas Bonito Max 10BB 605 W Solar Panels | Sri Sun Solar",
    metaDescription:
      "Navitas Bonito Max 10BB solar panels up to 605 W and 21.67% efficiency for commercial and industrial solar in Chennai.",
  },
  {
    slug: "navitas-navisol-series",
    name: "Navitas Navisol Series",
    brand: "Navitas",
    category: "solar-panels",
    excerpt: "Value multicrystalline and mono PERC 5BB modules from 320 W to 400 W.",
    content: `<p>The <strong>Navitas Navisol Series</strong> offers reliable 5-busbar modules for residential and small commercial systems.</p>
<table>
<thead><tr><th>Variant</th><th>Cells</th><th>Power</th><th>Efficiency</th></tr></thead>
<tbody>
<tr><td>Multi 5BB</td><td>60</td><td>320-335 W</td><td>17.1%</td></tr>
<tr><td>Multi 5BB</td><td>72</td><td>330-345 W</td><td>17.26%</td></tr>
<tr><td>Mono PERC 5BB</td><td>72</td><td>400 W</td><td>20.15%</td></tr>
</tbody>
</table>
${brandNote("Navitas")}`,
    features: [
      "5-busbar cell design",
      "Multi 60-cell and 72-cell variants",
      "Mono PERC 72-cell 400 W option",
      "Efficiency from 17.1% to 20.15%",
    ],
    metaTitle: "Navitas Navisol Solar Panels | Sri Sun Solar Chennai",
    metaDescription:
      "Navitas Navisol multicrystalline and mono PERC solar panels from 320 W to 400 W. Quotes from Sri Sun Solar, Chennai.",
  },
  {
    slug: "navitas-anora-series",
    name: "Navitas Anora Series",
    brand: "Navitas",
    category: "solar-panels",
    excerpt: "Compact multicrystalline modules from 10 W to 250 W for pumps, lighting and small systems.",
    content: `<p>The <strong>Navitas Anora Series</strong> covers small and mid-size multicrystalline modules in 38, 48, 54 and 72-cell formats, with power from 10 W to 250 W and up to 17.02% efficiency (4.99 W tolerance).</p>
<p>Anora is a sensible choice for solar pumps, street and garden lighting, and small off-grid systems.</p>
${brandNote("Navitas")}`,
    features: [
      "38 / 48 / 54 / 72 cell formats",
      "10-250 W multicrystalline modules",
      "Up to 17.02% efficiency",
      "Positive tolerance up to 4.99 W",
    ],
    metaTitle: "Navitas Anora Multicrystalline Solar Panels | Sri Sun Solar",
    metaDescription:
      "Navitas Anora multicrystalline solar panels from 10 W to 250 W for pumps and small systems. Available through Sri Sun Solar, Chennai.",
  },
  // ---------- INVERTERS ----------
  {
    slug: "growatt-mod-3000-9000tl3-x",
    name: "Growatt MOD 3000-9000TL3-X",
    brand: "Growatt",
    category: "solar-inverters",
    excerpt:
      "Three-phase on-grid string inverter, 3-9 kW, with 98.6% max efficiency, OLED display and string monitoring.",
    content: `<p>The <strong>Growatt MOD 3000-9000TL3-X</strong> is a compact three-phase transformerless inverter for residential and small commercial rooftops.</p>
<ul>
<li>Maximum efficiency of <strong>98.6%</strong></li>
<li>Maximum input voltage 1100 Vdc with 11 strings and fuse protection</li>
<li>OLED display with touch buttons</li>
<li>Type II surge protection on both DC and AC sides</li>
<li>String-level monitoring; AFCI optional</li>
<li>Leading Intelligent Power Module (IPM) for higher reliability</li>
<li>Compact design and easy installation</li>
</ul>
${brandNote("Growatt")}`,
    features: [
      "3-9 kW three-phase, on-grid",
      "98.6% maximum efficiency",
      "1100 Vdc max input, string monitoring",
      "Type II SPD on DC and AC",
      "OLED display with touch buttons",
      "AFCI optional",
    ],
    metaTitle: "Growatt MOD TL3-X Solar Inverter 3-9 kW | Sri Sun Solar Chennai",
    metaDescription:
      "Growatt MOD 3000-9000TL3-X three-phase solar inverter: 98.6% efficiency, string monitoring, Type II SPD. Supplied by Sri Sun Solar, Chennai.",
  },
  {
    slug: "k-solar-5g-mega",
    name: "K-Solar 5G MEGA Inverter",
    brand: "K-Solar",
    category: "solar-inverters",
    excerpt: "High-capacity K-Solar 5G MEGA string inverter built for commercial and industrial rooftops.",
    content: `<p>The <strong>K-Solar 5G MEGA</strong> is a high-capacity grid-tied inverter from K-Solar designed for commercial and industrial installations where reliability and remote monitoring matter.</p>
<p>Technical datasheets are available on request - contact our team for the model that best fits your plant size.</p>
${brandNote("K-Solar")}`,
    features: [
      "Grid-tied string inverter for C&I plants",
      "Remote monitoring support",
      "Datasheet available on request",
    ],
    metaTitle: "K-Solar 5G MEGA Solar Inverter | Sri Sun Solar Chennai",
    metaDescription:
      "K-Solar 5G MEGA grid-tied solar inverter for commercial and industrial rooftops. Get a quote from Sri Sun Solar, Chennai.",
  },
  {
    slug: "k-solar-5g-pro",
    name: "K-Solar 5G PRO Inverter",
    brand: "K-Solar",
    category: "solar-inverters",
    excerpt: "K-Solar 5G PRO single-phase and three-phase inverters for homes and small businesses.",
    content: `<p>The <strong>K-Solar 5G PRO</strong> range is available in both <strong>single-phase</strong> and <strong>three-phase</strong> versions, covering homes, shops and small commercial buildings.</p>
<p>Ask us for the datasheet and the right capacity for your connected load and roof area.</p>
${brandNote("K-Solar")}`,
    features: [
      "Single-phase and three-phase models",
      "Suitable for residential and small commercial rooftops",
      "Datasheet available on request",
    ],
    metaTitle: "K-Solar 5G PRO Single & Three Phase Inverter | Sri Sun Solar",
    metaDescription:
      "K-Solar 5G PRO single-phase and three-phase solar inverters for homes and businesses in Chennai.",
  },
  {
    slug: "fronius-symo",
    name: "Fronius Symo",
    brand: "Fronius",
    category: "solar-inverters",
    excerpt:
      "Austrian-engineered three-phase transformerless inverter from 3.0 to 20.0 kW with SuperFlex Design.",
    content: `<p>The <strong>Fronius Symo</strong> is a premium three-phase, transformerless inverter available from <strong>3.0 to 20.0 kW</strong>.</p>
<ul>
<li><strong>SuperFlex Design</strong> for irregularly shaped or multi-oriented roofs</li>
<li>Built-in WLAN and Ethernet for monitoring via Fronius Solar.web</li>
<li>Easy integration with third-party systems</li>
<li>Meter interface for dynamic feed-in management and visualisation of consumption</li>
</ul>
<p>Sri Sun Solar is a partner for Fronius products in Chennai and can design, supply, install and maintain your complete system.</p>
${brandNote("Fronius")}`,
    features: [
      "3.0-20.0 kW three-phase, transformerless",
      "SuperFlex Design for multi-orientation roofs",
      "WLAN and Ethernet monitoring",
      "Third-party system integration",
      "Meter interface for feed-in and consumption data",
    ],
    metaTitle: "Fronius Symo Solar Inverter 3-20 kW | Sri Sun Solar Chennai",
    metaDescription:
      "Fronius Symo three-phase solar inverters (3-20 kW) with SuperFlex Design and WLAN monitoring. Installed by Sri Sun Solar, Chennai.",
  },
  // ---------- BATTERIES ----------
  {
    slug: "luminous-solar-batteries",
    name: "Luminous Solar Batteries",
    brand: "Luminous",
    category: "batteries",
    excerpt: "Deep-cycle solar batteries from Luminous for hybrid and off-grid backup systems.",
    content: `<p>Add reliable backup to your solar system with <strong>Luminous solar batteries</strong>. Designed for deep-cycle use, they store the energy your panels produce during the day so you can use it at night or during power cuts.</p>
<ul>
<li>Suited to hybrid and off-grid solar systems</li>
<li>Sized to your backup load and hours of autonomy</li>
<li>Complete system design, installation and after-sales support from Sri Sun Solar</li>
</ul>
${brandNote("Luminous")}`,
    features: [
      "Deep-cycle batteries for solar storage",
      "Hybrid and off-grid compatible",
      "Capacity sized to your backup load",
      "Installation and service by Sri Sun Solar",
    ],
    metaTitle: "Luminous Solar Batteries in Chennai | Sri Sun Solar",
    metaDescription:
      "Luminous solar batteries for hybrid and off-grid backup in Chennai. Sized, supplied and installed by Sri Sun Solar.",
  },
  {
    slug: "exide-solar-batteries",
    name: "Exide Solar Batteries",
    brand: "Exide",
    category: "batteries",
    excerpt: "Trusted Exide batteries for solar storage, built for long cycle life and dependable backup.",
    content: `<p><strong>Exide</strong> is one of India's most trusted battery brands. Exide solar batteries are built for repeated charge-discharge cycles and are a dependable choice for hybrid and off-grid solar systems.</p>
<ul>
<li>Designed for solar deep-cycle duty</li>
<li>Wide capacity range for homes, shops and institutions</li>
<li>Backup design and installation by Sri Sun Solar</li>
</ul>
${brandNote("Exide")}`,
    features: [
      "Deep-cycle batteries for solar storage",
      "Wide capacity range",
      "Hybrid and off-grid compatible",
      "Installation and service by Sri Sun Solar",
    ],
    metaTitle: "Exide Solar Batteries in Chennai | Sri Sun Solar",
    metaDescription:
      "Exide solar batteries for hybrid and off-grid solar systems in Chennai. Supply and installation by Sri Sun Solar.",
  },
  // ---------- WATER HEATER ----------
  {
    slug: "v-guard-solar-water-heater",
    name: "V-Guard Solar Water Heater",
    brand: "V-Guard",
    category: "solar-water-heaters",
    excerpt: "Solar water heaters from V-Guard that deliver hot water using free energy from the sun.",
    content: `<p>Heat water with sunshine instead of electricity. <strong>V-Guard solar water heaters</strong> are an efficient, low-maintenance way to supply hot water for homes, hostels, hotels and hospitals.</p>
<ul>
<li>Significantly lower electricity or gas consumption for water heating</li>
<li>Durable construction and low maintenance</li>
<li>Capacity options to suit family size or commercial demand</li>
</ul>
${brandNote("V-Guard")}`,
    features: [
      "Uses solar energy for water heating",
      "Lower electricity / gas bills",
      "Low maintenance",
      "Domestic and commercial capacities",
    ],
    metaTitle: "V-Guard Solar Water Heater in Chennai | Sri Sun Solar",
    metaDescription:
      "V-Guard solar water heaters for homes and businesses in Chennai. Cut your water heating bills with Sri Sun Solar.",
  },
  // ---------- PUMP ----------
  {
    slug: "solar-water-pump",
    name: "Solar Water Pump",
    brand: "Sri Sun Solar",
    category: "solar-pumps",
    excerpt: "Solar-powered pumping systems that eliminate diesel and electricity costs for irrigation and water supply.",
    content: `<p>Our <strong>solar water pump</strong> systems pair solar modules with an efficient pump and controller so you can draw water for irrigation, livestock and institutions without any running fuel cost.</p>
<ul>
<li>Zero diesel and minimal electricity cost</li>
<li>Designed around your borewell or open well depth and daily water requirement</li>
<li>Supported by subsidy schemes where eligible - we help with the paperwork</li>
</ul>
${brandNote("solar pump")}`,
    features: [
      "No diesel or grid electricity needed",
      "Designed for borewells and open wells",
      "Low maintenance",
      "Subsidy assistance where eligible",
    ],
    metaTitle: "Solar Water Pump Systems in Tamil Nadu | Sri Sun Solar",
    metaDescription:
      "Solar water pump systems for farms and institutions in Tamil Nadu. Cut diesel and power costs - Sri Sun Solar, Chennai.",
  },
  // ---------- APPLIANCES ----------
  {
    slug: "solar-appliances",
    name: "Solar Appliances",
    brand: "Sri Sun Solar",
    category: "solar-appliances",
    excerpt: "Solar-ready appliances including lights, fans and cooking solutions to make the most of your solar power.",
    content: `<p>Get more from your rooftop solar with energy-efficient, solar-ready appliances. From lighting to cooking, we help you shift daytime loads onto free solar power.</p>
<ul>
<li>Solar-friendly lighting and fans</li>
<li>Electric cooking to reduce LPG dependence</li>
<li>Advice on running heavy loads during peak sun hours</li>
</ul>
${brandNote("solar appliance")}`,
    features: [
      "Energy-efficient, solar-ready appliances",
      "Support for electric cooking",
      "Advice on daytime load shifting",
    ],
    metaTitle: "Solar Appliances in Chennai | Sri Sun Solar",
    metaDescription:
      "Energy-efficient solar appliances to pair with your rooftop solar system. Sri Sun Solar, Chennai.",
  },
  {
    slug: "atomberg-bldc-fan",
    name: "Atomberg BLDC Fan",
    brand: "Atomberg",
    category: "solar-appliances",
    excerpt: "Energy-saving Atomberg BLDC ceiling fans that use a fraction of the power of ordinary fans.",
    content: `<p><strong>Atomberg BLDC fans</strong> use brushless DC motors that consume far less electricity than conventional ceiling fans, helping you reduce your bill and size a smaller solar system for the same comfort.</p>
<ul>
<li>High energy efficiency - ideal alongside rooftop solar</li>
<li>Remote-controlled, quiet operation</li>
<li>Works well with hybrid and battery-backed solar systems</li>
</ul>
${brandNote("Atomberg")}`,
    features: [
      "Brushless DC (BLDC) motor",
      "Much lower power consumption than regular fans",
      "Remote control",
      "Pairs well with solar and battery backup",
    ],
    metaTitle: "Atomberg BLDC Fans in Chennai | Sri Sun Solar",
    metaDescription:
      "Energy-saving Atomberg BLDC ceiling fans - the ideal companion to your rooftop solar system. Sri Sun Solar, Chennai.",
  },
];
