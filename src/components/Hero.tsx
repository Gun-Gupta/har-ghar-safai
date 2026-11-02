"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, CheckCircle2, Phone, MessageSquare, Tag, ShieldCheck } from "lucide-react";
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  TEL_PRIMARY_LINK,
  TEL_SECONDARY_LINK,
  CONTACT_PHONE,
  TEL_LINK,
  getWhatsAppLink,
} from "@/utils/contact";

export default function Hero({
  onBookClick,
}: {
  onBookClick?: (promo?: string, service?: string) => void;
}) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "40px",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column */}
          <div>
            {/* Top pill badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                backgroundColor: "rgba(217, 119, 6, 0.12)",
                border: "1px solid rgba(217, 119, 6, 0.28)",
                color: "#B45309",
                fontSize: "0.82rem",
                fontWeight: 700,
                marginBottom: "20px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <Sparkles size={14} color="#D97706" />
            </div>

            {/* Main Editorial Headline - Compact, elegant size */}
            <h1
              style={{
                fontSize: "clamp(1.65rem, 2.4vw, 2.25rem)",
                lineHeight: "1.24",
                fontWeight: 600,
                marginBottom: "16px",
                color: "#1E1C1A",
              }}
            >
              Professional <em>Cleaning</em> Made Simple, Pure &amp;{" "}
              <span
                style={{
                  display: "inline-block",
                  color: "#D97706",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Affordable
              </span>
            </h1>

            {/* Key Pricing Quick Highlight Chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(214, 184, 160, 0.7)",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#1E1C1A",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <Tag size={11} color="#D97706" />
                <span>Per Room: <strong>₹199</strong></span>
              </div>

              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(214, 184, 160, 0.7)",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#1E1C1A",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <Tag size={11} color="#D97706" />
                <span>Kitchen: <strong>₹199</strong></span>
              </div>

              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(214, 184, 160, 0.7)",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#1E1C1A",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <Tag size={11} color="#D97706" />
                <span>Bathroom: <strong>₹199</strong></span>
              </div>

              <div
                style={{
                  backgroundColor: "#FEF3C7",
                  border: "1px solid #D97706",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#B45309",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  boxShadow: "0 2px 8px rgba(217, 119, 6, 0.15)",
                }}
              >
                <Sparkles size={11} color="#D97706" />
                <span>Full House: <strong>Under ₹1,000 (₹899)</strong></span>
              </div>

              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px dashed #D97706",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#92400E",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <span>Custom Service: <strong>On-Demand</strong></span>
              </div>
            </div>

            {/* Subtitle / paragraph text */}
            <p
              style={{
                fontSize: "0.94rem",
                lineHeight: "1.65",
                color: "#57524E",
                maxWidth: "500px",
                marginBottom: "24px",
              }}
            >
              Enjoy sparkling clean rooms without paying exorbitant prices. Zero advance payment required—pay with UPI or Cash strictly after inspecting our spotless results.
            </p>

            {/* Button group with Direct WhatsApp, Call, and View Services */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "28px",
              }}
            >
              <a
                href={getWhatsAppLink("Hi Har Ghar Safai! I want to book a cleaning slot. Please confirm availability.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{
                  fontSize: "0.85rem",
                  padding: "10px 20px",
                  backgroundColor: "#25D366",
                  color: "#FFFFFF",
                  border: "none",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 6px 18px rgba(37, 211, 102, 0.3)",
                }}
              >
                <MessageSquare size={15} />
                <span>Book on WhatsApp</span>
                <ArrowRight size={14} />
              </a>

              <div
                className="btn btn-sage"
                style={{
                  fontSize: "0.84rem",
                  padding: "9px 16px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  fontWeight: 700,
                  backgroundColor: "#FAF6F0",
                  border: "1px solid rgba(214, 184, 160, 0.9)",
                  borderRadius: "9999px",
                }}
              >
                <Phone size={14} color="#D97706" />
                <span style={{ color: "#78716C", fontSize: "0.74rem", textTransform: "uppercase" }}>Call:</span>
                <a
                  href={TEL_PRIMARY_LINK}
                  title={`Call Line 1: ${PRIMARY_PHONE}`}
                  style={{ color: "#1E1C1A", textDecoration: "none" }}
                >
                  90278 65224
                </a>
                <span style={{ color: "#D97706", fontWeight: 400 }}>/</span>
                <a
                  href={TEL_SECONDARY_LINK}
                  title={`Call Line 2: ${SECONDARY_PHONE}`}
                  style={{ color: "#1E1C1A", textDecoration: "none" }}
                >
                  93026 42694
                </a>
              </div>

              <a
                href="#services"
                style={{
                  fontSize: "0.84rem",
                  color: "#57524E",
                  textDecoration: "underline",
                  fontWeight: 600,
                  marginLeft: "4px",
                }}
              >
                View Plans &amp; Pricing
              </a>
            </div>

            {/* Rating & Social Proof */}
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid rgba(29, 26, 24, 0.08)",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ display: "flex", gap: "2px", color: "#F59E0B" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />
                  ))}
                </div>
                <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1E1C1A" }}>
                  4.9 / 5 Rating
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#15803D", fontWeight: 600 }}>
                <ShieldCheck size={16} />
                <span>100% Pay After Service</span>
              </div>
            </div>
          </div>

          {/* Right Column with Image and Trust Card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "520px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 50px -10px rgba(30, 28, 26, 0.15)",
                border: "1px solid rgba(214, 184, 160, 0.4)",
              }}
            >
              <Image
                src="/images/hero-cleaner.jpg"
                alt="Professional cleaner providing spotless cleaning service in home"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
              />

              {/* Floating trust badge at top right */}
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  padding: "9px 16px",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                }}
              >
                <CheckCircle2 size={16} color="#059669" />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#1E1C1A",
                  }}
                >
                  Verified &amp; Trained Staff
                </span>
              </div>

              {/* Floating Bottom Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(14px)",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#D97706",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "2px",
                    }}
                  >
                    <Sparkles size={12} />
                    <span>Instant Booking</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#1E1C1A",
                    }}
                  >
                    Same-Day &amp; Next-Day Slots Open
                  </div>
                </div>

                <a
                  href={getWhatsAppLink("Hi Har Ghar Safai! Please check slot availability for my area.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                  style={{
                    padding: "8px 18px",
                    fontSize: "0.84rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <MessageSquare size={14} color="#25D366" />
                  <span>Check Slot</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
