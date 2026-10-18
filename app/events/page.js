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
    </section>
  );
}
