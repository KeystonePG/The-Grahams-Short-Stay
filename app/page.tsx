import Link from "next/link";
import {
  dwellings,
  nearby,
  overview,
  propertyFeatures,
  rates,
  ratesNote,
  site,
  targetGuests,
} from "@/lib/content";

// Dwelling and gallery photography below is sourced from the property's 2025
// sale listing (Peter Lees Real Estate, Launceston) as a temporary stand-in
// while the property is prepared for guests — swap for fresh photography
// (and drop the listing's watermark) before the site goes public.
const dwellingPhotos: Record<string, string> = {
  "main-residence": "/images/property/image3.jpg",
  "secondary-dwelling": "/images/property/image17.jpg",
};

const galleryPhotos = [
  { src: "/images/property/image10.jpg", alt: "Enclosed sunroom looking over the Tamar River" },
  { src: "/images/property/image6.jpg", alt: "Kitchen in the main residence" },
  { src: "/images/property/image20.jpg", alt: "Living area with water views" },
  { src: "/images/property/image14.jpg", alt: "Bedroom in the main residence" },
  { src: "/images/property/image9.jpg", alt: "Lounge room with recliners and water views" },
  { src: "/images/property/image16.jpg", alt: "Bedroom in the secondary dwelling" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tide-900 px-6 py-24 text-center text-sand-50 sm:px-10">
        <p className="eyebrow text-ember-400">{site.address}</p>
        <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
          {site.name}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-sand-100">
          {site.tagline}
        </p>
        <img
          src="/images/property/main.jpg"
          alt="Aerial view of the waterfront property on the Tamar River"
          className="mx-auto mt-10 aspect-video max-w-3xl rounded-2xl object-cover shadow-lg"
        />
        <Link href="/book" className="btn-primary mt-8 inline-block">
          Enquire to book
        </Link>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10">
        <p className="eyebrow">The property</p>
        <h2 className="mt-3 font-display text-3xl text-ink-900">
          {overview.landSize} of waterfront on the Tamar River
        </h2>
        <p className="mt-4 text-ink-700">{overview.positioning}</p>
      </section>

      {/* Dwellings */}
      <section id="dwellings" className="bg-sand-100 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow text-center">Two homes, one title</p>
          <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
            The main residence &amp; the secondary dwelling
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {dwellings.map((d) => (
              <div key={d.slug} className="overflow-hidden rounded-2xl bg-sand-50 shadow-sm">
                <img
                  src={dwellingPhotos[d.slug]}
                  alt={d.name}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="font-display text-2xl text-ink-900">{d.name}</h3>
                  <p className="mt-3 text-ink-700">{d.blurb}</p>
                  <ul className="mt-4 space-y-1 text-sm text-ink-700">
                    {d.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <p className="eyebrow text-center">A closer look</p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
          Life on the water
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryPhotos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              className="aspect-square w-full rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* Property features */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <p className="eyebrow text-center">On the property</p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
          Room to spread out
        </h2>
        <ul className="mx-auto mt-10 grid max-w-xl gap-x-8 gap-y-3 text-ink-700 sm:grid-cols-2">
          {propertyFeatures.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Who it's for */}
      <section className="bg-sand-100 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow text-center">Who stays here</p>
          <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
            Groups, families and couples
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {targetGuests.map((g) => (
              <div key={g.title} className="rounded-2xl bg-sand-50 p-6">
                <h3 className="font-display text-xl text-ink-900">{g.title}</h3>
                <p className="mt-2 text-ink-700">{g.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
        <p className="eyebrow text-center">Launch rates</p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
          Seasonal rate card
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-bay-300 text-ink-900">
                <th className="py-3 pr-4 font-display text-base font-normal">Season</th>
                <th className="py-3 pr-4 font-display text-base font-normal">Whole property</th>
                <th className="py-3 pr-4 font-display text-base font-normal">Secondary dwelling</th>
                <th className="py-3 font-display text-base font-normal">Min. stay</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r) => (
                <tr key={r.season} className="border-b border-bay-100 text-ink-700">
                  <td className="py-3 pr-4">
                    {r.season}
                    <span className="block text-xs text-ink-700/70">{r.when}</span>
                  </td>
                  <td className="py-3 pr-4">{r.whole}/night</td>
                  <td className="py-3 pr-4">{r.secondary}/night</td>
                  <td className="py-3">{r.minStay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-sm text-ink-700/70">{ratesNote}</p>
        <div className="mt-10 text-center">
          <Link href="/book" className="btn-primary">
            Enquire to book
          </Link>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-sand-100 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Getting here</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900">Clarence Point, Tamar Valley</h2>
          <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-x-10 gap-y-2 text-ink-700">
            {nearby.townsAndDistance.map((t) => (
              <li key={t.name}>
                {t.name} — {t.distance}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-xl text-sm text-ink-700">
            Arriving with a boat, caravan or trailer? {nearby.storage.detail} (
            {nearby.storage.phone})
          </p>
        </div>
      </section>
    </>
  );
}
