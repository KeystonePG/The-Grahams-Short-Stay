import Link from "next/link";
import { site } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-brass-400 bg-pine-700">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <svg
            viewBox="0 0 56 40"
            className="h-9 w-11 shrink-0"
            fill="none"
            aria-hidden="true"
          >
            {/* Two rooflines — the main residence and the secondary dwelling */}
            <path
              d="M4 26 L20 8 L36 26"
              stroke="var(--color-brass-300)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 28 L42 14 L54 28"
              stroke="var(--color-brass-300)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
            {/* Waterfront ripple beneath both homes */}
            <path
              d="M0 33 Q7 29 14 33 T28 33 T42 33 T56 33"
              stroke="var(--color-brass-300)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M4 37 Q11 34 18 37 T32 37 T46 37"
              stroke="var(--color-brass-300)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl text-paper-50">
              {site.name}
            </span>
            <span className="eyebrow text-brass-300">Clarence Point</span>
          </span>
        </Link>
        <nav className="hidden gap-5 lg:flex">
          <Link href="/#dwellings" className="eyebrow text-paper-100 hover:text-brass-300">
            The Property
          </Link>
          <Link href="/#rates" className="eyebrow text-paper-100 hover:text-brass-300">
            Rates
          </Link>
          <Link href="/explore" className="eyebrow text-paper-100 hover:text-brass-300">
            Beyond the Property
          </Link>
          <Link href="/food-and-wine" className="eyebrow text-paper-100 hover:text-brass-300">
            Food &amp; Wine
          </Link>
          <Link href="/events" className="eyebrow text-paper-100 hover:text-brass-300">
            Events
          </Link>
          <Link href="/#location" className="eyebrow text-paper-100 hover:text-brass-300">
            Location
          </Link>
          <Link href="/#contact" className="eyebrow text-paper-100 hover:text-brass-300">
            Contact
          </Link>
        </nav>
        <Link
          href="/book"
          className="hidden shrink-0 border border-brass-400 px-5 py-2 text-sm font-medium text-paper-50 transition hover:bg-brass-400 hover:text-pine-900 lg:inline-block"
        >
          Book
        </Link>
      </div>
    </header>
  );
}
