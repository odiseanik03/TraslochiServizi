"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const servicePages = [
  { href: "/traslochi-verona", label: "Traslochi" },
  { href: "/sgomberi-verona", label: "Sgomberi" },
  { href: "/traslochi-e-sgomberi-verona", label: "Traslochi e Sgomberi" },
  { href: "/sgomberi-appartamenti-verona", label: "Sgomberi appartamenti" },
  { href: "/sgombero-cantine-verona", label: "Sgombero cantine" },
  { href: "/svuotamento-garage-verona", label: "Svuotamento garage" },
  { href: "/svuotamento-magazzini-verona", label: "Svuotamento magazzini" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lineVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    openTop: { rotate: 45, y: 6, opacity: 1 },
    openMiddle: { opacity: 0 },
    openBottom: { rotate: -45, y: -6, opacity: 1 },
  };

  const styles = {
    header: {
      background: "rgba(255, 255, 255, 0.78)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "70px",
      padding: "0 20px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid rgba(2, 6, 23, 0.10)",
      backdropFilter: "blur(10px)",
    },
    logo: {
      fontSize: "1.6rem",
      color: "var(--primary)",
      fontWeight: "900",
      margin: 0,
      letterSpacing: "-0.02em",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      gap: "18px",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "flex-end",
    },
    link: {
      color: "var(--foreground)",
      textDecoration: "none",
      fontSize: "0.95rem",
      fontWeight: "700",
      transition: "all 0.3s ease",
      padding: "8px 12px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    ctaButton: {
      background: "linear-gradient(135deg, var(--primary2) 0%, var(--primary) 100%)",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "25px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0 14px 30px rgba(90, 11, 30, 0.18)",
    },
    hamburgerLine: {
      width: "25px",
      height: "3px",
      backgroundColor: "var(--primary)",
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },
    mobilePanel: {
      position: "absolute",
      top: "70px",
      right: 0,
      left: 0,
      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.86) 100%)",
      padding: "14px 16px 18px",
      display: "none",
      flexDirection: "column",
      gap: "10px",
      boxShadow: "0 10px 26px rgba(2, 6, 23, 0.18)",
    },
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#chi-siamo", label: "Chi Siamo" },
    { href: "/#services", label: "Servizi" },
    { href: "/#zone", label: "Zone Servite" },
    { href: "/#perche", label: "Perché Sceglierci" },
    { href: "/#galleria", label: "Galleria" },
    { href: "/#recensioni", label: "Recensioni" },
    { href: "/#contatti", label: "Contatti" },
  ];

  return (
    <header style={styles.header}>
      <nav style={{ display: "contents" }} aria-label="Navigazione principale">
        <Link href="/" aria-label="Traslochi Servizi - Torna alla home" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <div
            aria-hidden="true"
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "linear-gradient(135deg, var(--accent2) 0%, var(--accent) 100%)",
              boxShadow: "0 10px 22px rgba(176, 141, 87, 0.22)",
            }}
          />
          <span style={styles.logo}>Traslochi Servizi</span>
        </Link>
      
        {/* Desktop Menu */}
        <motion.div
          style={styles.navLinks}
          className="navbarDesktop"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} style={styles.link} className="navLink">{item.label}</Link>
          ))}
          <Link
            href="/#certificato"
            style={{
              ...styles.link,
              background: "linear-gradient(135deg, #b08d57 0%, #e0c48a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
            }}
            className="navLink"
          >
            ★ Certificato
          </Link>
          <a href="tel:+393926900003" style={styles.ctaButton} className="ctaButtonPrimary">Chiama</a>
        </motion.div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="navbarMobileToggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: "none", flexDirection: "column", cursor: "pointer", gap: "5px", background: "none", border: "none", padding: 0 }}
          aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileMenuOpen}
        >
          <motion.div variants={lineVariants} animate={mobileMenuOpen ? "openTop" : "closed"} style={styles.hamburgerLine} />
          <motion.div variants={lineVariants} animate={mobileMenuOpen ? "openMiddle" : "closed"} style={styles.hamburgerLine} />
          <motion.div variants={lineVariants} animate={mobileMenuOpen ? "openBottom" : "closed"} style={styles.hamburgerLine} />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="navbarMobilePanel"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ ...styles.mobilePanel, display: "flex" }}
            >
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} style={styles.link} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
              ))}
              <Link
                href="/#certificato"
                style={{
                  ...styles.link,
                  background: "linear-gradient(135deg, #b08d57 0%, #e0c48a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 800,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                ★ Certificato
              </Link>
              <a href="tel:+393926900003" style={styles.ctaButton} onClick={() => setMobileMenuOpen(false)}>Chiama</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
