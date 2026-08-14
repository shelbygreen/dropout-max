export const heading = {
  fontSize: "clamp(40px,11vw,132px)",
  lineHeight: 0.92,
  letterSpacing: "-0.03em",
  margin: 0,
  fontWeight: 400,
  color: "#c0326b",
  width: "100%",
  maxWidth: 1100,
  textAlign: "center"
};

export const subhead = {
  margin: 0,
  fontFamily: "'EB Garamond', Georgia, serif",
  fontSize: "clamp(24px,6vw,32px)",
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  fontWeight: 400,
  color: "#c0326b"
};

export const body = {
  margin: 0,
  fontSize: "clamp(17px,4vw,21px)",
  lineHeight: 1.5,
  color: "#2b2820",
  textWrap: "pretty",
  textAlign: "left"
};

export const quote = { ...body, fontStyle: "italic" };

export const column = {
  width: "100%",
  maxWidth: 620,
  display: "flex",
  flexDirection: "column",
  gap: "clamp(14px,3.5vw,20px)",
  marginTop: "clamp(28px,6vw,44px)"
};

export const pageSection = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "6vh clamp(20px,5vw,32px) 10vh"
};

export const rule = {
  width: "100%",
  height: 1,
  border: "none",
  background: "#d6d1b5",
  margin: "clamp(20px,5vw,32px) 0 0"
};

export const papers = [
  { paper: "linear-gradient(180deg,#ffffff 0%,#e3f5ea 100%)", ink: "#1f6b46" },
  { paper: "linear-gradient(180deg,#ffffff 0%,#fde7ef 100%)", ink: "#a3305c" },
  { paper: "linear-gradient(180deg,#ffffff 0%,#e6eefb 100%)", ink: "#2c4f8f" },
  { paper: "linear-gradient(180deg,#ffffff 0%,#fdf0dc 100%)", ink: "#8a5a18" },
  { paper: "linear-gradient(180deg,#ffffff 0%,#efe8fa 100%)", ink: "#5a3f95" },
  { paper: "linear-gradient(180deg,#ffffff 0%,#e8f4f6 100%)", ink: "#1f6070" }
];

export const tilts = ["-1.4deg", "0.9deg", "-0.6deg", "1.3deg", "-1.1deg", "0.5deg"];

export function decorate(notes) {
  return notes.map((n, i) => {
    const p = papers[i % papers.length];
    return { ...n, paper: p.paper, ink: p.ink, tilt: tilts[i % tilts.length] };
  });
}

export function paginate(notes, per = 4) {
  const out = [];
  for (let i = 0; i < notes.length; i += per) out.push(notes.slice(i, i + per));
  return out;
}

export function initialsOf(raw) {
  const t = (raw || "").trim();
  if (!t) return "Anon.";
  if (t.includes(".")) return t.toUpperCase();
  return t.split(/\s+/).filter(Boolean).map((w) => w[0].toUpperCase() + ".").join("");
}
