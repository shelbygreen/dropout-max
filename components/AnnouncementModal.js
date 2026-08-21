"use client";

import { useState } from "react";
import Screenshot from "@/components/Screenshot";

export default function AnnouncementModal() {
  const [open, setOpen] = useState(true);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(28,26,20,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        zIndex: 1000,
        animation: "fadeIn 200ms ease both"
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#efeddb",
          borderRadius: 14,
          padding: "32px clamp(24px,5vw,40px)",
          maxWidth: 480,
          width: "100%",
          position: "relative",
          boxShadow: "0 20px 50px -20px rgba(28,26,20,0.5)",
          fontFamily: "'EB Garamond', Georgia, serif",
          textAlign: "center"
        }}
      >
        <button
          type="button"
          className="closeBtn"
          aria-label="Close announcement"
          onClick={close}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          &times;
        </button>

        <h2 style={{ margin: "0 0 12px", fontSize: "clamp(22px,5vw,28px)", color: "#c0326b", fontWeight: 400 }}>
          Has Max Herrle sent you an apology text?
        </h2>

        <p style={{ margin: 0, fontSize: "clamp(16px,4vw,18px)", lineHeight: 1.5, color: "#2b2820" }}>
          We're collecting them to prove that we're not liars. Send it to tlhresident@gmail.com. <br/> <br/> Here's one he sent to his victim, Lauren, before he announced his run for Tallahassee City Commission:
        </p>
        <Screenshot src="/Pre-Campaign-Apology-Text-1.png" aspect="4 / 3"/>

        <button type="button" className="ghostBtn" onClick={close} style={{ marginTop: 20, padding: "10px 24px", borderRadius: 999, fontSize: 16 }}>
          Got it!
        </button>
      </div>
    </div>
  );
}