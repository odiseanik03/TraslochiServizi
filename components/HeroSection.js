"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.22)" },
};

const WHATSAPP_PREFILL = encodeURIComponent(
  "Ciao Traslochi Servizi, vorrei un preventivo per trasloco/sgombero a Verona e zone limitrofe. Potete indicarmi disponibilità e costo? Grazie!"
);

const HeroSection = () => {
  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="heroRoot"
    >
      <div
        className="heroOverlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(2, 6, 23, 0.78) 0%, rgba(2, 6, 23, 0.62) 40%, rgba(2, 6, 23, 0.42) 100%)",
          zIndex: 1,
        }}
      />

      {/* Subtle premium sheen */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(900px 380px at 18% 6%, rgba(139, 30, 63, 0.18), transparent 62%), radial-gradient(700px 340px at 85% 12%, rgba(176, 141, 87, 0.16), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="heroContainer">
        <div className="heroGrid">
          <div className="heroCopy">
            <div className="heroBadge">✓ Sempre <strong style={{ fontWeight: 900, textTransform: 'uppercase' }}>PREVENTIVO GRATUITO</strong> e prezzi onesti</div>
            <h1 className="heroTitle heroTextReveal">
              Traslochi e Sgomberi
              <br />
              <span className="heroAccent heroShimmer">rapidi</span>, puliti, organizzati
            </h1>
            <p className="heroLead heroTextReveal heroTextRevealDelayed">
              Sgomberi, traslochi e svuotamento cantine, soffitte e garage a Verona e provincia. Preventivi gratuiti, interventi rapidi, 7 giorni su 7.
            </p>

            {/* Desktop CTAs */}
            <div className="btnRow heroCtasDesktop" style={{ marginTop: 20 }}>
              <motion.a href="tel:+393926900003" variants={buttonVariants} whileHover="hover" className="btn btnPrimary">
                Chiama ora
              </motion.a>
              <motion.a href="#contatti" variants={buttonVariants} whileHover="hover" className="btn btnSecondary">
                Richiedi un preventivo
              </motion.a>
              <motion.a
                href={`https://wa.me/393926900003?text=${WHATSAPP_PREFILL}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                className="btn btnWhatsApp"
              >
                Scrivici su WhatsApp
              </motion.a>
            </div>

            {/* Mobile CTAs (2 buttons only, clean) */}
            <div className="heroCtasMobile" aria-label="Azioni rapide">
              <motion.a
                href={`https://wa.me/393926900003?text=${WHATSAPP_PREFILL}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                className="btn btnWhatsApp heroCtaPrimary"
              >
                Scrivici su WhatsApp
              </motion.a>
              <motion.a href="tel:+393926900003" variants={buttonVariants} whileHover="hover" className="btn btnPrimary heroCtaPrimary">
                Chiama ora
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="heroMedia"
          >
            <div className="heroMediaInner heroMediaInnerShine heroMediaInnerPhoto">
              <Image
                className="heroMediaImg"
                src="/images/hero-image.jpeg"
                alt="Furgone Traslochi Servizi per traslochi e sgomberi a Verona e zone limitrofe"
                width={420}
                height={280}
                priority
                sizes="(max-width: 1024px) 0px, (max-width: 1400px) 34vw, 420px"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
