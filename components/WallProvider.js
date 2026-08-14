"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { initialsOf } from "./theme";

const WallContext = createContext(null);

export function WallProvider({ children }) {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [signers, setSigners] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotes() {
      try {
        const res = await fetch("/api/wall-notes");
        const data = await res.json();
        if (Array.isArray(data.notes)) {
          const withStories = data.notes.filter((n) => n.story && n.story.trim());
          setNotes(withStories);
          setSigners(
            data.notes
              .filter((n) => n.name && n.name.trim() && n.name.trim() !== "Anon.")
              .map((n) => ({ label: n.name }))
          );
        }
      } catch (err) {
        console.error("Failed to load notes:", err);
      } finally {
        setLoading(false);
      }
    }
    loadNotes();
  }, []);

async function addNote({ story, name, contact, number }) {
  if (!story.trim()) return false;
  const initials = initialsOf(name);

  try {
    const res = await fetch("/api/wall-notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        initials,
        story: story.trim(),
        contact: !!contact,
        number: contact ? number.trim() : "",
      }),
    });

    if (!res.ok) {
      console.error("Failed to save note to Airtable");
      return false;
    }
  } catch (err) {
    console.error("Network error saving note:", err);
    return false;
  }

  const newNote = { story: story.trim(), name: initials };
  setNotes((prev) => (newNote.story ? [newNote, ...prev] : prev));
  setSigners((prev) =>
    initials && initials.trim() !== "Anon." ? [...prev, { label: initials }] : prev
  );
  setAdding(false);
  router.push("/notes");
  if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

  return (
    <WallContext.Provider value={{ notes, signers, adding, setAdding, addNote, loading }}>
      {children}
    </WallContext.Provider>
  );
}

export function useWall() {
  const ctx = useContext(WallContext);
  if (!ctx) throw new Error("useWall must be used inside <WallProvider>");
  return ctx;
}