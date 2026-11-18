/**
 * Fallback product catalogue, used when the database has no published products.
 * Slugs match the redirects in next.config.ts (e.g. /rec-products -> /products/rec).
 */

export type CatalogProduct = {
  slug: string;
  name: string;
  brand: string | null;
  excerpt: string | null;
  content: string;
  features: string[];
  imageUrl: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  categorySlug: string;
  categoryName: string;
};

export type CatalogCategory = {
  slug: string;
  name: string;
  description: string | null;
  products: CatalogProduct[];
};

const ASK =
  "<p>Models, capacities and pricing depend on your site and load. Contact our team for a recommendation and a written quote.</p>";

type ProductInput = Omit<CatalogProduct, "categorySlug" | "categoryName" | "imageUrl" | "metaTitle" | "metaDescription"> &
  Partial<Pick<CatalogProduct, "metaTitle" | "metaDescription">>;

function category(
  slug: string,
  name: string,
  description: string,
  products: ProductInput[],
): CatalogCategory {
  return {
    slug,
    name,
    description,
    products: products.map((p) => ({
      imageUrl: null,
      metaTitle: null,
      metaDescription: null,
      ...p,
      categorySlug: slug,
      categoryName: name,
    })),
  };
}

export const FALLBACK_CATALOG: CatalogCategory[] = [
  category(
    "solar-panel",
    "Solar Panel",
    "High-efficiency modules from REC, Novasys and Navitas for homes, businesses and industry.",
    [
      {
        slug: "rec",
        name: "REC Solar Panels",
        brand: "REC",
        excerpt:
          "Award-winning, high power density modules. Sri Sun Solar is a REC Pte Ltd channel partner in India and a REC Certified Solar Professional installer.",
        content: `
<p>REC is an international manufacturer of solar modules known for quality, reliability and sustainability. Sri Sun Solar is a channel partner of REC Pte Ltd in India for modules and a REC Certified Solar Professional installer.</p>
<h2>Why choose REC</h2>
<ul>
  <li>High power density to maximise savings on your energy bills.</li>
  <li>Cutting-edge, multiple award-winning technology, including the Intersolar Award 2020 (Photovoltaics).</li>
  <li>Top performer in PVEL Product Reliability Tests six years in a row.</li>
</ul>
<h2>REC series we supply</h2>
<h3>REC Alpha Pure</h3>
<p>Gapless cell layout, full-black look and up to 410 Wp. Heterojunction (HJT), solder-free and lead-free design, with 92% of rated power guaranteed after 25 years.</p>
<h3>REC Alpha Pure-R</h3>
<p>Up to 430 Wp in under 2 m² with a very low current of around 9 A. Lead-free, full black, tested for loads up to 7000 Pa, and 92% power after 25 years.</p>
<h3>REC N-Peak 2 and N-Peak 2 Black</h3>
<p>Mono half-cut n-type cells with Twin Design, low light-induced degradation and a super-strong frame. 92% power after 25 years. The Black variant has a full-black finish.</p>
<h3>REC TwinPeak 4 and TwinPeak 4 Black</h3>
<p>Next-generation Twin Design mono modules with larger cells and low light-induced degradation, rated for 86% power after 25 years. The Black variant uses a black backsheet.</p>
<h2>REC ProTrust warranty</h2>
<p>When installed by a REC Certified Solar Professional, eligible systems can qualify for REC ProTrust: a 25-year product warranty (five years more than standard), a 25-year performance warranty and a labour warranty of up to 25 years.</p>`,
        features: [
          "REC Certified Solar Professional installer",
          "Alpha Pure and Alpha Pure-R: up to 430 Wp",
          "92% power after 25 years on Alpha and N-Peak 2 series",
          "ProTrust warranty eligible systems",
          "Lead-free, full-black options available",
        ],
        metaDescription:
          "REC solar panels in Chennai: Alpha Pure, Alpha Pure-R, N-Peak 2 and TwinPeak 4 with ProTrust warranty from Sri Sun Solar, a REC channel partner.",
      },
      {
        slug: "novasys",
        name: "Novasys Solar Panels",
        brand: "Novasys",
        excerpt:
          "Mono PERC, bifacial and polycrystalline modules from 10 Wp to 550 Wp for residential, commercial, industrial and institutional use.",
        content: `
<p>Novasys modules suit rooftop, ground-mounted and pump applications. They are built for low-light performance with positive power tolerance and resistance to PID, LID and salt mist.</p>
<h2>Series</h2>
<table>
  <thead><tr><th>Series</th><th>Technology</th><th>Power</th></tr></thead>
  <tbody>
    <tr><td>Alpha Plus</td><td>MBB M10 Mono PERC, half-cut, 144 cells</td><td>525–550 Wp</td></tr>
    <tr><td>Pulsar</td><td>Mono PERC, 72 cells, 1500 V</td><td>325–400 Wp</td></tr>
    <tr><td>Rigel</td><td>Bifacial Mono PERC, 72 cells</td><td>375–400 Wp</td></tr>
    <tr><td>Vega 72</td><td>Polycrystalline, 72 cells</td><td>310–335 Wp</td></tr>
    <tr><td>Vega 54 / 60 / 66</td><td>Polycrystalline</td><td>250–305 Wp</td></tr>
    <tr><td>Small 36</td><td>Polycrystalline, small format</td><td>10–60 Wp</td></tr>
  </tbody>
</table>
<p>Alpha Plus carries a 25-year output warranty with 85% output and a 12-year product warranty. Small 36 carries a 10-year linear warranty. The Vega 54/60/66 range is a good match for solar pumps.</p>`,
        features: [
          "Mono PERC, bifacial and polycrystalline options",
          "10 Wp to 550 Wp range",
          "Resistant to PID, LID and salt mist",
          "Suited to pumps, rooftops and ground-mount plants",
        ],
        metaDescription:
          "Novasys solar panels: Alpha Plus, Pulsar, Rigel and Vega series for homes, pumps and commercial rooftops. Supplied and installed by Sri Sun Solar.",
      },
      {
        slug: "navitas",
        name: "Navitas Solar Panels",
        brand: "Navitas",
        excerpt:
          "Bonito, Navisol and Anora series modules offering strong yield and dependable quality across residential and commercial projects.",
        content: `
<p>Navitas modules are built with high-quality materials for strong performance, reliability and PV yield.</p>
<h2>Bonito series</h2>
<table>
  <thead><tr><th>Model</th><th>Cells</th><th>Power</th><th>Max. efficiency</th></tr></thead>
  <tbody>
    <tr><td>Bonito Pro 9BB</td><td>144</td><td>435–465 W</td><td>21.47%</td></tr>
    <tr><td>Bonito Pro 9BB</td><td>156</td><td>460–500 W</td><td>21.47%</td></tr>
    <tr><td>Bonito Max 10BB</td><td>144</td><td>525–560 W</td><td>21.67%</td></tr>
    <tr><td>Bonito Max 10BB</td><td>156</td><td>560–605 W</td><td>21.64%</td></tr>
  </tbody>
</table>
<h2>Navisol series</h2>
<table>
  <thead><tr><th>Variant</th><th>Cells</th><th>Power</th><th>Efficiency</th></tr></thead>
  <tbody>
    <tr><td>Multi 5BB</td><td>60</td><td>320–335 W</td><td>17.1%</td></tr>
    <tr><td>Multi 5BB</td><td>72</td><td>330–345 W</td><td>17.26%</td></tr>
    <tr><td>Mono PERC 5BB</td><td>72</td><td>400 W</td><td>20.15%</td></tr>
  </tbody>
</table>
<h2>Anora series</h2>
<p>Smaller-format multicrystalline modules from 10 W to 250 W. Ask us for the current datasheet.</p>`,
        features: [
          "Bonito series up to 605 W",
          "Efficiency up to 21.67%",
          "Navisol multi and mono PERC options",
          "Anora small-format modules from 10 W",
        ],
        metaDescription:
          "Navitas solar panels in Chennai: Bonito, Navisol and Anora series supplied and installed by Sri Sun Solar.",
      },
    ],
  ),
  category(
    "solar-inverter",
    "Solar Inverter",
    "String inverters from Growatt, K-Solar and Fronius for reliable conversion and monitoring.",
    [
      {
        slug: "growatt",
        name: "Growatt Solar Inverters",
        brand: "Growatt",
        excerpt:
          "Efficient three-phase and single-phase inverters with string monitoring, compact design and easy installation.",
        content: `
<p>Growatt inverters combine high efficiency with a compact design that is quick to install.</p>
<h2>Highlights</h2>
<ul>
  <li>Maximum efficiency up to 99%.</li>
  <li>Maximum input voltage 1100 Vdc, with 11 strings and fuse protection.</li>
  <li>Leading intelligent power module (IPM) for greater reliability.</li>
</ul>
<h2>MOD 3000–9000TL3-X</h2>
<ul>
  <li>Maximum efficiency 98.6%.</li>
  <li>OLED display and touch button.</li>
  <li>Type II surge protection on both DC and AC sides.</li>
  <li>String monitoring, with optional AFCI.</li>
</ul>`,
        features: [
          "Up to 99% maximum efficiency",
          "1100 Vdc maximum input voltage",
          "Type II SPD on DC and AC sides",
          "String monitoring and optional AFCI",
        ],
        metaDescription:
          "Growatt solar inverters including the MOD 3000–9000TL3-X series. Supply and installation by Sri Sun Solar in Chennai.",
      },
      {
        slug: "k-solar",
        name: "K-Solar Inverters",
        brand: "K-Solar",
        excerpt:
          "5G MEGA and 5G PRO inverters in single-phase and three-phase versions for homes and businesses.",
        content: `
<p>K-Solar offers the 5G MEGA and the 5G PRO range, available in single-phase and three-phase versions to suit residential and commercial rooftops.</p>
<p>Request the technical datasheets from our team and we will help you pick the right model for your load and roof.</p>`,
        features: [
          "5G MEGA technology",
          "5G PRO in single-phase and three-phase",
          "Datasheets available on request",
        ],
        metaDescription:
          "K-Solar 5G MEGA and 5G PRO solar inverters, single and three phase, from Sri Sun Solar.",
      },
      {
        slug: "fronius",
        name: "Fronius Symo Inverters",
        brand: "Fronius",
        excerpt:
          "Transformerless three-phase inverters from 3.0 to 20.0 kW with a flexible design for roofs facing multiple directions.",
        content: `
<p>Fronius Symo is a transformerless three-phase inverter range covering 3.0 to 20.0 kW.</p>
<h2>Why Symo</h2>
<ul>
  <li>SuperFlex design for irregular roofs and multiple orientations.</li>
  <li>WLAN and Ethernet connectivity with third-party integration.</li>
  <li>Meter interface for dynamic feed-in control and visualisation of generation and consumption.</li>
</ul>`,
        features: [
          "3.0 to 20.0 kW power range",
          "Transformerless three-phase design",
          "SuperFlex layout for multi-orientation roofs",
          "WLAN and Ethernet monitoring",
        ],
        metaDescription:
          "Fronius Symo three-phase solar inverters, 3.0–20.0 kW, supplied and installed by Sri Sun Solar in Chennai.",
      },
    ],
  ),
  category(
    "battery",
    "Battery",
    "Storage for hybrid and backup solar systems.",
    [
      {
        slug: "luminous",
        name: "Luminous Batteries",
        brand: "Luminous",
        excerpt: "Reliable batteries for hybrid and backup solar systems.",
        content: `<p>Luminous batteries can be paired with a hybrid solar system to provide backup during grid outages.</p>${ASK}`,
        features: ["Hybrid and backup applications", "Sized to your critical load"],
      },
      {
        slug: "exide",
        name: "Exide Batteries",
        brand: "Exide",
        excerpt: "Dependable storage for off-grid and hybrid solar systems.",
        content: `<p>Exide batteries suit off-grid and hybrid solar systems that need dependable stored power.</p>${ASK}`,
        features: ["Off-grid and hybrid applications", "Sized to your critical load"],
      },
    ],
  ),
  category(
    "solar-water-heater",
    "Solar Water Heater",
    "Heat water with the sun and cut water-heating electricity use.",
    [
      {
        slug: "v-guard-solar-water-heater",
        name: "V-Guard Solar Water Heater",
        brand: "V-Guard",
        excerpt: "Solar water heating for homes and institutions.",
        content: `<p>V-Guard solar water heaters use sunlight to heat water, reducing your dependence on electric geysers.</p>${ASK}`,
        features: ["Reduces water-heating electricity use", "Residential and institutional sizes"],
      },
    ],
  ),
  category(
    "solar-pump",
    "Solar Pump",
    "Solar-powered pumping for farms, gardens and institutions.",
    [
      {
        slug: "solar-pump",
        name: "Solar Water Pumps",
        brand: null,
        excerpt: "Solar-powered pumping for agriculture, gardens and institutions.",
        content: `<p>Solar water pumps run directly on sunlight, removing fuel and grid electricity costs from your pumping needs. Polycrystalline modules in the 250–305 Wp range pair well with pump controllers.</p>${ASK}`,
        features: ["No fuel or grid electricity for pumping", "Sized to head, depth and daily water need"],
      },
    ],
  ),
  category(
    "solar-appliances",
    "Solar Appliances",
    "Appliances that make the most of your solar generation.",
    [
      {
        slug: "solar-appliances",
        name: "Solar Appliances",
        brand: null,
        excerpt: "Energy-efficient appliances suited to solar-powered homes.",
        content: `<p>We supply energy-efficient appliances that make the most of the power your rooftop system generates.</p>${ASK}`,
        features: ["Efficient loads for solar homes"],
      },
      {
        slug: "atomberg-bldc-fan",
        name: "Atomberg BLDC Fan",
        brand: "Atomberg",
        excerpt: "Ultra-low-power BLDC fans that pair well with rooftop solar.",
        content: `<p>Atomberg BLDC fans draw far less power than conventional ceiling fans, so your solar system covers more of your daily load.</p>${ASK}`,
        features: ["Low-power BLDC motor", "Pairs well with rooftop solar"],
      },
    ],
  ),
];

export function allFallbackProducts(): CatalogProduct[] {
  return FALLBACK_CATALOG.flatMap((c) => c.products);
}
