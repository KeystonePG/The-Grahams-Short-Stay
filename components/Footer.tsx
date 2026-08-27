import { managedBy, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-tide-900 px-6 py-16 text-sand-100 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
        <p className="font-display text-2xl text-sand-50">{site.name}</p>
        <p className="text-sand-200">{site.address}</p>
        <p className="mt-4 max-w-md text-sm text-sand-200">
          {managedBy.note} Contact details for enquiries and bookings are
          being finalised — check back soon.
        </p>
        <p className="mt-8 text-xs text-sand-300/70">
          &copy; {new Date().getFullYear()} {site.name}, managed by{" "}
          {managedBy.name}
        </p>
      </div>
    </footer>
  );
}
