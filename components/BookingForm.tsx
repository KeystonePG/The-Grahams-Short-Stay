"use client";

import { useState } from "react";
import { contact, site } from "@/lib/content";

const inputClass =
  "w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-2.5 text-ink-900 outline-none transition focus:border-bay-500";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const dwelling = form.get("dwelling");
    const checkIn = form.get("checkIn");
    const checkOut = form.get("checkOut");
    const guests = form.get("guests");
    const message = form.get("message");

    const subject = `Booking enquiry — ${site.name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interested in: ${dwelling}`,
      `Check-in: ${checkIn}`,
      `Check-out: ${checkOut}`,
      `Guests: ${guests}`,
      "",
      "Message:",
      String(message ?? ""),
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-ink-700">
            Full name
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-ink-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-ink-700">
            Phone
          </label>
          <input id="phone" name="phone" className={inputClass} />
        </div>
        <div>
          <label
            htmlFor="dwelling"
            className="mb-1.5 block text-sm text-ink-700"
          >
            Interested in
          </label>
          <select id="dwelling" name="dwelling" className={inputClass}>
            <option value="Whole property">Whole property</option>
            <option value="Secondary dwelling only">
              Secondary dwelling only
            </option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label
            htmlFor="checkIn"
            className="mb-1.5 block text-sm text-ink-700"
          >
            Check-in
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="checkOut"
            className="mb-1.5 block text-sm text-ink-700"
          >
            Check-out
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="guests"
            className="mb-1.5 block text-sm text-ink-700"
          >
            Guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-ink-700">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send enquiry
      </button>

      {sent && (
        <p className="text-sm text-ink-700">
          Your email app should have opened with your enquiry ready to send —
          if it didn&apos;t, email us directly at {contact.email}.
        </p>
      )}
    </form>
  );
}
