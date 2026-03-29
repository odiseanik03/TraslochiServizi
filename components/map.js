"use client";

const Map = () => {
  return (
    <section
      id="zone"
      className="section"
    >
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Zone servite</div>
          <h2 className="title titleGradient">Verona e zone limitrofe</h2>
          <p className="subtitle">
            Interveniamo a Verona e nei comuni limitrofi. Contattaci: ti diciamo subito disponibilità e modalità.
          </p>
        </div>
        <div className="mapBadgeRow" aria-hidden="true">
          <span className="mapBadge">Verona + Dintorni</span>
        </div>
        <p className="subtitle" style={{ textAlign: "center", margin: "0 auto 28px" }}>
          Esempi di comuni serviti: San Giovanni Lupatoto, Villafranca di Verona, Bussolengo, Sommacampagna, Castel d’Azzano,
          Pescantina, Negrar.
        </p>        <div className="mapShell mapContainer">
          <iframe
            className="mapFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670163.4965447576!2d10.569068746153375!3d45.45205085388872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5eb347fe5c5b%3A0x307098715907ed0!2sProvince%20of%20Verona%2C%20Italy!5e0!3m2!1sit!2sit!4v1736015341344!5m2!1sit!2sit"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa zone servite - Verona"
            style={{ border: 0, borderRadius: "14px" }}
          ></iframe>
        </div>        <div className="btnRow" style={{ justifyContent: "center", marginTop: 18 }}>
          <a className="btn btnPrimary" href="tel:+393926900003">Chiama ora</a>
          <a className="btn btnSecondary" href="#contatti">Richiedi un preventivo</a>
        </div>
      </div>
    </section>
  );
};

export default Map;
