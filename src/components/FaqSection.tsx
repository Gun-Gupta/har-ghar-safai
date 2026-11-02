"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";

export default function FaqSection({
  onBookClick,
}: {
  onBookClick: () => void;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How early should I book for Diwali or Shaadi season?",
      a: "Due to tremendous festive rush across all major cities, we strongly advise reserving your slot 3 to 7 days in advance. However, we also maintain dedicated 'Express 4-Hour Rapid Response' teams for emergency last-minute bookings before Dhanteras, Lakshmi Pujan, and wedding ceremonies.",
    },
    {
      q: "Do you bring all cleaning supplies, steam machines, and ladders?",
      a: "Yes, 100%! Our crew arrives fully equipped with heavy-duty industrial vacuum cleaners, 140°C pressurized Italian steam sanitizers, single-disc floor scrubbers, telescopic poles for high ceilings/chandeliers, fresh microfiber cloths, and certified non-toxic enzymatic cleaners. You don't need to provide anything except water and electricity.",
    },
    {
      q: "How does the Shaadi Season 2-visit package work?",
      a: "Our Shaadi Royal Palace Makeover includes two visits: Visit 1 is a comprehensive pre-wedding deep shine (diamond marble crystallization, guest bedroom preparation, sofa steam shampooing) 1-2 days before celebrations begin. Visit 2 is our complimentary Post-Event Recovery Clean (within 7 days) to vacuum fallen glitter/confetti, lift food or beverage stains, and reset your residence.",
    },
    {
      q: "Are the cleaning solutions safe for pets and young toddlers?",
      a: "Absolutely. We strictly enforce a zero-chlorine, zero-ammonia, zero-toxic chemical policy. All our detergents are plant-based, enzymatic, hypoallergenic, and neutral pH certified. Your children and pets can roam comfortably right after service without any harmful respiratory vapors.",
    },
    {
      q: "Do you offer brass diya and silverware polishing for pooja rooms?",
      a: "Yes! As part of our deep cleaning service, our technicians can meticulously hand-polish brass diyas, pooja bells, and ancestral thalis using organic Pitambari paste upon request.",
    },
    {
      q: "How many cleaners come and how long does a 3 BHK deep clean take?",
      a: "For a standard 3 BHK, a team of 3 to 4 certified, background-verified specialists headed by an experienced supervisor is deployed. The thorough 360° deep cleanse typically takes between 4.5 to 6 hours, concluded by a 48-point quality audit checklist.",
    },
  ];

  return (
    <section
      id="faq"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        backgroundColor: "#FAF6F0",
      }}
    >
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              color: "#B45309",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "12px",
            }}
          >
            <HelpCircle size={13} />
            <span>Got Questions?</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              color: "#1E1C1A",
              lineHeight: "1.2",
              marginBottom: "12px",
            }}
          >
            Frequently Asked <em>Questions</em>
          </h2>

          <p style={{ color: "#66615C", fontSize: "0.98rem" }}>
            Everything you need to know about our festive booking process and guarantees.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: isOpen ? "1.5px solid #D97706" : "1px solid rgba(214, 184, 160, 0.45)",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 600,
                      color: isOpen ? "#B45309" : "#1E1C1A",
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
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
                      padding: "0 24px 22px 24px",
                      fontSize: "0.93rem",
                      color: "#57524E",
                      lineHeight: "1.7",
                      borderTop: "1px solid rgba(0, 0, 0, 0.04)",
                      paddingTop: "14px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#F7ECE1",
            borderRadius: "18px",
            padding: "22px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            border: "1px solid rgba(214, 184, 160, 0.5)",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1E1C1A" }}>
              Have a custom request or sprawling villa?
            </div>
            <div style={{ fontSize: "0.85rem", color: "#66615C" }}>
              Our festive concierge is available 7 days a week from 7 AM to 10 PM.
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919027865224?text=Hi%20Safai%20Wala,%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sage btn-sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
            >
              <MessageSquare size={14} color="#15803D" /> WhatsApp Support
            </a>
            <a
              href="tel:+919027865224"
              className="btn btn-dark btn-sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
            >
              <Phone size={14} color="#FBBF24" /> Call: +91 90278 65224
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
