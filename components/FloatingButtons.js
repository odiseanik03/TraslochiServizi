"use client";

import { FaCommentDots, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WHATSAPP_PREFILL = encodeURIComponent(
  "Ciao Traslochi Servizi, vorrei informazioni e un preventivo. Zona: Verona e limitrofi. Grazie!"
);

export default function FloatingButtons() {
  return (
    <div className="floatingActions">
      <motion.a
        href={`https://wa.me/393926900003?text=${WHATSAPP_PREFILL}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="floatingBtn floatingBtnWhatsapp"
        aria-label="Contattaci via WhatsApp"
        title="WhatsApp"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="floatingSvg" aria-hidden="true" focusable={false} />
      </motion.a>
      <motion.a
        href="tel:+393926900003"
        className="floatingBtn floatingBtnPhone"
        aria-label="Chiama ora"
        title="Chiama"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPhoneAlt className="floatingSvg" aria-hidden="true" focusable={false} />
      </motion.a>
      <motion.a
        href="sms:+393926900003"
        className="floatingBtn floatingBtnMessage"
        aria-label="Invia un messaggio"
        title="Messaggio"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaCommentDots className="floatingSvg" aria-hidden="true" focusable={false} />
      </motion.a>
    </div>
  );
}

