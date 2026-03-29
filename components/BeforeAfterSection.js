"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeforeAfterSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const imagePairs = [
    { before: "/images/before1.jpeg", after: "/images/after1.jpeg", label: "sgombero cantina" },
    { before: "/images/before2.jpeg", after: "/images/after2.jpeg", label: "svuotamento garage" },
    { before: "/images/before3.jpeg", after: "/images/after3.jpeg", label: "sgombero appartamento" },
    { before: "/images/before4.jpeg", after: "/images/after4.jpeg", label: "svuotamento locale" },
  ];

  return (
    <section
      id="galleria"
      className="section sectionAlt"
    >
      <div className="container">
        <div className="sectionHeader" style={{ alignItems: "center", textAlign: "center" }}>
          <div className="eyebrow">Galleria</div>
          <h2 className="title titleGradient">Lavori e risultati</h2>
          <p className="subtitle" style={{ margin: "0 auto" }}>
            Alcuni esempi di interventi (prima/dopo) su sgomberi e svuotamenti. Ordine, rapidità e attenzione ai dettagli.
          </p>
        </div>

        <Slider {...sliderSettings}>
          {imagePairs.map((pair, index) => (
            <motion.div
              key={index}
              className="baSlideWrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "12px",
                flexDirection: "row",
              }}
            >
              {/* Before Image */}
              <div
                style={{
                  flex: "1",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    background: "linear-gradient(135deg, var(--accent2) 0%, var(--accent) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    marginBottom: "15px",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                  }}
                >
                  Prima
                </h3>
                <Image
                  src={pair.before}
                  alt={`Prima dell'intervento di ${pair.label} a Verona`}
                  width={350}
                  height={263}
                  loading="lazy"
                  className="baImage baBefore"
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    height: "auto",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    borderRadius: "15px",
                    border: "1px solid rgba(2, 6, 23, 0.10)",
                    boxShadow: "0 18px 50px rgba(2, 6, 23, 0.12)",
                  }}
                />
              </div>

              {/* Arrow in the middle */}
              <div
                className="baArrowContainer"
                style={{
                  flex: "0.2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "rotate(0deg)",
                }}
              >
                <motion.span
                  style={{
                    color: "rgba(15, 23, 42, 0.55)",
                    fontSize: "2.2rem",
                    fontWeight: "900",
                  }}
                  animate={{ opacity: [0.65, 1, 0.65] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </div>

              {/* After Image */}
              <div
                style={{
                  flex: "1",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    background: "linear-gradient(135deg, var(--primary2) 0%, var(--primary) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    marginBottom: "15px",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                  }}
                >
                  Dopo
                </h3>
                <Image
                  src={pair.after}
                  alt={`Dopo l'intervento di ${pair.label} a Verona`}
                  width={350}
                  height={263}
                  loading="lazy"
                  className="baImage baAfter"
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    height: "auto",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    borderRadius: "15px",
                    border: "1px solid rgba(2, 6, 23, 0.10)",
                    boxShadow: "0 18px 50px rgba(2, 6, 23, 0.12)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </Slider>

        <div className="btnRow" style={{ justifyContent: "center", marginTop: 18 }}>
          <a className="btn btnPrimary" href="#contatti">Richiedi un preventivo</a>
          <a className="btn btnSecondary" href="tel:+393926900003">Chiama ora</a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
