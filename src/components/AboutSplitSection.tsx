"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Award, ShieldCheck, Heart, Leaf, Phone, MessageSquare } from "lucide-react";

export default function AboutSplitSection({
  onBookClick,
}: {
  onBookClick: () => void;
}) {
  return (
    <section
      id="about"
      style={{
        paddingTop: "80px",
        paddingBottom: "90px",
        backgroundColor: "#FAF6F0",
        borderTop: "1px solid rgba(29, 26, 24, 0.08)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left Column matching screenshot photo with floating button */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "520px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(30, 28, 26, 0.12)",
                border: "1px solid rgba(214, 184, 160, 0.35)",
              }}
            >
              <Image
                src="/images/kitchen-luxury.jpg"
                alt="Aesthetic luxury home cleaning with natural organic cleaning agents and fragrant flowers"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />

              {/* Floating pill badge matching screenshot "↗ Visit site" */}
              <div
                onClick={onBookClick}
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "32px",
                  backgroundColor: "rgba(255, 255, 255, 0.88)",
                  backdropFilter: "blur(12px)",
                  padding: "14px 26px",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                  transition: "all 0.25s ease",
                }}
                className="visit-site-badge"
              >
                <ArrowUpRight size={20} color="#1E1C1A" />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1E1C1A",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Book Home Inspection
                </span>
              </div>
            </div>
          </div>

          {/* Right Column matching screenshot editorial typography */}
          <div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#8E8781",
                display: "block",
                marginBottom: "12px",
              }}
            >
              ABOUT HAR GHAR SAFAI
            </span>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
                lineHeight: "1.16",
                marginBottom: "24px",
                color: "#1E1C1A",
              }}
            >
              Purifying Homes with <em>Reverence</em>, Precision & Eco-Conscious Care
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.75",
                color: "#57524E",
                marginBottom: "24px",
              }}
            >
              In India, cleaning before Diwali or preparing for a royal wedding is not just a chore—it is an auspicious ritual. We founded Har Ghar Safai to elevate this sacred tradition with 5-star hospitality standards, German extraction machinery, and strictly non-toxic botanical enzyme cleaners.
            </p>

            <p
              style={{
                fontSize: "0.96rem",
                lineHeight: "1.7",
                color: "#66615C",
                marginBottom: "32px",
              }}
            >
              Whether it’s restoring ancestral brass diyas, deep crystallizing Italian marble, or reviving delicate velvet upholstery, our certified technicians treat your family residence with the dignity it deserves.
            </p>

            {/* 4 Feature Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
                marginBottom: "36px",
              }}
              className="feature-badges-grid"
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(217, 119, 6, 0.12)",
                    color: "#D97706",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Award size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1E1C1A", marginBottom: "2px" }}>
                    48-Point Quality Audit
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "#78716C" }}>
                    Supervisor inspected before handover.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Leaf size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1E1C1A", marginBottom: "2px" }}>
                    100% Kid & Pet Safe
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "#78716C" }}>
                    Enzymatic, zero harsh chemicals.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(59, 130, 246, 0.12)",
                    color: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1E1C1A", marginBottom: "2px" }}>
                    Police Verified Crew
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "#78716C" }}>
                    Uniformed, insured & trained in-house.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(225, 29, 72, 0.12)",
                    color: "#E11D48",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Heart size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1E1C1A", marginBottom: "2px" }}>
                    Post-Event Guarantee
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "#78716C" }}>
                    Free touch-up if you are not thrilled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .feature-badges-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .visit-site-badge:hover {
          transform: scale(1.05);
          background-color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}
