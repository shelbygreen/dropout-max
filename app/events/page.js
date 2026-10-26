import { body, column, heading, pageSection } from "@/components/theme";

export const metadata = {
  title: "Events",
  description: "Upcoming community picnic.",
};

export default function InfoPage() {
  return (
    <section style={pageSection}>
      <h1 style={heading}>
        Drop out, Max<span style={{ fontStyle: "italic" }}>.</span>
      </h1>

      <iframe
      className="airtable-embed"
      src="https://airtable.com/embed/appFNGBOaCDOESiWA/paggpeKnK3AO8NnwM/form"
      title="RSVP for Community Forum"
      width="100%"
      height={533}
      loading="lazy"
      style={{ background: "transparent", border: "1px solid #ccc"}}
    />

    </section>
  );
}
