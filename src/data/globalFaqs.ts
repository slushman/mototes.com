import type { SchoolFAQSection } from "./schools";

export const globalFaqSections: SchoolFAQSection[] = [
  {
    title: "About the totes",
    faqs: [
      {
        q: "How big are the totes?",
        a: 'The interior dimensions are about 27" long, 18" wide, and 12.5" deep.',
      },
      {
        q: "How clean are the totes?",
        a: "We clean and sanitize them between every rental. We take cleanliness seriously. Each tote is washed and inspected before it goes out again.",
      },
      {
        q: "How many totes do I actually need?",
        a: "Good rule of thumb: 1 drawer = 1 tote. A dorm room is about 10 totes, a 1-bedroom apartment is about 20 or 30. The totes are roomy, so you can pack a lot in there.",
      },
      {
        q: "Is it okay to put breakables in these totes?",
        a: "Yes, but we would recommend wrapping them in a towel or bubble wrap to keep them from breaking. The totes will protect them from being damaged from the outside, but they could still get jostled around while being moved.",
      },
    ],
  },
  {
    title: "Tote rental",
    faqs: [
      {
        q: "What comes with my tote rental?",
        a: "The totes, obviously. We also include zip ties, labels, and inventory sheets. You can optionally rent or buy other moving supplies like dollies and bubble wrap",
      },
      {
        q: "What if I need the totes longer than two weeks?",
        a: "You can easily extend your rental by the week. Rates depend on your package:<br><br>Dorm: $39/week<br>Studio/1-Bed: $59/week<br>1-2 Bed: $79/week<br>2 Bed: $109/week<br><br>No penalties, no surprise fees.",
        products: ["totes"],
      },
      {
        q: "Where do I get packing materials like bubble wrap, newspaper, etc?",
        a: "We have bubble wrap you can purchase and we'd bring that with your totes, if you order it.",
      },
    ],
  },
  {
    title: "Storage",
    products: ["totes-stow", "mo-totes-stow"],
    faqs: [
      {
        q: "Is there anything I shouldn't put into a tote?",
        a: "Don't put anything that could melt, explode, or has high value. Take candles, tablets, laptops, etc with you separately.",
      },
      {
        q: "Do you store anything else besides the totes? What about my fridge, rug, or chair?",
        a: "No problem! We offer flat-rate summer storage for individual items beyond what fits in your totes. Simply add them to your order at booking and we'll handle everything on move-out day.",
      },
      {
        q: "What items can I add to my storage order?",
        a: '<strong>Standard Items — $49/summer</strong><br>These are everyday dorm and apartment items that are easy to handle and store. Examples include:<br><br>• Mini fridge<br>• Rug (rolled)<br>• Desk chair<br>• Floor lamp<br>• Laundry basket<br>• Small fan<br>• Bedside table<br><br><strong>Oversized Items — $99/summer</strong><br>Larger or bulkier items that require extra space or handling. Examples include:<br><br>• Futon or couch<br>• Large dresser<br>• Bike<br>• Large TV or monitor (32" and above)<br>• Bookshelf',
      },
      {
        q: "What about my TV?",
        a: 'TVs and monitors under 32" are stored as a standard item ($49). Larger TVs count as oversized ($99).',
      },
      {
        q: "What items can't be stored?",
        a: "For the safety of all stored belongings, we can't accept:<br><br>• Food or beverages of any kind<br>• Open or leaking cleaning supplies<br>• Plants<br>• Anything with a fuel source (gas cans, propane, etc.)",
      },
      {
        q: "How are add-on items counted?",
        a: "Each standalone item that doesn't fit inside a tote counts as one item. If it's too big to pack, it's an add-on. When in doubt, list it at booking and we'll confirm the category before move-out day.",
      },
      {
        q: "When do I pay for add-ons?",
        a: "Add-on items are selected and paid for at booking, along with your storage package. Your total, totes plus any add-ons, is shown before you check out so there are no surprises on move-out day.",
      },
      {
        q: "Are my items insured while in storage?",
        a: "Yes, if any items are lost or damaged while we're storing them, we will replace them, up to $250. Please let us know about items valued over $250 on your inventory sheet. We will require receipts or proof of purchase for all reimbursements. We'll need any claims filed within 24 hours of receiving your totes back.  Claims after 24 hours are not eligible.",
      },
    ],
  },
  {
    title: "Delivery & pickup",
    faqs: [
      {
        q: "How do I know which zone I'm in?",
        a: "Your delivery zone is determined by your pickup or drop-off address. Zone fees are calculated automatically when you enter your address at checkout. If you have questions about your zone, contact us before booking.",
        products: ["totes"],
      },
      {
        q: "Can I drop off totes myself to avoid the delivery fee?",
        a: "Contact us if you have a unique situation and we'll do our best to work something out.",
        products: ["totes"],
      },
      {
        q: "Do I have to be home for delivery and pickup?",
        a: "For delivery, yes, someone needs to receive the totes. We'll arrange the pick-up details depending on where we're going. For example, if we're picking up from a house, we could pick them up from the porch. If we're picking up from a dorm after your move-in date, we'll arrange a date where we pick up everyone's totes at that dorm.",
        products: ["totes"],
      },
      {
        q: "When do I receive my totes for move out?",
        a: "We bring them the weekend before move-out, which should give you plenty of time to get packed up during finals week.",
        products: ["totes"],
      },
      {
        q: "When do I receive my totes for move in?",
        a: "We bring them around a week before move-in.",
        products: ["totes", "mo-totes-stow"],
      },
      {
        q: "I'm using Totes & Stow. When do my packed totes get picked up?",
        a: "We'll schedule a pickup date with you during move-out week. You'll know the exact date and time before finals so you can have everything packed and ready.",
        products: ["totes-stow", "mo-totes-stow"],
      },
      {
        q: "I'm using Totes & Stow. When do I get my totes back in the fall?",
        a: "We'll schedule a delivery date with you before move-in. Your totes will arrive at your new place ready to unpack.",
        products: ["totes-stow", "mo-totes-stow"],
      },
    ],
  },
  {
    title: "Fees & policies",
    faqs: [
      {
        q: "What if a tote gets damaged?",
        a: "Minor wear and tear, no charge. If the tote has major damage, the replacement fee is $30 per tote, but that should be rare. These totes are built tough.",
      },
      {
        q: "Are there any other fees?",
        a: "If there aren't working elevators, we do charge $25 per flight of stairs. We also charge $50 if we have to clean out your fridge for you. We can't store dirty fridges and you wouldn't want us to bring that stanky mess to your next dorm room, would you? For Totes & Stow, if you're not packed and ready on your move-out date, we do charge $50 per day until we can pick up your packed totes.",
      },
    ],
  },
];
