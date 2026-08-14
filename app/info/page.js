import { body, column, heading, pageSection } from "@/components/theme";

export const metadata = {
  title: "Info",
  description: "Who we are and why we wrote this open letter.",
};

export default function InfoPage() {
  return (
    <section style={pageSection}>
      <h1 style={heading}>
        Drop out, Max<span style={{ fontStyle: "italic" }}>.</span>
      </h1>

      <div style={column}>
        <p style={body}>
          A group of former and current Tallahassee residents wrote <a href="/">this open letter</a> to force a larger, and more open conversation about Max Herrle and his refusal to address mounting sexual assault and manipulation allegations.
        </p>
        <p style={body}>
          Out of fear of retaliation, the creators chose to sign with just their initials to maintain some level of
          anonymity. We are not affiliated with any campaign, party, or political committee. Just some women who believe
          in accountability and the sanctity of public office.
        </p>
        <p style={body}>
          We invite members of the public to sign the open letter and post their stories about Max to the <a href="/notes">"wall"</a>. The more stories we share, the more pressure we put on Max and his enablers to address the issue of sexual assault and complacency towards abuse in Tallahassee. Visit the <a href="/records">records page</a> to view first- and second-hand accounts of Max's exploitative actions. We received consent to post those screenshots.
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
