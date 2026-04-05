import type { SchoolData } from "./schools";

const mizzou: SchoolData = {
  name: "University of Missouri",
  shortName: "Mizzou",
  slug: "university-of-missouri",
  location: "Columbia, MO",
  colorPrimary: "#F1B82D",
  colorSecondary: "#000000",
  colorOverrides: {
    "--color-brand": "#000000",
    "--color-brand-light": "#FDF4DC",
    "--color-brand-dark": "#7D5A00",
    "--color-brand-deep": "#1A1A1A",
    "--color-on-brand": "#F1B82D",
    "--color-action": "#F1B82D",
    "--color-action-light": "#FDF4DC",
    "--color-action-dark": "#C4960A",
    "--color-on-action": "#000000",
  },
  heroHeadline: "Every Mizzou move, minus the cardboard drama.",
  heroSubhead:
    "Reusable plastic totes for moving on or off campus. We deliver, you pack, we pick up. Built for Tigers.",
  dates: {
    fallMoveIn: "August 19–23, 2026",
    springMoveOut: "May 11–15, 2026",
    summerStorage: "May–August 2026",
  },
  storageLocation: "Columbia, MO, minutes from campus",
  faqs: [
    {
      title: "Mizzou-specific",
      faqs: [
        {
          q: "When do totes get delivered for fall move-in?",
          a: "We deliver totes one week before Mizzou's fall move-in date in mid-August. Delivery within 25 miles of Columbia is free; see our delivery zones above for pricing outside that area.",
        },
        {
          q: "When do I get totes for spring move-out?",
          a: "We bring them the weekend before Mizzou's spring move-out in mid-May, which should give you plenty of time to get packed up during finals week.",
        },
        {
          q: "Where do you store my stuff over the summer?",
          a: "We have a clean, secure storage facility in Columbia, MO, just minutes from campus. Your totes stay local so delivery is quick when you're back in the fall.",
        },
        {
          q: "Can you deliver to my dorm in the Res Halls?",
          a: "Yes! We deliver to all Mizzou residence halls and off-campus apartments in Columbia. We'll coordinate delivery times that work with Mizzou's move-in schedule.",
        },
        {
          q: "Do you handle Greek housing and off-campus moves too?",
          a: "Absolutely. Whether you're in a dorm, Greek house, or off-campus apartment, we've got you covered.",
        },
        {
          q: "How are the move-out dates scheduled?",
          a: "We schedule move-out dates by dorm or area so we can pick up all the totes at once.",
        },
      ],
    },
    {
      title: "Delivery zones",
      faqs: [
        {
          q: "What areas do you deliver to?",
          a: "We deliver to Columbia and surrounding areas, as well as most of Missouri and select areas just across the Kansas and Illinois borders. See our delivery zones below for pricing.",
        },
        {
          q: "What are your delivery zones?",
          a: '<strong>Zone 1 — Free</strong><br>Within 25 miles of Columbia. No delivery fee for either direction.<br><br><strong>Zone 2 — $49 each way</strong><br>Mid-Missouri, roughly 25–75 miles from Columbia. Includes cities like Jefferson City, Fulton, and Boonville.<br><br><strong>Zone 3 — $99 each way</strong><br>St. Louis and Kansas City metro areas, Missouri side only.<br><br><strong>Zone 4 — $149 each way</strong><br>Springfield, Joplin, Northwest Missouri, Southeast Missouri, and addresses within 20 miles of the Kansas or Illinois border.<br><br><strong>Outside our service area</strong><br>We\'re unable to deliver beyond these zones at this time. If you\'re unsure whether your address qualifies, contact us before booking.',
        },
        {
          q: 'What does "each way" mean?',
          a: "Delivery to your destination and pickup of empty totes are priced separately. For example, if you're moving from Columbia to St. Louis, delivery of your totes is free. When you're done unpacking, we'll come pick up the empty totes for another $99. If you're moving from St Louis to Columbia, the delivery fee is $99, but pick-up is free.",
        },
        {
          q: "Does Kansas City metro pricing include the Kansas side?",
          a: "No, Zone 3 pricing applies to Missouri addresses only. Kansas addresses within 20 miles of the Missouri border fall under Zone 4 pricing.",
        },
        {
          q: "Does St. Louis metro pricing include Illinois?",
          a: "No, Zone 3 pricing applies to Missouri addresses only. Illinois addresses within 20 miles of the Missouri border, including cities like Belleville and O'Fallon, fall under Zone 4 pricing.",
        },
        {
          q: "When do I receive my totes for moving to campus?",
          a: "For moving to campus, we deliver totes within one week before your move-in date. Delivery within 25 miles of Columbia is free; see our delivery zones above for pricing outside that area.",
        },
      ],
    },
  ],
};

export default mizzou;
