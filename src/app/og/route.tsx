/* src/app/og/route.tsx */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = url.origin;

  const lang = (url.searchParams.get("lang") ?? "es").toLowerCase();
  const title =
    lang === "en" ? "Remote Hands 24/7 in Madrid" : "Manos remotas 24/7 en Madrid";
  const subtitle =
    lang === "en"
      ? "Network & Fiber Engineers • Madrid DCs"
      : "Ingenieros de redes y fibra • DCs de Madrid";

  const logoUrl = `${origin}/logo-dark.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "linear-gradient(135deg, #0b1220 0%, #0f172a 40%, #0b1220 100%)",
          color: "#fff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        {/* fila logo + textos */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img
            src={logoUrl}
            alt="Logo"
            width={140}
            height={140}
            style={{ borderRadius: 24 }}
          />
          {/* este <div> tiene 2 hijos -> display required */}
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <div style={{ fontSize: 38, opacity: 0.9, fontWeight: 700 }}>
              Hands Remote Madrid
            </div>
            <div style={{ fontSize: 26, opacity: 0.7 }}>
              {lang === "en"
                ? "Data Center Installation Experts"
                : "Expertos en instalaciones de Data Center"}
            </div>
          </div>
        </div>

        {/* separadores con display explícito para silenciar el runtime */}
        <div style={{ height: 32, display: "flex" }} />

        {/* título principal */}
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
          {title}
        </div>

        <div style={{ height: 14, display: "flex" }} />

        {/* subtítulo */}
        <div style={{ display: "flex", fontSize: 32, opacity: 0.85 }}>
          {subtitle}
        </div>
      </div>
    ),
    { ...size }
  );
}
