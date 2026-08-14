"use client";

import { useWall } from "./WallProvider";

export default function Signers() {
  const { signers } = useWall();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 21, lineHeight: 1.5, color: "#2b2820", textAlign: "left" }}>
      {signers.map((s, i) => (
        <span key={s.label + i}>{s.label}</span>
      ))}
    </div>
  );
}
