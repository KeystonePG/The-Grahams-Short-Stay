import type { Metadata } from "next";
import { attractions, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Beyond the property | ${site.name}`,
};

export default function ExplorePage() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-center">Beyond the property</p>
        <h1 className="mt-3 text-center font-display text-4xl text-ink-900">
          Exploring the Tamar Valley
        </h1>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {attractions.map((a) => (
            <div key={a.name}>
              {a.photo && (
                <div className="photo-frame mb-4 aspect-video">
                  <img src={a.photo} alt={a.name} />
                </div>
              )}
              <div className="border-l-2 border-brass-500 pl-5">
                <p className="font-display text-lg text-ink-900">{a.name}</p>
                <p className="eyebrow mt-1 text-ink-700/70">{a.distance}</p>
                <p className="mt-2 text-sm text-ink-700">{a.blurb}</p>
                {a.photoCredit && (
                  <p className="mt-2 text-xs text-ink-700/50">Photo: {a.photoCredit}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
