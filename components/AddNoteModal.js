"use client";

import { useState } from "react";
import { useWall } from "./WallProvider";

const label = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 9.5,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#8b8467"
};

const field = {
  fontFamily: "'Caveat', cursive",
  fontSize: 27,
  lineHeight: 1.2,
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #c8c2a4",
  padding: "6px 2px",
  resize: "none",
  outline: "none"
};

export default function AddNoteModal() {
  const { adding, setAdding, addNote } = useWall();
  const [name, setName] = useState("");
  const [story, setStory] = useState("");

  if (!adding) return null;

  function post() {
    if (addNote({ story, name })) {
      setName("");
      setStory("");
    }
  }

  return (
    <div
      onClick={() => setAdding(false)}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(28,26,20,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        zIndex: 50
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(600px, 100%)",
          background: "#f7f3dd",
          borderRadius: 1,
          padding: 40,
          display: "flex",
          flexDirection: "column",
          gap: 22,
          boxShadow: "0 46px 90px -46px rgba(28,26,20,0.8)",
          animation: "riseIn 220ms ease both"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
          <h3 style={{ margin: 0, fontSize: 36, fontWeight: 400, letterSpacing: "-0.025em" }}>Add your name:</h3>
          <button type="button" aria-label="Close" className="closeBtn" onClick={() => setAdding(false)}>
            ×
          </button>
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={label}>Your initials:</span>
          <textarea
            rows={1}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="J.D."
            style={{ ...field, color: "#1c1a14" }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={label}>Have something to say about Max Herrle?</span>
          <textarea
            rows={3}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="Max seems unstable, self centered, has a sketchy history as a lobbyist and has sexual assault allegations."
            style={{ ...field, color: "#8a2f1d" }}
          />
        </label>

        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 6 }}>
          <button
            type="button"
            className="ghostBtn"
            onClick={post}
            style={{ borderRadius: 999, padding: "14px 36px", fontSize: 24, letterSpacing: "0.01em" }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
