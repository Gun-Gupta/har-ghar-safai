"use client";

import React from "react";
import {
  Check,
  Clock,
  Home,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Tag,
  MessageSquare,
  QrCode,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import confetti from "canvas-confetti";
import { getWhatsAppLink } from "@/utils/contact";

export interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  price: number | string;
  duration: string;
  suitableFor: string;
  tasks: string[];
  isFeatured?: boolean;
  isCustom?: boolean;
  badge?: string;
}

export default function PricingPlans({
  onBookPlan,
}: {
  onBookPlan?: (plan: PlanItem) => void;
}) {
  // 5 Plans: Per room 199 | Kitchen 199 | Bathroom 199 | Full house under 1000 | Custom Service
  const plans: PlanItem[] = [
    {
      id: "per-room",
      name: "Per Room Cleaning",
      tagline: "Bedroom, living room, study or guest room cleaning",
      price: 199,
      duration: "35 - 45 mins",
      suitableFor: "Any 1 individual room",
      tasks: [
        "Complete sweeping and wet mopping",
        "Accessible furniture and table dusting",
        "Switchboards, door frames and mirror wipe",
        "Ceiling cobweb removal and corner dusting",
        "Window glass interior cleaning",
      ],
      isFeatured: false,
      badge: "₹199 / ROOM",
    },
    {
      id: "kitchen-cleaning",
      name: "Kitchen Deep Clean",
      tagline: "Countertop, sink, appliance exterior & floor scrub",
      price: 199,
      duration: "45 - 60 mins",
      suitableFor: "1 standard kitchen",
      tasks: [
        "Kitchen slab & tiled wall backsplash scrubbing",
        "Sink descaling, tap polishing & drain wash",
        "Gas stove & appliance exterior degreasing",
        "Cabinet exterior wipe-down & handles sanitize",
        "Floor scrubbing and oil stain removal",
      ],
      isFeatured: false,
      badge: "₹199 / KITCHEN",
    },
    {
      id: "bathroom-cleaning",
      name: "Bathroom Deep Clean",
      tagline: "Sanitary descaling, tiles scrub & hygiene sanitization",
      price: 199,
      duration: "40 - 50 mins",
      suitableFor: "1 standard bathroom",
      tasks: [
        "Toilet pot & washbasin deep stain scrub",
        "Mirror, shower & chrome tap descaling",
        "Wall tile soap-scum and water-spot removal",
        "Floor scrub & anti-bacterial disinfection",
        "Deodorizing wash for fresh clean fragrance",
      ],
      isFeatured: false,
      badge: "₹199 / BATHROOM",
    },
    {
      id: "full-house",
      name: "Full House Complete Package",
      tagline: "Comprehensive 360° deep clean of your entire home",
      price: "Under ₹1000",
      duration: "2.5 - 3.5 hours",
      suitableFor: "Complete home (Rooms + Kitchen + Bath)",
      tasks: [
        "All rooms sweeping, mopping & surface dusting",
        "Kitchen platform, sink, stove & floor scrub",
        "Complete bathroom descaling & sanitization",
        "Living area, balcony & ceiling cobweb removal",
        "Switchboards, doors & accessible glass cleaned",
        "Hospital-grade non-toxic disinfectant treatment",
      ],
      isFeatured: true,
      badge: "UNDER ₹1,000 • BEST VALUE",
    },
    {
      id: "custom-service",
      name: "Custom Service",
      tagline: "Custom-tailored to your exact spaces & specific cleaning requirements",
      price: "Custom",
      duration: "Flexible duration",
      suitableFor: "Sofa, Balcony, Chimney, Office, Terrace, etc.",
      tasks: [
        "Sofa, carpet & mattress steam shampooing",
        "Kitchen chimney, exhaust & heavy grease detox",
        "Balcony & outdoor terrace jet wash",
        "Post-renovation, paint spot & move-in detailing",
        "Commercial shop, boutique or office cabin",
      ],
      isFeatured: false,
      isCustom: true,
      badge: "CUSTOM / FLEXIBLE",
    },
  ];

  const handleBookSinglePlan = (plan: PlanItem) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#D97706", "#25D366", "#10B981"],
    });

    if (onBookPlan) {
      onBookPlan(plan);
      return;
    }

    let msg = "";
    if (plan.isCustom) {
      msg = `Hi Har Ghar Safai! I want to inquire about a *Custom Cleaning Service* for my space.\nPlease share details, customized options, and pricing quote.`;
    } else {
      msg = `Hi Har Ghar Safai! I would like to book:\n• *Plan:* ${plan.name}\n• *Price:* ₹${plan.price}\n• *Duration:* ${plan.duration}\n• *Suitable For:* ${plan.suitableFor}\n\nPlease confirm availability for my location.`;
    }
    window.open(getWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="services"
      style={{
        paddingTop: "60px",
        paddingBottom: "75px",
        backgroundColor: "#FAF6F0",
        borderTop: "1px solid rgba(29, 26, 24, 0.08)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 38px auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(217, 119, 6, 0.12)",
              color: "#B45309",
              fontSize: "0.76rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "12px",
            }}
          >
            <Tag size={12} />
            <span>TRANSPARENT FLAT PRICING</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
              color: "#1E1C1A",
              lineHeight: "1.2",
              marginBottom: "12px",
            }}
          >
            Cleaning <em>Services</em> &amp; Pricing Plans
          </h2>

          <p style={{ color: "#66615C", fontSize: "0.98rem", lineHeight: "1.6" }}>
            Simple, honest rates with zero hidden charges. Per Room ₹199 • Kitchen ₹199 • Bathroom ₹199 • Full House Under ₹1,000 • Custom Services.
          </p>
        </div>

        {/* 5 Plan Cards Grid: Row & Column wise (3 on top row, 2 on second row) */}
        <div className="plans-grid" style={{ marginBottom: "50px" }}>
          {plans.map((plan, idx) => {
            const isRow1 = idx < 3;
            return (
              <div
                key={plan.id}
                id={`plan-${plan.id}`}
                className={`plan-card ${isRow1 ? "plan-card-row1" : "plan-card-row2"}`}
                style={{
                  backgroundColor: plan.isFeatured
                    ? "#FFFDF8"
                    : plan.isCustom
                    ? "#FAF7F2"
                    : "#FFFFFF",
                  borderRadius: "20px",
                  padding: "30px 24px",
                  border: plan.isFeatured
                    ? "2.5px solid #D97706"
                    : plan.isCustom
                    ? "1.5px dashed #D97706"
                    : "1px solid rgba(214, 184, 160, 0.55)",
                  boxShadow: plan.isFeatured
                    ? "0 18px 45px rgba(217, 119, 6, 0.15)"
                    : "0 8px 24px rgba(30, 28, 26, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                {/* Top Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-13px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: plan.isFeatured
                      ? "#D97706"
                      : plan.isCustom
                      ? "#451A03"
                      : "#1E1C1A",
                    color: "#FFFFFF",
                    padding: "4px 16px",
                    borderRadius: "9999px",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    boxShadow: plan.isFeatured ? "0 4px 14px rgba(217, 119, 6, 0.4)" : "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.isFeatured ? (
                    <Sparkles size={11} />
                  ) : plan.isCustom ? (
                    <Wrench size={11} />
                  ) : (
                    <Tag size={11} />
                  )}
                  <span>{plan.badge}</span>
                </div>

                {/* Title & Tagline */}
                <div style={{ marginTop: "6px", marginBottom: "14px" }}>
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 600,
                      color: "#1E1C1A",
                      marginBottom: "6px",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#78716C", minHeight: "38px" }}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Price display */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "6px",
                    paddingBottom: "16px",
                    marginBottom: "16px",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <span
                    style={{
                      fontSize: typeof plan.price === "number" ? "2.6rem" : "2.2rem",
                      fontWeight: 800,
                      color: plan.isFeatured
                        ? "#D97706"
                        : plan.isCustom
                        ? "#B45309"
                        : "#1E1C1A",
                      lineHeight: "1",
                    }}
                  >
                    {typeof plan.price === "number" ? `₹${plan.price}` : plan.price}
                  </span>
                  <span style={{ fontSize: "0.84rem", color: "#8E8781", fontWeight: 600 }}>
                    {plan.id === "full-house"
                      ? "/ complete home"
                      : plan.isCustom
                      ? "/ flexible quote"
                      : "/ unit clean"}
                  </span>
                  {plan.id === "full-house" && (
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "#16A34A",
                        fontWeight: 700,
                        backgroundColor: "rgba(22, 163, 74, 0.1)",
                        padding: "3px 9px",
                        borderRadius: "6px",
                        marginLeft: "auto",
                      }}
                    >
                      Save 40%
                    </span>
                  )}
                  {plan.isCustom && (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#B45309",
                        fontWeight: 700,
                        backgroundColor: "rgba(217, 119, 6, 0.12)",
                        padding: "3px 9px",
                        borderRadius: "6px",
                        marginLeft: "auto",
                      }}
                    >
                      On-Demand
                    </span>
                  )}
                </div>

                {/* Metadata: Duration & Property Type */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    backgroundColor: plan.isFeatured
                      ? "rgba(217, 119, 6, 0.06)"
                      : plan.isCustom
                      ? "rgba(217, 119, 6, 0.05)"
                      : "#FAF6F0",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    marginBottom: "18px",
                    fontSize: "0.82rem",
                    color: "#44403C",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <Clock size={14} color="#D97706" style={{ flexShrink: 0 }} />
                    <span><strong>Duration:</strong> {plan.duration}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <Home size={14} color="#D97706" style={{ flexShrink: 0 }} />
                    <span><strong>Suitable:</strong> {plan.suitableFor}</span>
                  </div>
                </div>

                {/* Included Tasks Checklist */}
                <div style={{ marginBottom: "20px", flex: 1 }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "#8E8781",
                      marginBottom: "10px",
                    }}
                  >
                    What’s Included:
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                    {plan.tasks.map((task, tIdx) => (
                      <div
                        key={tIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "0.85rem",
                          color: "#3F3A36",
                          lineHeight: "1.35",
                        }}
                      >
                        <div
                          style={{
                            width: "17px",
                            height: "17px",
                            borderRadius: "50%",
                            backgroundColor: plan.isFeatured || plan.isCustom ? "#FEF3C7" : "#E2E8F0",
                            color: plan.isFeatured || plan.isCustom ? "#D97706" : "#475569",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Button - Sleek & compact */}
                <button
                  onClick={() => handleBookSinglePlan(plan)}
                  className={`btn ${plan.isFeatured ? "btn-festive" : "btn-dark"}`}
                  style={{
                    width: "100%",
                    padding: "8px 16px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    backgroundColor: plan.isCustom ? "#1E1C1A" : undefined,
                  }}
                >
                  <MessageSquare size={14} color={plan.isCustom ? "#25D366" : undefined} />
                  <span>
                    {plan.isCustom ? "Request Custom Quote" : `Book @ ₹${plan.price}`}
                  </span>
                  <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>

        {/* PAYMENTS-SERVICES TRUST & PAYMENT MODES SECTION */}
        <div
          id="payment-modes"
          style={{
            backgroundColor: "#1E1C1A",
            color: "#FAF6F0",
            borderRadius: "22px",
            padding: "40px 32px",
            boxShadow: "0 18px 40px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto 32px auto" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#FBBF24",
                display: "block",
                marginBottom: "8px",
              }}
            >
              PAYMENTS &amp; SATISFACTION ASSURANCE
            </span>
            <h3
              style={{
                fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)",
                color: "#FFFFFF",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              100% Pay <em>After</em> Service Guarantee
            </h3>
            <p style={{ color: "#D6D3D1", fontSize: "0.92rem" }}>
              Zero advance deposit required. Inspect every corner first; make the payment only when you are 100% delighted.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Feature 1 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                padding: "22px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(217, 119, 6, 0.2)",
                  color: "#F59E0B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ color: "#FFFFFF", fontSize: "1.05rem", marginBottom: "6px" }}>
                Zero Advance Needed
              </h4>
              <p style={{ color: "#A8A29E", fontSize: "0.84rem", lineHeight: "1.5" }}>
                Book freely without paying upfront. Our verified cleaning team arrives on time with all professional supplies.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                padding: "22px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(34, 197, 94, 0.2)",
                  color: "#4ADE80",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}
              >
                <QrCode size={22} />
              </div>
              <h4 style={{ color: "#FFFFFF", fontSize: "1.05rem", marginBottom: "6px" }}>
                All UPI &amp; QR Codes
              </h4>
              <p style={{ color: "#A8A29E", fontSize: "0.84rem", lineHeight: "1.5" }}>
                Scan &amp; pay easily via Google Pay, PhonePe, Paytm, BHIM, or any UPI app upon job completion.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                padding: "22px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  color: "#60A5FA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}
              >
                <Tag size={22} />
              </div>
              <h4 style={{ color: "#FFFFFF", fontSize: "1.05rem", marginBottom: "6px" }}>
                Cash or Card on Delivery
              </h4>
              <p style={{ color: "#A8A29E", fontSize: "0.84rem", lineHeight: "1.5" }}>
                Prefer paying cash? Hand it directly to the supervisor after inspecting your freshly cleaned home.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                padding: "22px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(234, 179, 8, 0.2)",
                  color: "#FACC15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}
              >
                <CheckCircle2 size={22} />
              </div>
              <h4 style={{ color: "#FFFFFF", fontSize: "1.05rem", marginBottom: "6px" }}>
                Free On-The-Spot Touchup
              </h4>
              <p style={{ color: "#A8A29E", fontSize: "0.84rem", lineHeight: "1.5" }}>
                If you find any spot missed during inspection, our cleaners immediately re-clean it at no extra fee.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .plan-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(30, 28, 26, 0.08) !important;
        }

        /* Desktop: 6-Column Grid Layout (3 cards in Row 1, 2 cards in Row 2) */
        @media (min-width: 992px) {
          .plans-grid {
            display: grid !important;
            grid-template-columns: repeat(6, 1fr) !important;
            gap: 26px !important;
          }
          .plan-card-row1 {
            grid-column: span 2 !important;
          }
          .plan-card-row2 {
            grid-column: span 3 !important;
          }
        }

        /* Tablet: 2 Columns Layout */
        @media (min-width: 640px) and (max-width: 991px) {
          .plans-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 22px !important;
          }
          .plan-card-row1,
          .plan-card-row2 {
            grid-column: span 1 !important;
          }
          .plan-card-row2:last-child {
            grid-column: span 2 !important;
          }
        }

        /* Mobile: 1 Column */
        @media (max-width: 639px) {
          .plans-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
