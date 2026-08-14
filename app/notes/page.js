import { heading } from "@/components/theme";
import NotesWall from "@/components/NotesWall";

export const metadata = {
  title: "Community Notes",
  description: "Read what community members are saying about Max Herrle.",
};

export default function NotesPage() {
  return (
    <>
      <section style={{ display: "flex", justifyContent: "center", padding: "6vh clamp(20px,5vw,32px) 0" }}>
        <h1 style={heading}>
          Drop out, Max<span style={{ fontStyle: "italic" }}>.</span>
        </h1>
      </section>

      <section style={{ padding: "2vh 0 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            width: "100%",
            maxWidth: 620,
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,32px)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(17px,4vw,21px)",
              lineHeight: 1.25,
              color: "#2b2820",
              fontWeight: 400,
              textAlign: "left",
              textWrap: "pretty"
            }}
          >
            We invite the Tallahassee community to share their stories, experiences, and more about Max Herrle, the
            candidate accused of sexual assault, manipulation, and embezzlement.
            <br />
            <br />
            Read our open letter detailing why he must drop out of the Tallahassee City Commission race and apologize to
            those he&apos;s harmed.
          </h2>
        </div>

        <NotesWall />
      </section>
    </>
  );
}
