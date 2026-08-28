import type { Metadata } from "next";
import { events, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Local events | ${site.name}`,
};

export default function EventsPage() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">What&apos;s on</p>
        <h1 className="mt-3 font-display text-4xl text-ink-900">Local events</h1>
        <div className="mt-10 space-y-6">
          {events.map((e) => (
            <a
              key={e.name}
              href={e.url}
              target="_blank"
              rel="noreferrer"
              className="block border border-paper-200 p-6 text-left transition hover:border-brass-500"
            >
              <p className="eyebrow text-brass-600">{e.when}</p>
              <p className="mt-1 font-display text-xl text-ink-900">{e.name}</p>
              <p className="mt-2 text-sm text-ink-700">{e.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
