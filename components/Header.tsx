import Link from "next/link";
import { site } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-brass-500 bg-charcoal-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 sm:px-10">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl text-paper-50">
            {site.name}
          </span>
          <span className="eyebrow text-brass-400">Clarence Point</span>
        </Link>
        <nav className="hidden gap-6 lg:flex">
          <a href="#dwellings" className="eyebrow text-paper-100 hover:text-brass-400">
            The Property
          </a>
          <a href="#rates" className="eyebrow text-paper-100 hover:text-brass-400">
            Rates
          </a>
          <a href="#location" className="eyebrow text-paper-100 hover:text-brass-400">
            Location
          </a>
          <a href="#contact" className="eyebrow text-paper-100 hover:text-brass-400">
            Contact
          </a>
        </nav>
        <Link
          href="/book"
          className="hidden shrink-0 border border-brass-500 px-5 py-2 text-sm font-medium text-paper-50 transition hover:bg-brass-500 hover:text-charcoal-900 lg:inline-block"
        >
          Book
        </Link>
      </div>
    </header>
  );
}
