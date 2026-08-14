"use client";

import { useRef } from "react";
import { useWall } from "./WallProvider";
import { decorate, paginate } from "./theme";
import AddButton from "./AddButton";

export default function NotesWall() {
  const { notes } = useWall();
  const scroller = useRef(null);
  const pages = paginate(decorate(notes), 4);

  function scrollBy(dir) {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: 26, paddingTop: 24 }}>
        <button type="button" aria-label="Scroll left" className="arrowBtn" onClick={() => scrollBy(-1)}>
          &larr;
        </button>
        <button type="button" aria-label="Scroll right" className="arrowBtn" onClick={() => scrollBy(1)}>
          &rarr;
        </button>
      </div>

      <div
        ref={scroller}
        className="scroller"
        style={{
          display: "flex",
          width: "calc(100% - 2 * clamp(20px,5vw,32px))",
          maxWidth: 620,
          margin: "0 auto",
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          padding: "28px 0 40px"
        }}
      >
        {pages.map((page, p) => (
          <div
            key={p}
            className="notes-page"
            style={{
              scrollSnapAlign: "start"
            }}
          >
            {page.map((note, i) => (
              <article
                key={p + "-" + i}
                style={{
                  background: note.paper,
                  borderRadius: 10,
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  textAlign: "center",
                  minHeight: 180,
                  boxShadow: "0 14px 26px -18px rgba(28,26,20,0.42)",
                  transform: "rotate(" + note.tilt + ")",
                  animation: "riseIn 320ms ease both"
                }}
              >
                <p style={{ margin: 0, fontStyle: "italic", fontSize: "clamp(13px,3.4vw,15px)", lineHeight: 1.15, color: note.ink, textWrap: "pretty" }}>
                  I signed because
                </p>
                <p style={{ margin: 0, fontSize: "clamp(15px,3.8vw,17px)", lineHeight: 1.2, color: note.ink, textWrap: "pretty" }}>
                  {note.story}
                </p>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 300,
                    fontSize: 12,
                    lineHeight: 1.35,
                    color: note.ink,
                    opacity: 0.85
                  }}
                >
                  {note.name}
                </p>
              </article>
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "0 32px 6vh" }}>
        <AddButton style={{ borderRadius: 999, padding: "14px clamp(24px,7vw,36px)", fontSize: "clamp(19px,5vw,24px)" }}>
          Add your note
        </AddButton>
      </div>
    </>
  );
}