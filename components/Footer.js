"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(90, 11, 30, 0.72) 0%, rgba(15, 23, 42, 0.70) 55%, rgba(90, 11, 30, 0.72) 100%), url('/images/verona.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "scroll",
        color: "white",
        padding: "44px 16px 20px",
        textAlign: "center",
        position: "relative",
        animation: "fadeInUp 800ms ease-out",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="footerGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            marginBottom: "22px",
            textAlign: "left",
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ animation: "slideInLeft 700ms ease-out" }}>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "8px", fontWeight: "700" }}>
              Traslochi Servizi
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.55", opacity: "0.9" }}>
              Traslochi, sgomberi e svuotamenti professionali a Verona e provincia. Ditta specializzata in traslochi e sgomberi da oltre 35 anni.
            </p>
          </div>

          {/* Col 2: Contatti */}
          <div style={{ animation: "slideInUp 700ms ease-out 100ms backwards" }}>
            <h4 style={{ fontSize: "1.05rem", marginBottom: "10px", fontWeight: "700" }}>Contatti</h4>
            <p style={{ fontSize: "0.9rem", marginBottom: "8px" }}>
              <strong>Telefono:</strong>{" "}
              <a
                href="tel:+393926900003"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                +39 392 690 0003
              </a>
            </p>
            <p style={{ fontSize: "0.9rem", marginBottom: "8px" }}>
              <strong>Zona:</strong> Verona e provincia
            </p>
            <p style={{ fontSize: "0.9rem" }}>
              <strong>Disponibilità:</strong> 7 giorni su 7
            </p>
          </div>

          {/* Col 3: Servizi */}
          <div style={{ animation: "slideInRight 700ms ease-out 200ms backwards" }}>
            <h4 style={{ fontSize: "1.05rem", marginBottom: "10px", fontWeight: "700" }}>Servizi</h4>
            <nav aria-label="Servizi nel footer">
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ fontSize: "0.9rem", marginBottom: "6px" }}><Link href="/traslochi-verona" style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Traslochi a Verona</Link></li>
                <li style={{ fontSize: "0.9rem", marginBottom: "6px" }}><Link href="/sgomberi-verona" style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Sgomberi a Verona</Link></li>
                <li style={{ fontSize: "0.9rem", marginBottom: "6px" }}><Link href="/traslochi-e-sgomberi-verona" style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Traslochi e sgomberi a Verona</Link></li>
                <li style={{ fontSize: "0.9rem", marginBottom: "6px" }}><Link href="/sgomberi-appartamenti-verona" style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Sgombero appartamenti</Link></li>
                <li style={{ fontSize: "0.9rem", marginBottom: "6px" }}><Link href="/sgombero-cantine-verona" style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Sgombero cantine</Link></li>
                <li style={{ fontSize: "0.9rem", marginBottom: "6px" }}><Link href="/svuotamento-garage-verona" style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Svuotamento garage</Link></li>
                <li style={{ fontSize: "0.9rem" }}><Link href="/svuotamento-magazzini-verona" style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Svuotamento magazzini</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "2px",
            background: "rgba(255, 255, 255, 0.2)",
            margin: "16px 0",
          }}
        />

        {/* Bottom */}
        <div>
          <p style={{ fontSize: "0.85rem", margin: "8px 0", opacity: "0.85" }}>
            &copy; 2024–{new Date().getFullYear()} Traslochi Servizi. Tutti i diritti riservati.
          </p>
          <p style={{ fontSize: "0.8rem", margin: "8px 0", opacity: "0.7" }}>
            Traslochi e sgomberi professionali a Verona e provincia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
