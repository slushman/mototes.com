import type { ProductSlug } from "./schools";

export interface ProductConfig {
  slug: ProductSlug;
  /** Display name shown in headings and badges */
  name: string;
  /** Short tagline (e.g. "Just the totes") */
  tagline: string;
  /** Hero badge text — `{shortName}` is replaced with the school's short name */
  heroBadgeTemplate: string;
  /** Hero headline — `{shortName}` is replaced with the school's short name */
  heroHeadlineTemplate: string;
  /** Hero subhead — `{shortName}` is replaced with the school's short name */
  heroSubheadTemplate: string;
  /** Small line shown below the hero CTAs (e.g. "Free delivery + pickup in Columbia") */
  heroFootline: string;
  /** Anchor on the page where the product pricing lives */
  pricingAnchor: string;
  /** CTA banner headline shown above the pricing button */
  ctaHeadline: string;
  /** CTA banner subline */
  ctaSubline: string;
  /** Optional overrides for the FoundingOffer section, e.g. ad-driven date deadlines.
   *  Any field omitted falls back to the FoundingOffer component default. */
  foundingOffer?: {
    badge?: string;
    headline?: string;
    body?: string;
    ctaLabel?: string;
  };
}

export const products: Record<ProductSlug, ProductConfig> = {
  totes: {
    slug: "totes",
    name: "Totes",
    tagline: "Just the totes",
    heroBadgeTemplate: "Totes at {shortName}",
    heroHeadlineTemplate: "Skip the cardboard scramble.",
    heroSubheadTemplate:
      "Sturdy plastic totes delivered to your door. Pack up, we pick them up. Done. Built for Tigers.",
    heroFootline: "Free delivery + pickup in Columbia",
    pricingAnchor: "#totes",
    ctaHeadline: "Moving day is closer than you think.",
    ctaSubline: "Local delivery + pickup included. No cardboard drama.",
    foundingOffer: {
      badge: "Limited spring spots",
      headline: "Spring spots close May 4.",
      body: "Spring move-out fills up fast and we cap each campus so delivery stays on time. Reserve your tote package by May 4 to lock in your dates.",
      ctaLabel: "Reserve before May 4",
    },
  },
  "totes-stow": {
    slug: "totes-stow",
    name: "Totes & Stow",
    tagline: "Totes + storage",
    heroBadgeTemplate: "Totes & Stow at {shortName}",
    heroHeadlineTemplate: "Skip the ship. Skip the sell.",
    heroSubheadTemplate:
      "We drop off totes on campus. You pack and bring them to our campus spot. We store everything through summer and have them ready for pickup on campus when you're back. Built for Tigers.",
    heroFootline: "Free on-campus drop-off + summer storage",
    pricingAnchor: "#totes-and-stow",
    ctaHeadline: "Don't haul it home. Stow it.",
    ctaSubline: "Reusable totes + secure summer storage in Columbia.",
    foundingOffer: {
      badge: "Limited spring spots",
      headline: "Spring spots close May 4.",
      body: "Spring move-out fills up fast and we cap each campus so storage stays on track. Reserve your tote-and-stow package by May 4 to lock in your dates.",
      ctaLabel: "Reserve before May 4",
    },
  },
  "mo-totes-stow": {
    slug: "mo-totes-stow",
    name: "Mo', Totes, & Stow",
    tagline: "Totes + storage + moving",
    heroBadgeTemplate: "Mo', Totes, & Stow at {shortName}",
    heroHeadlineTemplate: "Move out without lifting a finger.",
    heroSubheadTemplate:
      "You pack. We do the rest. We drop off totes at your dorm, pick them up packed, store everything through summer, and bring it all back in the fall. Built for Tigers.",
    heroFootline: "Dorm pickup and fall return",
    pricingAnchor: "#mo-totes-and-stow",
    ctaHeadline: "Never lift a tote.",
    ctaSubline: "Dorm pickup, summer storage, and fall return, all handled.",
    foundingOffer: {
      badge: "Limited move-out crews",
      headline: "Move-out crews close May 4.",
      body: "We're capping move-out crews this spring so every dorm pickup runs on time. Reserve your hands-off package by May 4 to lock in your move-out date.",
      ctaLabel: "Reserve before May 4",
    },
  },
};

export function fillTemplate(template: string, shortName: string): string {
  return template.replace(/\{shortName\}/g, shortName);
}
