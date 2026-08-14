import { body, column, heading } from "@/components/theme";
import AddButton from "@/components/AddButton";
import Signers from "@/components/Signers";

export const metadata = { title: "Open Letter \u2014 Drop out, Max." };

export default function OpenLetterPage() {
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "6vh clamp(20px,5vw,32px) 0"
        }}
      >
        <h1 style={heading}>
          Drop out, Max<span style={{ fontStyle: "italic" }}>.</span>
        </h1>

        <div style={column}>
          <p style={body}>
            The mounting allegations of sexual assault and manipulation make you unfit to hold public office. A public
            servant&rsquo;s first duty is to protect the people. You can&rsquo;t protect a community you have preyed upon.
          </p>
          <p style={body}>
            Tallahassee deserves a leader committed to curbing abuse and delivering justice, not a predator who has
            <a href="/records"> allegedly</a>:
          </p>
          <div style={body}>
            <ul>
              <li>Sexually violated an impaired, young woman;</li>
              <li>Demeaned young women in local political spaces; and</li>
              <li>Attempted to &ldquo;physically force himself onto&rdquo; a young woman after saying no multiple times.</li>
            </ul>
          </div>
          <p style={body}>
            These serious allegations represent more than a momentary lapse in judgment. They reveal your contempt for
            women and disregard for accountability. Multiple women have publicly shared stories detailing your allegedly
            violent and disturbing behavior. Instead of responsibly addressing these allegations, you&apos;ve ignored them
            &mdash; for years. Your refusal to acknowledge these allegations signals exactly who you intend to serve, if
            elected: yourself.
          </p>
          <p style={body}>
            In addition to withdrawing your candidacy for Tallahassee City Commission, you must accept accountability for
            terrorizing young women involved in Tallahassee&apos;s local politics and music scenes. If you refuse to
            apologize and suspend your campaign, we will call on your supporters and staff to withdraw their support from
            your campaign by:
          </p>
          <p style={body}>
            1. Requesting refunds for their campaign contributions;
            <br />
            2. Rescinding their endorsement; and
            <br />
            3. Terminating any remaining affiliation.
          </p>
          <p style={body}>Signed,</p>
          <Signers />
        </div>
      </section>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
          padding: "4vh clamp(20px,5vw,32px) 2vh"
        }}
      >
        <AddButton
          style={{ borderRadius: 8, padding: "14px clamp(22px,6vw,28px)", fontSize: "clamp(19px,5vw,24px)", letterSpacing: "0.01em" }}
        >
          Add your initials
        </AddButton>
      </section>
    </>
  );
}
