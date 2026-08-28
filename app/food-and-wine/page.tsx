import type { Metadata } from "next";
import { foodAndWine, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Food & wine | ${site.name}`,
};

export default function FoodAndWinePage() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-center">Food &amp; wine</p>
        <h1 className="mt-3 text-center font-display text-4xl text-ink-900">
          The Tamar Valley wine trail
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-ink-700">
          Cellar doors line both sides of the Tamar River between Launceston and George Town — best explored by car.
        </p>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {foodAndWine.map((f) => (
            <div key={f.name} className="border-l-2 border-moss-500 pl-5">
              <p className="font-display text-lg text-ink-900">{f.name}</p>
              <p className="mt-2 text-sm text-ink-700">{f.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
