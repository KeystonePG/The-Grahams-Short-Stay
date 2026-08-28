import Link from "next/link";
import Weather from "@/components/Weather";
import {
  dwellings,
  nearby,
  overview,
  propertyFeatures,
  rates,
  ratesNote,
  reviewsStatus,
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

// Split by which dwelling each photo actually shows — the listing itself
// doesn't caption rooms, so this is a best-effort match based on room style
// (the secondary dwelling only has two clearly-identifiable photos; the
// main residence has far more, reflecting its larger size).
const galleryPhotos: Record<string, { src: string; alt: string; big?: boolean }[]> = {
  "main-residence": [
    { src: "/images/property/image10.jpg", alt: "Enclosed sunroom looking over the Tamar River", big: true },
    { src: "/images/property/image6.jpg", alt: "Kitchen in the main residence" },
    { src: "/images/property/image20.jpg", alt: "Living area with water views" },
    { src: "/images/property/image14.jpg", alt: "Bedroom in the main residence" },
    { src: "/images/property/image9.jpg", alt: "Lounge room with recliners and water views" },
    { src: "/images/property/image8.jpg", alt: "Dining area with water views" },
  ],
  "secondary-dwelling": [
    { src: "/images/property/image17.jpg", alt: "Kitchenette and living area in the secondary dwelling", big: true },
    { src: "/images/property/image16.jpg", alt: "Bedroom in the secondary dwelling" },
  ],
};

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed image, asymmetric text block bottom-left */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-pine-900">
        <img
          src="/images/property/main.jpg"
          alt="Aerial view of the waterfront property on the Tamar River"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-900 via-pine-900/20 to-transparent" />
        <div className="relative max-w-2xl px-6 pb-16 sm:px-10 sm:pb-24">
          <p className="eyebrow inline-block bg-pine-900 px-3 py-1.5 text-brass-300">
            {site.address}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-paper-50 sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-md text-lg text-paper-100">{site.tagline}</p>
          <div className="mt-6">
            <Weather />
          </div>
          <Link href="/book" className="btn-primary mt-6 inline-block">
            Enquire to book
          </Link>
        </div>
      </section>

      {/* Overview — asymmetric two-column */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-14 sm:px-10 sm:grid-cols-[2fr_3fr]">
        <div>
          <p className="eyebrow">The property</p>
          <p className="mt-3 font-display text-6xl text-timber-500">Welcome</p>
        </div>
        <p className="border-l border-brass-400 pl-6 text-lg text-ink-700 sm:pl-10">
          {overview.positioning}
        </p>
      </section>

      {/* Who it's for — split with divider */}
      <section className="border-t border-paper-200 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Who stays here</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900">Groups, families and couples</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:divide-x sm:divide-paper-200">
            {targetGuests.map((g) => (
              <div key={g.title} className="sm:first:pr-10 sm:last:pl-10">
                <h3 className="font-display text-xl text-timber-500">{g.title}</h3>
                <p className="mt-3 text-ink-700">{g.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dwellings — zig-zag editorial rows */}
      <section id="dwellings" className="border-t border-paper-200 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow">Where you'll stay</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900">
            The main residence &amp; the secondary dwelling
          </h2>
          <div className="mt-10 space-y-12">
            {dwellings.map((d, i) => (
              <div
                key={d.slug}
                className={`flex flex-col gap-10 sm:items-center ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
                }`}
              >
                <div className="photo-frame aspect-[4/3] w-full sm:w-3/5">
                  <img src={dwellingPhotos[d.slug]} alt={d.name} />
                </div>
                <div className="sm:w-2/5">
                  <h3 className="font-display text-2xl text-ink-900">{d.name}</h3>
                  <p className="mt-3 text-ink-700">{d.blurb}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-3 shrink-0 bg-brass-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates — rate sheet, not a card grid */}
      <section id="rates" className="border-t border-paper-200 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mt-3 text-center font-display text-3xl text-moss-500">Rates</h2>
          <div className="mt-8 divide-y-2 divide-paper-200 border-y-2 border-pine-900">
            {rates.map((r) => (
              <div key={r.season} className="flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-display text-xl text-ink-900">{r.season}</p>
                  <p className="text-xs text-ink-700/70">{r.when}</p>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm sm:justify-end">
                  <span>
                    <span className="font-display text-lg text-timber-500">{r.whole}</span>
                    <span className="text-ink-700"> /night whole property</span>
                  </span>
                  <span>
                    <span className="font-display text-lg text-timber-500">{r.secondary}</span>
                    <span className="text-ink-700"> /night secondary dwelling</span>
                  </span>
                </div>
                <p className="text-xs text-ink-700/70 sm:basis-full sm:text-right">{r.minStay}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-700/70">{ratesNote}</p>
          <div className="mt-10 text-center">
            <Link href="/book" className="btn-primary">
              Enquire to book
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery — one collage per dwelling */}
      <section className="border-t border-paper-200 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow">A closer look</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900">Life on the water</h2>
          <div className="mt-10 space-y-14">
            {dwellings.map((d) => (
              <div key={d.slug}>
                <h3 className="font-display text-xl text-timber-500">{d.name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  {galleryPhotos[d.slug]?.map((p) => (
                    <div
                      key={p.src}
                      className={`photo-frame aspect-square ${
                        p.big ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : ""
                      }`}
                    >
                      <img src={p.src} alt={p.alt} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property features — ledger list */}
      <section className="border-t border-paper-200 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">On the property</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900">Room to spread out</h2>
          <ul className="mt-10 divide-y divide-paper-200 border-y border-paper-200">
            {propertyFeatures.map((f) => (
              <li key={f} className="border-l-2 border-rust-500 py-4 pl-6 text-ink-700">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials — honest placeholder, no invented reviews */}
      <section className="border-t border-paper-200 bg-pine-900 px-6 py-14 text-center text-paper-100 sm:px-10">
        <p className="eyebrow text-brass-300">Guest reviews</p>
        <p className="mx-auto mt-6 max-w-lg font-display text-2xl leading-relaxed text-paper-50">
          &ldquo;{reviewsStatus}&rdquo;
        </p>
      </section>

      {/* Location */}
      <section id="location" className="border-t border-paper-200 bg-paper-100 px-6 py-14 sm:px-10">
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
          <div className="photo-frame mx-auto mt-10 aspect-video max-w-2xl">
            <iframe
              title="Map of 49 Sunset Boulevard, Clarence Point"
              src="https://www.openstreetmap.org/export/embed.html?bbox=146.7978%2C-41.1397%2C146.8178%2C-41.1197&layer=mapnik&marker=-41.1297%2C146.8078"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
