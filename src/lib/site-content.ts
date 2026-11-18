/**
 * Static marketing content (corrected copy from content/CONTENT_INVENTORY.md).
 * Dynamic sections read from Prisma and fall back to these values.
 */

const UPLOADS = "https://srisunsolar.com/wp-content/uploads";
const GALLERY_BASE = `${UPLOADS}/2023/09`;

export type GalleryItem = {
  id: number;
  src: string;
  caption: string;
  capacity: string | null;
  location: string | null;
};

const galleryMeta: Omit<GalleryItem, "id" | "src">[] = [
  { caption: "3 kWp at Mandaveli", capacity: "3 kWp", location: "Mandaveli" },
  { caption: "6 kWp at Korattur Villa", capacity: "6 kWp", location: "Korattur" },
  {
    caption: "3 kWp and 4 kWp on-grid solar PV systems at East Tambaram",
    capacity: "3 kWp + 4 kWp",
    location: "East Tambaram",
  },
  {
    caption: "8 kWp on-grid solar PV system at Mantri Villa, Akkarai",
    capacity: "8 kWp",
    location: "Akkarai",
  },
  { caption: "3 kWp at Chintadripet", capacity: "3 kWp", location: "Chintadripet" },
  { caption: "3 kWp at Pallikaranai", capacity: "3 kWp", location: "Pallikaranai" },
  { caption: "5 kWp at Retteri Villa", capacity: "5 kWp", location: "Retteri" },
  { caption: "5 kWp at C.I.T. Nagar, Chennai", capacity: "5 kWp", location: "C.I.T. Nagar" },
  { caption: "12 kWp at ABN Home", capacity: "12 kWp", location: "Chennai" },
  { caption: "5 kWp at Virugambakkam", capacity: "5 kWp", location: "Virugambakkam" },
  {
    caption: "Rooftop solar installation by Sri Sun Solar",
    capacity: null,
    location: "Chennai",
  },
];

export const GALLERY: GalleryItem[] = galleryMeta.map((meta, index) => ({
  id: index + 1,
  src: `${GALLERY_BASE}/gallery${index + 1}.jpg`,
  ...meta,
}));

/** Image used behind the home hero. */
export const HERO_IMAGE = GALLERY[0].src;

/** Home hero slider slides (structure + motion, logo-colour UI). */
export const HERO_SLIDES = [
  {
    id: "rooftop",
    image: GALLERY[0].src,
    eyebrow: "Residential rooftop",
    title: "Your roof. Your power plant.",
    body: "On-grid solar for Chennai homes with PM Surya Ghar subsidy support and end-to-end TANGEDCO paperwork.",
    cta: { label: "Check my subsidy", href: "/subsidy" },
  },
  {
    id: "epc",
    image: GALLERY[3].src,
    eyebrow: "EPC & commercial",
    title: "Survey. Design. Commission.",
    body: "One team for rooftop and ground-mounted plants — from feasibility to monitoring handover.",
    cta: { label: "Explore EPC", href: "/epc" },
  },
  {
    id: "projects",
    image: GALLERY[8].src,
    eyebrow: "500+ installations",
    title: "Real sites. Real generation.",
    body: "From Mandaveli villas to 12 kWp homes — see how Chennai roofs are cutting bills with Sri Sun Solar.",
    cta: { label: "View projects", href: "/projects" },
  },
] as const;

export const BENEFITS = [
  {
    icon: "IndianRupee",
    title: "Up to 80%+ bill savings",
    body: "Generate your own power and cut your monthly electricity bill sharply, year after year.",
  },
  {
    icon: "Leaf",
    title: "Good for the environment",
    body: "Every unit you generate replaces grid power and reduces your carbon footprint.",
  },
  {
    icon: "Wrench",
    title: "Minimal maintenance",
    body: "No moving parts on the roof. Periodic cleaning and a yearly check keep output steady.",
  },
  {
    icon: "Building2",
    title: "Green building certifications",
    body: "Rooftop solar supports green building ratings for homes, offices and campuses.",
  },
  {
    icon: "Layers",
    title: "Scalable design",
    body: "Start with the capacity you need today and expand the system as your load grows.",
  },
  {
    icon: "TrendingDown",
    title: "Accelerated depreciation",
    body: "Businesses can claim accelerated depreciation on commercial and industrial solar assets.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Site survey",
    body: "Our engineers visit your premises, measure the usable shadow-free roof area, check your sanctioned load and EB connection, and understand how much power you use.",
  },
  {
    step: "02",
    title: "System design",
    body: "We size the system, choose the panels and inverter, prepare the layout and single-line diagram, and file the TANGEDCO feasibility and PM Surya Ghar subsidy application for you.",
  },
  {
    step: "03",
    title: "Install and commission",
    body: "Our crew handles structure, earthing, wiring and panel erection. We then coordinate net metering, commission the plant and hand over a working system with its monitoring.",
  },
] as const;

export const TRUST_POINTS = [
  { title: "Worry-free installation", body: "A single accountable team from survey to commissioning." },
  { title: "25-year warranty", body: "Long-term product and performance cover on premium modules." },
  { title: "Lifetime energy savings", body: "Lower bills for the full working life of your plant." },
  { title: "Absolute safety", body: "Proper earthing, protection and certified installers on site." },
] as const;

export const INDUSTRIES = [
  { icon: "Hospital", label: "Hospitals", note: "Round-the-clock loads that benefit most from daytime solar." },
  { icon: "ShoppingBag", label: "Shopping malls", note: "Large roofs and high daytime consumption." },
  { icon: "GraduationCap", label: "Schools and colleges", note: "Campus roofs that generate while classes are in session." },
  { icon: "Landmark", label: "Banks", note: "Predictable daytime demand and dependable payback." },
] as const;

export type TestimonialItem = {
  id: string;
  name: string;
  role: string | null;
  quote: string;
  rating: number;
};

export const FALLBACK_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-ramachandran",
    name: "Mrs and Mr. Ramachandran",
    role: "2 kWp on-grid, home",
    quote:
      "I had enquired with Sri Sun Solar Energiser for a 2 kWp on-grid solar system for our home. Mr. Gokul explained the application process and helped us from application through getting the on-grid EB meter. The system was installed properly and is working well. Thank you, Gokul.",
    rating: 5,
  },
  {
    id: "t-natarajan",
    name: "Natarajan Kanniappan",
    role: "On-grid with subsidy",
    quote:
      "It was a great experience, from pre-sales engagement through installation. The MD, Mr. Gokul, was there during the installation, including earthing, wiring and erection of the panels. The team was very professional and ensured end-to-end safety. Production after installation has been very good, and the team supports me after sales as well. They helped me through the entire TANGEDCO process.",
    rating: 5,
  },
  {
    id: "t-priya",
    name: "Priya Kesavan",
    role: "Mandaveli",
    quote:
      "Prompt and professional services when it comes to solar energy solutions. Kudos to Mr. Gokul and his team.",
    rating: 5,
  },
  {
    id: "t-mobone",
    name: "MOBone by Palm Paw Foods",
    role: "Business customer",
    quote: "Worthy investment. Great customer service.",
    rating: 5,
  },
  {
    id: "t-praveen",
    name: "Praveen Kumar Narayanan",
    role: null,
    quote: "So far so good. Nice turnover.",
    rating: 5,
  },
];

export const EPC_STAGES = [
  {
    title: "Feasibility study",
    items: [
      "Site feasibility study",
      "Estimation of capacity",
      "Energy yield analysis",
      "Financial estimation and payback calculation",
    ],
  },
  {
    title: "Design and detailed engineering",
    items: [
      "Detailed project report (DPR)",
      "Plant overall layout",
      "Single line diagrams",
      "Necessary electrical and civil drawings",
    ],
  },
  {
    title: "Procurement",
    items: [
      "Preparation of detailed BOQ",
      "Preparation of RFP",
      "Vendor selection",
      "Validation of equipment cost",
      "Procurement and supply",
    ],
  },
  {
    title: "Construction",
    items: [
      "Site preparation",
      "Civil and infrastructure works",
      "Equipment foundation and erection",
      "Quality control",
    ],
  },
  {
    title: "Installation and commissioning",
    items: [
      "Complete plant installation and commissioning",
      "Synchronisation of plant with metering",
      "Plant monitoring",
    ],
  },
] as const;

export const OFFERINGS = [
  {
    title: "End-to-end solar solutions",
    body: "From initial consultation and site survey to design, supply, installation and commissioning, we provide complete solar PV solutions tailored to your needs.",
  },
  {
    title: "On-grid and off-grid systems",
    body: "We specialise in rooftop and ground-mounted solar installations for residential, commercial and industrial clients.",
  },
  {
    title: "Operation and maintenance",
    body: "Our team supports the longevity and steady performance of your solar system with dedicated O&M services.",
  },
  {
    title: "Subsidy assistance",
    body: "We guide you through government schemes, including the PM Surya Ghar rooftop programme, so solar costs less.",
  },
  {
    title: "Quality assurance",
    body: "As partners of leading brands such as REC and Fronius, we stand behind both the products and the workmanship.",
  },
] as const;
