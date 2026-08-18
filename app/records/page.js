import { body, column, heading, pageSection, quote, rule, subhead } from "@/components/theme";
import Screenshot from "@/components/Screenshot";
import { DM_SCREENSHOTS, DM_SCREENSHOTS_SMALL, HISTORY } from "@/components/data";

export const metadata = {
  title: "Records",
  description: "More information about Max Herrle and his sexual assault allegations.",
};

const grid = (cols) => ({
  display: "grid",
  gridTemplateColumns: "repeat(" + cols + ", minmax(0, 1fr))",
  gap: "clamp(10px,2.5vw,16px)"
});

export default function RecordsPage() {
  return (
    <section style={pageSection}>
      <h1 style={heading}>
        Drop out, Max<span style={{ fontStyle: "italic" }}>.</span>
      </h1>

      <div style={column}>
        <p style={body}>
          If something on this page is inaccurate, or if you have a record you want added or removed, write to{" "}
          <a href="mailto:tlhresident@gmail.com">tlhresident@gmail.com</a>.
        </p>

        <h2 style={subhead}>From Direct Messages</h2>
        <p style={body}>
          Below are screenshots of messages sent to us detailing first- or second-hand interactions with Max Herrle. Only
          personally-identifying information has been redacted to preserve anonymity.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(8px, 2vw, 16px)",
            marginTop: "clamp(8px,2vw,16px)",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {[...DM_SCREENSHOTS, ...DM_SCREENSHOTS_SMALL].map((s) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              style={{
                height: "clamp(280px, 40vw, 420px)",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>

        <hr style={rule} />

        <h2 style={subhead}>From Community Leaders and former Max affiliates</h2>
        <p style={body}>
          Max's childhood friend, Daniel Moran, called Max "predatory" and "manipulative," and said he believes the women coming forward.
        </p>
        <div style={{ maxWidth: "320px", margin: "0 auto" }}>
          <Screenshot src="/daniel-1.jpeg" alt="Screenshot of message about Max Herrle (1)" aspect="4 / 3" style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            }}/>
        </div>
        <div style={grid(2)}>
          <Screenshot src="/daniel-2.jpeg" alt="Screenshot of message about Max Herrle (2)" aspect="16 / 15" style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}/>
          <Screenshot src="/daniel-3.jpeg" alt="Screenshot of message about Max Herrle (3)" aspect="16 / 15" style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}/>
        </div>
        <p style={body}>
          Author Jeff VanderMeer{" "}
          <a
            href="https://www.facebook.com/jeff.vandermeer/posts/totally-agree-and-max-herrle-in-my-dealings-with-him-before-i-cut-ties-was-very-/10163671782594195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            describing
          </a>{" "}
          his own dealings with Max Herrle and why he opposes his candidacy:
        </p>
        <Screenshot
          src="/jeff-vandermeer-statement.png"
          alt="Facebook post screenshot"
          aspect="4 / 3"
          />

        <p style={body}>
          Joint{" "}
          <a
            href="https://www.facebook.com/people/Leon-County-Democratic-Progressive-Caucus/61578932844600/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Statement
          </a>{" "}
          from the Leon County Progressive Caucus and partners about Max Herrle&apos;s silence in the face of multiple
          serious accusations.
        </p>
        <div style={grid(2)}>
          <Screenshot src="/joint-statement-1.png" alt="Post screenshot" aspect="16 / 15" style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}/>
          <Screenshot src="/joint-statement-2.png" alt="Post screenshot" aspect="16 / 15" style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }} />
        </div>

        <hr style={rule} />

        <h2 style={subhead}>Max&apos;s History of Electioneering</h2>
        <p style={body}>
          Max Herrle has spent years in Tallahassee&rsquo;s political scene, gaining proximity to powerful politicians and
          cover to evade accountability.
        </p>
        <p style={body}>
          Prior to his run for Tallahassee City Commission, Max was a lobbyist and political operative. Below are snippets
          from articles detailing some of his electioneering work in Tallahassee:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,3.5vw,20px)" }}>
          {HISTORY.map((h) => (
            <div
              key={h.meta}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                paddingBottom: "clamp(14px,3.5vw,20px)",
                borderBottom: "1px solid #e2ddc0"
              }}
            >
              <span style={body}>{h.meta}</span>
              <p style={quote}>
                &ldquo;
                <a href={h.url} target="_blank" rel="noopener noreferrer">
                  {h.quote}
                </a>
                &rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
