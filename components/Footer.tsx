import { managedBy, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-brass-500 bg-pine-900 px-6 py-16 text-paper-100 sm:px-10"
    >
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-10 sm:flex-row">
        <div>
          <p className="font-display text-2xl text-paper-50">{site.name}</p>
          <p className="mt-1 text-paper-200">{site.address}</p>
        </div>
        <div className="max-w-sm sm:text-right">
          <p className="text-sm text-paper-200">
            {managedBy.note} Contact details for enquiries and bookings are
            being finalised — check back soon.
          </p>
          <p className="mt-6 text-xs text-paper-200/70">
            &copy; {new Date().getFullYear()} {site.name}, managed by{" "}
            {managedBy.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
