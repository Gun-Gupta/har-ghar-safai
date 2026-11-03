"use client";

import React, { useState } from "react";
import { Menu, X, Phone, MessageSquare, Tag } from "lucide-react";
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  TEL_PRIMARY_LINK,
  TEL_SECONDARY_LINK,
  getWhatsAppLink,
} from "@/utils/contact";

export default function Navbar({
  onBookClick,
}: {
  onBookClick?: (promo?: string) => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backgroundColor: "rgba(250, 246, 240, 0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(29, 26, 24, 0.08)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "62px",
        }}
      >
        {/* Brand Logo - Compact and elegant */}
        <a
          href="#hero"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#1E1C1A",
                textTransform: "uppercase",
                lineHeight: "1",
              }}
            >
              HAR GHAR SAFAI
            </span>
            <span
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#D97706",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8E8781",
              fontWeight: 600,
              marginTop: "2px",
            }}
          >
            HOME CLEANING ATELIER
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "22px",
          }}
          className="desktop-nav"
        >
          <a
            href="#hero"
            style={{
              textDecoration: "none",
              color: "#1E1C1A",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
          >
            Home
          </a>
          <a
            href="#services"
            style={{
              textDecoration: "none",
              fontSize: "0.78rem",
              fontWeight: 700,
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              padding: "4px 12px",
              borderRadius: "9999px",
              color: "#B45309",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            <Tag size={11} />
            <span>Plans &amp; Rates</span>
          </a>
          <a
            href="#reviews"
            style={{
              textDecoration: "none",
              color: "#57524E",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
          >
            Reviews
          </a>
          <a
            href="#faqs"
            style={{
              textDecoration: "none",
              color: "#57524E",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
          >
            FAQs
          </a>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: "#57524E",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Actions - Both Phone Numbers Available */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Dual Helpline Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 12px",
              borderRadius: "9999px",
              backgroundColor: "rgba(217, 119, 6, 0.08)",
              border: "1px solid rgba(217, 119, 6, 0.25)",
              fontSize: "0.76rem",
              fontWeight: 700,
            }}
          >
            <Phone size={12} color="#D97706" />
            <a
              href={TEL_SECONDARY_LINK}
              title={`Call Line 2: ${SECONDARY_PHONE}`}
              style={{ color: "#92400E", textDecoration: "none" }}
            >
              93026 42694
            </a>
          </div>

          {/* Quick WhatsApp Connect */}
          <a
            href={getWhatsAppLink("Hi Har Ghar Safai! I want to book a cleaning slot.")}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "#25D366",
              color: "#FFFFFF",
              fontSize: "0.76rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 3px 10px rgba(37, 211, 102, 0.3)",
              transition: "all 0.2s ease",
            }}
          >
            <MessageSquare size={13} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "#1E1C1A",
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#FAF6F0",
            borderTop: "1px solid rgba(29, 26, 24, 0.08)",
            padding: "16px 20px 22px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "#1E1C1A",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "#B45309",
              fontSize: "0.95rem",
              fontWeight: 700,
            }}
          >
            Plans: ₹199 / Full House / Custom
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "#57524E",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            Reviews &amp; Ratings (4.9★)
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "#57524E",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            FAQs &amp; Guarantees
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              color: "#57524E",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            Contact Details
          </a>

          <div style={{ paddingTop: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href={getWhatsAppLink("Hi Har Ghar Safai! I want to book a cleaning slot.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn"
              style={{
                width: "100%",
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "11px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.85rem",
                borderRadius: "10px",
              }}
            >
              <MessageSquare size={16} />
              <span>Book on WhatsApp ({PRIMARY_PHONE})</span>
            </a>

            <a
              href={TEL_PRIMARY_LINK}
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-dark"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.85rem",
                borderRadius: "10px",
              }}
            >
              <Phone size={14} color="#FBBF24" />
              <span>Call Helpline 1: {PRIMARY_PHONE}</span>
            </a>

            <a
              href={TEL_SECONDARY_LINK}
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-dark"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.85rem",
                borderRadius: "10px",
                backgroundColor: "#2E2A27",
              }}
            >
              <Phone size={14} color="#FBBF24" />
              <span>Call Helpline 2: {SECONDARY_PHONE}</span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
