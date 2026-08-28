// All facts below are sourced from the business plan, competitor analysis
// and storage options research prepared by Keystone Property Group
// (24 August 2026) — nothing here is invented. Figures marked "indicative"
// or "planning" are launch estimates, not confirmed live rates.

export const site = {
  name: "The Grahams",
  tagline: "A private waterfront property at Clarence Point",
  address: "49 Sunset Boulevard, Clarence Point TAS 7270",
  region: "Tamar River, Tasmania",
};

export const overview = {
  landSize: "4,452 m²",
  builtArea: "110 m²",
  positioning:
    "A private waterfront property at Clarence Point with room for the whole family across two separate homes — more space than a boutique cottage, without the price tag of a luxury estate.",
};

export const dwellings = [
  {
    slug: "main-residence",
    name: "Main residence",
    blurb: "3 bedrooms, 1 bathroom, living area with a wood heater, and a kitchen/dining space with water views.",
    features: [
      "3 bedrooms, main with built-in robes",
      "1 bathroom",
      "Living area with wood heater",
      "Combined kitchen and dining with water views",
    ],
  },
  {
    slug: "secondary-dwelling",
    name: "Secondary dwelling",
    blurb:
      "Self-contained with 1 bedroom, kitchenette and living area, plus two flexible rooms usable as extra bedrooms, an office, or storage.",
    features: [
      "1 bedroom, self-contained",
      "Kitchenette and living area",
      "Two flexible extra rooms",
    ],
  },
];

export const propertyFeatures = [
  "4,452 m² waterfront block on the Tamar River",
  "Two separate dwellings on one title",
  "Double carport (2 covered bays)",
  "4m × 6m workshop/shed",
  "Multiple storage and utility rooms",
];

// Launch rate card — indicative, to be confirmed once the property has
// live bookings and review data (per the business plan, Section 5).
export const rates = [
  {
    season: "Peak",
    when: "mid-Dec–Jan, Easter",
    whole: "$430–$480",
    secondary: "$200–$220",
    minStay: "3 nights (whole) / 2 nights (secondary)",
  },
  {
    season: "High",
    when: "Feb–Mar, Oct–Nov long weekends",
    whole: "$370–$400",
    secondary: "$175–$190",
    minStay: "2 nights",
  },
  {
    season: "Shoulder",
    when: "Apr–May, Sep",
    whole: "$300–$330",
    secondary: "$150–$160",
    minStay: "2 nights (whole) / 1 night (secondary)",
  },
  {
    season: "Low / Winter",
    when: "Jun–Aug",
    whole: "$260–$290",
    secondary: "$130–$140",
    minStay: "1 night",
  },
];

export const ratesNote =
  "Rates above are the nightly tariff only — a cleaning fee (typically $120–$200) applies per stay. Whole-property rate covers both dwellings; the secondary dwelling can also be booked on its own.";

export const targetGuests = [
  {
    title: "Groups & multi-generational getaways",
    blurb:
      "Families and friend groups of 6–8 booking the whole property for long weekends and school-holiday stays, spread across two separate living areas.",
  },
  {
    title: "Couples & small families",
    blurb:
      "The self-contained secondary dwelling on its own, for couples or small families wanting water frontage without the whole-property price.",
  },
];

export const nearby = {
  townsAndDistance: [
    { name: "Beauty Point", distance: "~10 min drive" },
    { name: "Launceston", distance: "~47 min drive" },
    { name: "Legana", distance: "~25 min drive" },
  ],
  storage: {
    name: "Store It Here (Legana Self Storage)",
    detail:
      "The closest off-site option for guests arriving with a boat, caravan or trailer — open-air storage from $85/month, about 25 minutes away.",
    phone: "(03) 6330 3342",
    email: "admin@storeitherelegana.com.au",
  },
};

// Real, currently-operating attractions in the Tamar Valley / Beauty Point
// area, sourced from tamarvalley.com.au and general web search (28 August
// 2026) — not from the business plan documents. Travel times are quoted
// from those sources, not independently measured.
export const attractions: {
  name: string;
  distance: string;
  blurb: string;
  photo?: string;
  photoCredit?: string;
}[] = [
  {
    name: "Garden Island lookout",
    distance: "At Clarence Point",
    blurb:
      "A short walk from the property — a barren lookout point at the mouth of the Tamar River with good fishing and river views.",
  },
  {
    name: "Seahorse World & Platypus House",
    distance: "~10 min drive, Beauty Point",
    blurb:
      "A working seahorse farm and a chance to see platypus and echidna up close — both open daily, year-round.",
  },
  {
    name: "Beaconsfield Mine & Heritage Centre",
    distance: "~20 min drive",
    blurb: "An indoor heritage attraction telling the story of the historic Beaconsfield gold mine.",
  },
  {
    name: "Narawntapu National Park",
    distance: "~20–40 min drive",
    blurb:
      "Coastal heath, wetlands and free-ranging wildlife (kangaroos, wallabies, wombats), with the West Head Lookout an easy 270 m walk from the car park.",
    photo: "/images/nearby/narawntapu-kangaroo.jpg",
    photoCredit: "Steven Penton, CC BY 2.0",
  },
  {
    name: "Cataract Gorge, Launceston",
    distance: "~47 min drive",
    blurb: "One of Tasmania's best-known natural landmarks, with walking trails, a chairlift and swimming pool.",
    photo: "/images/nearby/cataract-gorge.jpg",
    photoCredit: "Photnart, CC BY-SA 3.0",
  },
];

// Real, well-known Tamar Valley wineries and restaurants, sourced from
// general web search (28 August 2026) — not from the business plan
// documents. The Tamar Valley wine trail runs both sides of the river
// between Launceston and George Town, so exact drive times from Clarence
// Point aren't quoted here — best explored by car.
export const foodAndWine = [
  {
    name: "Pipers Brook Vineyard",
    blurb: "Cool-climate wines, tastings and platters using regional cheese, charcuterie and cured fish.",
  },
  {
    name: "Jansz Tasmania",
    blurb: "A cellar door beside a lake amid the vines, known for one of Australia's best sparkling wines.",
  },
  {
    name: "Clover Hill",
    blurb: "Sparkling wine and cheese platters with views over the vineyard.",
  },
  {
    name: "Stoney Rise",
    blurb: "A relaxed cellar door on the West Tamar, good for spending a whole afternoon over food and wine.",
  },
  {
    name: "Marion's Vineyard",
    blurb: "Midway up the Tamar Valley, surrounded by redwood forest, with platters from the on-site deli.",
  },
];

// Real, verified local events — dates confirmed directly from the event's
// own site (28 August 2026). Only including events with a confirmed
// upcoming date; unconfirmed ones (e.g. George Town's NYE event) are left
// out rather than guessed at.
export const events = [
  {
    name: "Tamar Valley Folk Festival",
    when: "15–17 January 2027",
    blurb: "Concerts, workshops and community events held in and around George Town, about 3km away.",
    url: "https://tamarvalleyfolkfestival.com/",
  },
];

// No guests have stayed yet — the business plan's own revenue modelling is
// a launch-year projection, not a track record. Do not add quotes here
// until real guest reviews exist; this status line should be replaced with
// real testimonials once the property has hosted its first season.
export const reviewsStatus =
  "The Grahams is preparing to welcome its first guests. Real reviews will appear here once the property has hosted its first season.";

export const managedBy = {
  name: "Keystone Property Group",
  note: "Bookings, cleaning turnaround and guest communication are managed centrally by Keystone Property Group.",
};

// No guest-facing contact email/phone or booking platform links exist yet
// for this property — confirm these with Chanelle before launch. Left as
// TODO rather than invented.
export const contact = {
  email: "TODO@example.com",
  phone: "TODO",
};
