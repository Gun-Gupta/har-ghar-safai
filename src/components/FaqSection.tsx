"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  TEL_PRIMARY_LINK,
  TEL_SECONDARY_LINK,
  getWhatsAppLink,
} from "@/utils/contact";

import { FAQS_DATA, FaqItem } from "@/data/faqs";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      style={{
        paddingTop: "75px",
        paddingBottom: "85px",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(29, 26, 24, 0.08)",
      }}
    >
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              color: "#B45309",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "12px",
            }}
          >
            <HelpCircle size={13} />
            <span>CLARITY &amp; TRANSPARENCY</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)",
              color: "#1E1C1A",
              lineHeight: "1.22",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            Frequently Asked <em>Questions</em>
          </h2>

          <p style={{ color: "#57524E", fontSize: "0.95rem" }}>
            Got questions about our flat pricing, zero-advance policy, or cleaning process? We have transparent answers.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: isOpen ? "#FFFDF9" : "#FAF6F0",
                  borderRadius: "14px",
                  border: isOpen ? "1.5px solid #D97706" : "1px solid rgba(214, 184, 160, 0.5)",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    gap: "14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: isOpen ? "#B45309" : "#1E1C1A",
                      lineHeight: "1.4",
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    color={isOpen ? "#D97706" : "#78716C"}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 22px 20px 22px",
                      fontSize: "0.92rem",
                      color: "#44403C",
                      lineHeight: "1.7",
                      borderTop: "1px solid rgba(214, 184, 160, 0.3)",
                      paddingTop: "14px",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div
          style={{
            marginTop: "44px",
            backgroundColor: "#FAF6F0",
            borderRadius: "18px",
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "18px",
            border: "1px solid rgba(214, 184, 160, 0.7)",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.98rem", color: "#1E1C1A", display: "flex", alignItems: "center", gap: "6px" }}>
              <ShieldCheck size={18} color="#16A34A" />
              <span>Still have a question or special request?</span>
            </div>
            <div style={{ fontSize: "0.85rem", color: "#66615C", marginTop: "4px" }}>
              Our helpline is available 7 days a week from 8:00 AM to 10:00 PM.
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href={getWhatsAppLink("Hi Har Ghar Safai! I have a question about your cleaning services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sage btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                fontSize: "0.82rem",
                padding: "8px 16px",
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                fontWeight: 700,
                borderRadius: "9999px",
              }}
            >
              <MessageSquare size={14} /> WhatsApp Chat
            </a>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 14px",
                borderRadius: "9999px",
                backgroundColor: "#1E1C1A",
                color: "#FFFFFF",
                fontSize: "0.82rem",
                fontWeight: 700,
              }}
            >
              <Phone size={13} color="#FBBF24" />
              <span style={{ color: "#A8A29E", fontSize: "0.72rem" }}>CALL:</span>
              <a href={TEL_PRIMARY_LINK} style={{ color: "#FFFFFF", textDecoration: "none" }}>
                90278 65224
              </a>
              <span style={{ color: "#D97706" }}>/</span>
              <a href={TEL_SECONDARY_LINK} style={{ color: "#FBBF24", textDecoration: "none" }}>
                93026 42694
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
