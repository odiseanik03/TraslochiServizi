"use client";

import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AppEffects({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ position: "relative", zIndex: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
