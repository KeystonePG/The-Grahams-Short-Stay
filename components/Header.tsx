import Link from "next/link";
import { site } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-tide-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 sm:px-10">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl text-sand-50">
            {site.name}
          </span>
          <span className="eyebrow text-ember-400">Clarence Point</span>
        </Link>
        <nav className="hidden gap-6 lg:flex">
          <a href="#dwellings" className="eyebrow text-sand-100 hover:text-ember-400">
            The Property
          </a>
          <a href="#rates" className="eyebrow text-sand-100 hover:text-ember-400">
            Rates
          </a>
          <a href="#location" className="eyebrow text-sand-100 hover:text-ember-400">
            Location
          </a>
          <a href="#contact" className="eyebrow text-sand-100 hover:text-ember-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
