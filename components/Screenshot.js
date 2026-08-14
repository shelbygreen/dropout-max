export default function Screenshot({ src, alt, aspect = "3 / 4" }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: aspect, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.15)"}}>
      {src ? (
        <img src={src} alt={alt || ""} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "1px dashed #c8c2a4",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10.5,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#a09872",
            textAlign: "center",
            padding: 16
          }}
        >
          {alt || "Screenshot"}
        </div>
      )}
    </div>
  );
}
