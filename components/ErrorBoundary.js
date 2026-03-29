"use client";

import { useEffect } from "react";

export default function ErrorBoundary({ children }) {
  useEffect(() => {
    // Suppress hydration errors from console
    const originalError = console.error;
    console.error = function (...args) {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        (args[0].includes("Hydration failed") ||
          args[0].includes("hydration") ||
          args[0].includes("mismatch") ||
          args[0].includes("Extra attributes"))
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    // Also suppress React warnings
    const originalWarn = console.warn;
    console.warn = function (...args) {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        (args[0].includes("Hydration") ||
          args[0].includes("hydration"))
      ) {
        return;
      }
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return children;
}
