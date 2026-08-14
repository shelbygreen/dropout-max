"use client";

import { useWall } from "./WallProvider";

export default function AddButton({ children, style }) {
  const { setAdding } = useWall();
  return (
    <button type="button" className="ghostBtn" onClick={() => setAdding(true)} style={style}>
      {children}
    </button>
  );
}
