"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Open Letter" },
  { href: "/notes", label: "Notes to Max" },
  { href: "/records", label: "Other Records" },
  { href: "/info", label: "Info" }
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(8px,3vw,18px)",
        flexWrap: "wrap",
        padding: "clamp(18px,4vw,26px) 20px",
        fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 300,
        fontSize: "clamp(15px,4vw,22px)",
        letterSpacing: "0.01em"
      }}
    >
      {items.map((item, i) => (
        <span key={item.href} style={{ display: "flex", alignItems: "center", gap: "clamp(8px,3vw,18px)" }}>
          {i > 0 ? <span style={{ color: "#9a937a" }}>/</span> : null}
          <Link
            href={item.href}
            className="navLink"
            style={{ color: pathname === item.href ? "#1c1a14" : "#6b6551", borderBottom: "none" }}
          >
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
