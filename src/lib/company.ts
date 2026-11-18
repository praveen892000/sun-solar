/**
 * Company constants for Sri Sun Solar Energiser Pvt Ltd.
 * Source of truth: content/CONTENT_INVENTORY.md (corrected copy).
 * Used as fallback whenever the SiteSetting row is missing from the database.
 */

export const COMPANY = {
  name: "Sri Sun Solar Energiser Pvt Ltd",
  shortName: "Sri Sun Solar",
  tagline: "Harvest energy in all seasons",
  established: 2013,
  yearsExperience: 12,
  installations: 500,
  address: {
    line1: "D-8/1, T.V.K Industrial Estate",
    locality: "Guindy",
    city: "Chennai",
    region: "Tamil Nadu",
    country: "IN",
    full: "D-8/1, T.V.K Industrial Estate, Guindy, Chennai",
  },
  geo: { latitude: 13.012283, longitude: 80.207061 },
  phone: "044-2225 2095",
  phoneTel: "+914422252095",
  emails: {
    sales: "sales@srisunsolar.com",
    info: "info@srisunsolar.com",
    admin: "admin@srisunsolar.com",
  },
  contacts: {
    md: {
      name: "Mr. Gokul Raj Narayanan",
      role: "Managing Director",
      phone: "+91 99620 01332",
      phoneTel: "+919962001332",
      email: "gokulraj@srisunsolar.in",
    },
    sales: {
      name: "Mr. Mani",
      role: "Sales",
      phone: "+91 99620 01334",
      phoneTel: "+919962001334",
      email: "sales@srisunsolar.in",
    },
  },
  logoUrl: "https://srisunsolar.com/wp-content/uploads/2022/08/sunsolarlogo.png",
  mapLink:
    "https://www.google.com/maps?ll=13.012283,80.207061&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=3822180701899942230",
  mapEmbedUrl: "https://www.google.com/maps?q=13.012283,80.207061&z=16&output=embed",
  youtubeEmbeds: ["VRr86y-sR5o", "Zzt6aQnoczk"],
  credentials: [
    "MNRE Channel Partner",
    "TEDA Registered",
    "TNPHC Registered",
    "REC Pte Ltd Channel Partner (India, modules)",
    "REC Certified Solar Professional installer",
  ],
  blurb:
    "Sri Sun Solar Energiser Pvt Ltd is an MNRE Channel Partner and a TEDA- and TNPHC-registered company. We are also a channel partner of REC Pte Ltd in India for solar modules.",
  social: {
    facebook: null as string | null,
    youtube: null as string | null,
    instagram: null as string | null,
  },
} as const;

/** Current PM Surya Ghar Muft Bijli Yojana central financial assistance (residential). */
export const SUBSIDY = {
  scheme: "PM Surya Ghar Muft Bijli Yojana",
  portal: "https://pmsuryaghar.gov.in",
  helpline: "15555",
  perKw: [
    { capacityKw: 1, amount: 30000, label: "1 kW" },
    { capacityKw: 2, amount: 60000, label: "2 kW" },
    { capacityKw: 3, amount: 78000, label: "3 kW and above (capped)" },
  ],
  cap: 78000,
  oneKw: 30000,
  twoKw: 60000,
  threeKwPlus: 78000,
  /** Group housing / RWA common-meter assistance, per kW. */
  rwaPerKw: 18000,
} as const;

export type Company = typeof COMPANY;

export const SERVICES = [
  { label: "Solar Rooftop", href: "/products" },
  { label: "Solar Water Pumps", href: "/products/solar-pump" },
  { label: "Solar Inverters", href: "/products" },
  { label: "EPC Solutions", href: "/epc" },
  { label: "Subsidy Assistance", href: "/subsidy" },
  { label: "O&M and Consultancy", href: "/epc#om" },
] as const;

export const PROJECT_TYPES = [
  { label: "Residential", href: "/projects#residential" },
  { label: "Commercial", href: "/projects#commercial" },
  { label: "Industrial", href: "/projects#industrial" },
] as const;

/** Format a rupee amount in the Indian numbering system, e.g. 78000 -> "₹78,000". */
export function formatInr(amount: number): string {
  return `\u20B9${new Intl.NumberFormat("en-IN").format(amount)}`;
}
