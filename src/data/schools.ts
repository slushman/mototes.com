/** Product slugs used to filter content on per-product landing pages. */
export type ProductSlug = "totes" | "totes-stow" | "mo-totes-stow";

export interface SchoolFAQ {
  q: string;
  a: string;
  /** If set, this FAQ is only shown on these product pages (and the all-products school page). */
  products?: ProductSlug[];
}

export interface SchoolFAQSection {
  title: string;
  faqs: SchoolFAQ[];
  /** If set, this section is only shown on these product pages (and the all-products school page). */
  products?: ProductSlug[];
}

export interface SchoolData {
  /** Display name, e.g. "University of Missouri" */
  name: string;
  /** Short/common name, e.g. "Mizzou" */
  shortName: string;
  /** URL slug, e.g. "university-of-missouri" */
  slug: string;
  /** City, State */
  location: string;
  /** Primary school color hex */
  colorPrimary: string;
  /** Secondary school color hex */
  colorSecondary: string;
  /** CSS variable overrides applied to the campus page */
  colorOverrides: {
    "--color-brand": string;
    "--color-brand-light": string;
    "--color-brand-dark": string;
    "--color-brand-deep": string;
    "--color-on-brand": string;
    "--color-action": string;
    "--color-action-light": string;
    "--color-action-dark": string;
    "--color-on-action": string;
  };
  /** Hero headline for this school's page */
  heroHeadline: string;
  /** Hero subhead for this school's page */
  heroSubhead: string;
  /** Key dates for this school */
  dates: {
    fallMoveIn: string;
    springMoveOut: string;
    summerStorage?: string;
  };
  /** Where we store their stuff */
  storageLocation?: string;
  /** Additional FAQ sections specific to this school (merged with global FAQs) */
  faqs: SchoolFAQSection[];
}
