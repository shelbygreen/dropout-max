import { body, column, heading, pageSection } from "@/components/theme";

export const metadata = { title: "Info \u2014 Drop out, Max." };

export default function InfoPage() {
  return (
    <section style={pageSection}>
      <h1 style={heading}>
        Drop out, Max<span style={{ fontStyle: "italic" }}>.</span>
      </h1>

      <div style={column}>
        <p style={body}>
          A group of former and current Tallahassee residents wrote the open letter and created this website to openly
          document the harms Max Herrle has inflicted on the Tallahassee community.
        </p>
        <p style={body}>
          Out of fear of retaliation, the creators chose to sign with just their initials to maintain some level of
          anonymity. We are not affiliated with any campaign, party, or political committee. Just some women who believe
          in accountability and the sanctity of public office.
        </p>
        <p style={body}>
          To correct something on this site, ask a question, or share more details, write to{" "}
          <a href="mailto:tlhresident@gmail.com">tlhresident@gmail.com</a>. If you need support, the Refuge House operates
          a 24-hour hotline for Leon County. Call <a href="tel:8506812111">850-681-2111</a>.
        </p>
      </div>
    </section>
  );
}
