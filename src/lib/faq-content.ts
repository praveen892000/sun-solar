import { SUBSIDY, COMPANY, formatInr } from "@/lib/company";

export type FaqItem = { question: string; answer: string };

/** PM Surya Ghar FAQs for residential consumers in Tamil Nadu (from CONTENT_INVENTORY.md). */
export const FAQS: FaqItem[] = [
  {
    question: "What is the PM Surya Ghar Muft Bijli Yojana?",
    answer:
      "PM Surya Ghar Muft Bijli Yojana is a central government scheme run by the Ministry of New and Renewable Energy (MNRE). It helps households install rooftop solar so they can generate their own electricity, with the goal of free power for up to about 300 units a month after subsidy. It was launched on 13 February 2024 with an outlay of ₹75,021 crore and aims to reach 1 crore homes by 2027.",
  },
  {
    question: "How much subsidy can I get?",
    answer: `Central financial assistance for residential rooftop solar is ${formatInr(SUBSIDY.oneKw)} for a 1 kW system, ${formatInr(SUBSIDY.twoKw)} for 2 kW, and ${formatInr(SUBSIDY.threeKwPlus)} for 3 kW and above. The subsidy is capped at ${formatInr(SUBSIDY.cap)}, so systems larger than 3 kW receive the same amount.`,
  },
  {
    question: "How much does a 3 kW system cost after subsidy?",
    answer:
      "A 3 kW rooftop system typically costs about ₹1.5–1.8 lakh before subsidy. After the ₹78,000 central subsidy, your net cost is roughly ₹72,000 to ₹1,02,000, depending on the equipment you choose.",
  },
  {
    question: "Who is eligible?",
    answer:
      "You need a residential electricity connection with TANGEDCO and must own the property. Apartments can participate with approval from the residents' welfare association (RWA). Commercial, industrial and agricultural connections are not covered by this scheme, and no income ceiling is stated.",
  },
  {
    question: "How do I apply?",
    answer: `Register on ${SUBSIDY.portal.replace("https://", "")}, apply for TANGEDCO feasibility approval, and get the system installed by an empanelled vendor. After installation, net metering is arranged and the subsidy is credited to your bank account. Sri Sun Solar handles the paperwork and coordinates with TANGEDCO at every step.`,
  },
  {
    question: "How long does the subsidy take to arrive?",
    answer:
      "Once the plant is commissioned and net metering is in place, the subsidy is typically credited to your bank account in about 30 days.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation usually takes 2 to 5 days after TANGEDCO feasibility approval, depending on system size and roof access.",
  },
  {
    question: "Do the panels have to meet any specification?",
    answer:
      "Yes. Subsidy-eligible systems must use modules from the approved ALMM list. We will recommend compliant panels and inverters when we design your system.",
  },
  {
    question: "How long do the panels and inverter last?",
    answer:
      "Solar panels are designed to last around 25 years. Inverters typically last 8 to 12 years and may need replacing once during the life of the plant.",
  },
  {
    question: "Can a housing society or apartment go solar?",
    answer: `Yes. Group housing societies can power common areas through the common meter with RWA approval. Central assistance for group housing and RWAs is ${formatInr(SUBSIDY.rwaPerKw)} per kW.`,
  },
  {
    question: "Is there a government helpline?",
    answer: `Yes. You can call the PM Surya Ghar helpline on ${SUBSIDY.helpline}, or contact us on ${COMPANY.phone} and we will guide you.`,
  },
  {
    question: "How much maintenance does a rooftop system need?",
    answer:
      "Very little. There are no moving parts on the roof, so periodic cleaning and an annual inspection are usually enough to keep output steady.",
  },
];
