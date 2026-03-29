"use client";

import Link from "next/link";

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.href
        ? `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.traslochiservizi.it"}${item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav
        aria-label="Percorso di navigazione"
        style={{
          padding: "12px 0 0",
          fontSize: "0.85rem",
          color: "var(--muted)",
        }}
      >
        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            alignItems: "center",
          }}
        >
          {items.map((item, idx) => (
            <li
              key={item.name}
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              {idx > 0 && (
                <span aria-hidden="true" style={{ opacity: 0.5 }}>
                  ›
                </span>
              )}
              {item.href && idx < items.length - 1 ? (
                <Link
                  href={item.href}
                  style={{
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current={idx === items.length - 1 ? "page" : undefined}>
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
