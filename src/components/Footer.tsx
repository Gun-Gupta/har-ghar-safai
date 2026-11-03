"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, Sparkles, Tag, ArrowRight } from "lucide-react";
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  TEL_PRIMARY_LINK,
  TEL_SECONDARY_LINK,
  CONTACT_PHONE,
  TEL_LINK,
  getWhatsAppLink,
} from "@/utils/contact";

export default function Footer({
  onBookClick,
}: {
  onBookClick?: (promo?: string) => void;
}) {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#181615",
        color: "#FAF6F0",
        paddingTop: "70px",
        paddingBottom: "40px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="container">
        {/* Top Direct Contact Highlight Bar */}
        <div
          style={{
            backgroundColor: "#24201E",
            borderRadius: "20px",
            padding: "28px 32px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#FBBF24",
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "4px",
              }}
            >
              <Sparkles size={13} />
              <span>NEED FAST CLEANING ASSISTANCE?</span>
            </div>
            <h3
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)",
                color: "#FFFFFF",
                fontWeight: 600,
              }}
            >
              Get in Touch with our Cleaning Concierge
            </h3>
            <p style={{ color: "#A8A29E", fontSize: "0.88rem", marginTop: "4px" }}>
              Reach out directly on WhatsApp or phone for instant slot confirmation and queries.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href={getWhatsAppLink("Hi Har Ghar Safai! I want to inquire about cleaning services.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                borderRadius: "9999px",
                padding: "12px 24px",
                fontSize: "0.92rem",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 16px rgba(37, 211, 102, 0.35)",
              }}
            >
              <MessageSquare size={17} />
              <span>WhatsApp Chat</span>
            </a>

            <div
              style={{
                backgroundColor: "#FAF6F0",
                color: "#1E1C1A",
                borderRadius: "9999px",
                padding: "10px 20px",
                fontSize: "0.88rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Phone size={15} color="#D97706" />
              <span style={{ color: "#78716C", fontSize: "0.76rem", textTransform: "uppercase" }}>Call:</span>              <a
                href={TEL_SECONDARY_LINK}
                title={`Call Secondary: ${SECONDARY_PHONE}`}
                style={{ color: "#1E1C1A", textDecoration: "none" }}
              >
              93026 42694
              </a>
            </div>
          </div>
        </div>

        {/* 3 Column Detailed Contact & Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1.1fr 1.1fr",
            gap: "44px",
            marginBottom: "50px",
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Promise */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                HAR GHAR SAFAI
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#D97706",
                }}
              />
            </div>

            <div
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#A8A29E",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              HOME CLEANING ATELIER
            </div>

            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: "1.7",
                color: "#B8B2A9",
                maxWidth: "340px",
                marginBottom: "20px",
              }}
            >
              Delivering honest, premium cleaning with complete pricing clarity. Per Room ₹199, Kitchen ₹199, Bathroom ₹199, and Full House under ₹1,000. Zero advance required—you pay only after you are 100% satisfied.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "10px",
                backgroundColor: "rgba(22, 163, 74, 0.12)",
                border: "1px solid rgba(22, 163, 74, 0.25)",
                color: "#4ADE80",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={16} />
              <span>100% Satisfaction or Free Re-clean</span>
            </div>
          </div>

          {/* Col 2: Services & Plan Pricing */}
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Plans &amp; Rates
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem" }}>
              <li>
                <a href="#services" style={{ color: "#B8B2A9", textDecoration: "none", display: "flex", justifyContent: "space-between" }}>
                  <span>• Per Room Cleaning</span>
                  <strong style={{ color: "#FBBF24" }}>₹199</strong>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: "#B8B2A9", textDecoration: "none", display: "flex", justifyContent: "space-between" }}>
                  <span>• Kitchen Deep Clean</span>
                  <strong style={{ color: "#FBBF24" }}>₹199</strong>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: "#B8B2A9", textDecoration: "none", display: "flex", justifyContent: "space-between" }}>
                  <span>• Bathroom Deep Clean</span>
                  <strong style={{ color: "#FBBF24" }}>₹199</strong>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: "#B8B2A9", textDecoration: "none", display: "flex", justifyContent: "space-between" }}>
                  <span>• Full House Complete Package</span>
                  <strong style={{ color: "#4ADE80" }}>Under ₹1k</strong>
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: "#B8B2A9", textDecoration: "none", display: "flex", justifyContent: "space-between" }}>
                  <span>• Custom Service (Sofa, Chimney, etc.)</span>
                  <strong style={{ color: "#FBBF24" }}>Flexible</strong>
                </a>
              </li>
              <li>
                <a href="#reviews" style={{ color: "#B8B2A9", textDecoration: "none" }}>
                  • Customer Reviews (4.9★ Verified)
                </a>
              </li>
              <li>
                <a href="#faqs" style={{ color: "#B8B2A9", textDecoration: "none" }}>
                  • Frequently Asked Questions (FAQs)
                </a>
              </li>
              <li>
                <a href="#payment-modes" style={{ color: "#A8A29E", textDecoration: "none" }}>
                  • Payment Options (UPI, Cash • 0% Advance)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Detailed Contact Info */}
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Contact Details
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.88rem", color: "#B8B2A9" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Phone size={17} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716C", textTransform: "uppercase", fontWeight: 700 }}>
                    Direct Calling Helpline
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "2px" }}>
                    <a href={TEL_SECONDARY_LINK} style={{ color: "#FBBF24", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" }}>
                      {SECONDARY_PHONE}
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MessageSquare size={17} color="#22C55E" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716C", textTransform: "uppercase", fontWeight: 700 }}>
                    WhatsApp Official Booking
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "2px" }}>
                    <a
                      href={getWhatsAppLink("Hi Har Ghar Safai! I would like to book a cleaning slot.", "919302642694")}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#86EFAC", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      {SECONDARY_PHONE} (Helpline)
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Clock size={17} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716C", textTransform: "uppercase", fontWeight: 700 }}>
                    Operating Hours
                  </div>
                  <span>8:00 AM – 10:00 PM (Monday to Sunday)</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Mail size={17} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716C", textTransform: "uppercase", fontWeight: 700 }}>
                    Email Support
                  </div>
                  <span>harghrsafai@gmail.com</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={17} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716C", textTransform: "uppercase", fontWeight: 700 }}>
                    Headquarters
                  </div>
                  <span>Connaught Place, New Delhi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            fontSize: "0.82rem",
            color: "#8E8781",
          }}
        >
          <div>
            © 2026 Har Ghar Safai. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "18px" }}>
            <span>Zero Advance Policy</span>
            <span>Pay After Inspection</span>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
