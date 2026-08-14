"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SEED_NOTES, SEED_SIGNERS } from "./data";
import { initialsOf } from "./theme";

const STORAGE_KEY = "dropoutmax.wall.v1";
const WallContext = createContext(null);

export function WallProvider({ children }) {
  const router = useRouter();
  const [notes, setNotes] = useState(SEED_NOTES);
  const [signers, setSigners] = useState(SEED_SIGNERS);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (Array.isArray(saved.notes)) setNotes(saved.notes);
      if (Array.isArray(saved.signers)) setSigners(saved.signers);
    } catch {}
  }, []);

  function persist(nextNotes, nextSigners) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ notes: nextNotes, signers: nextSigners }));
    } catch {}
  }

  function addNote({ story, name }) {
    if (!story.trim()) return false;
    const initials = initialsOf(name);
    const nextNotes = [{ story: story.trim(), name: initials }, ...notes];
    const nextSigners = [...signers, { label: initials }];
    setNotes(nextNotes);
    setSigners(nextSigners);
    persist(nextNotes, nextSigners);
    setAdding(false);
    router.push("/notes");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }

  return (
    <WallContext.Provider value={{ notes, signers, adding, setAdding, addNote }}>
      {children}
    </WallContext.Provider>
  );
}

export function useWall() {
  const ctx = useContext(WallContext);
  if (!ctx) throw new Error("useWall must be used inside <WallProvider>");
  return ctx;
}
