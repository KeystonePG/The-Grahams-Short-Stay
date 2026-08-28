import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Enquire to book | ${site.name}`,
};

export default function BookPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 sm:px-10">
      <p className="eyebrow text-center">Booking enquiry</p>
      <h1 className="mt-3 text-center font-display text-4xl text-ink-900">
        Tell us about your stay
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-ink-700">
        There&apos;s no live booking platform for {site.name} yet — send your
        dates and details below and we&apos;ll get back to you to confirm
        availability.
      </p>
      <BookingForm />
    </section>
  );
}
