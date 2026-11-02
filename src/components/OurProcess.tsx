"use client";

import React from "react";
import { Wind, Sparkles, Flame, Shield, CheckCircle2, Award } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      num: "01",
      icon: Wind,
      title: "HEPA Deep Suction Extraction",
      desc: "German high-velocity vacuuming pulls out embedded dust, pollen, and allergens from mattresses, sofa seams, curtains, and high ceiling cornices.",
    },
    {
      num: "02",
      icon: Sparkles,
      title: "Enzyme Grease Breakdown",
      desc: "Organic citrus enzymes dissolve stubborn oil grime on chimney baffles, kitchen exhaust tiles, and countertops without caustic chemicals.",
    },
    {
      num: "03",
      icon: Flame,
      title: "140°C Thermal Steam Spa",
      desc: "Pressurized Italian steam penetrates fabrics, tiles, and bathroom grouting to sanitize germs and eliminate odors at the molecular level.",
    },
    {
      num: "04",
      icon: Award,
      title: "Floor Diamond Crystallization",
      desc: "Single-disc scrubbers and diamond resin pads buff marble and vitrified tiles into a radiant ballroom-worthy mirror reflection.",
    },
    {
      num: "05",
      icon: Sparkles,
      title: "Royal Brass & Diya Polish",
      desc: "Handcrafted detailing of ancestral brass diyas, pooja bells, and silverware to ensure your mandir glistens with divine sanctity.",
    },
    {
      num: "06",
      icon: CheckCircle2,
      title: "48-Point Supervisor Audit",
      desc: "Our master quality lead performs a white-glove inspection across every corner before handing over your home with a service warranty.",
    },
  ];

  return (
    <section
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        backgroundColor: "#F7ECE1", // Warm peach
        borderTop: "1px solid rgba(214, 184, 160, 0.4)",
        borderBottom: "1px solid rgba(214, 184, 160, 0.4)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px auto" }}>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#8E8781",
              display: "block",
              marginBottom: "8px",
            }}
          >
            PRECISION PROTOCOL
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#1E1C1A",
              lineHeight: "1.2",
              marginBottom: "12px",
            }}
          >
            Our 6-Stage <em>Sanctuary</em> Restoration
          </h2>
          <p style={{ color: "#66615C", fontSize: "0.98rem" }}>
            The gold standard of residential hygiene, practiced with surgical precision.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "24px",
          }}
        >
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "30px 26px",
                  border: "1px solid rgba(214, 184, 160, 0.45)",
                  boxShadow: "0 8px 24px rgba(30, 28, 26, 0.03)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(217, 119, 6, 0.12)",
                      color: "#D97706",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.8rem",
                      fontWeight: 600,
                      color: "rgba(29, 26, 24, 0.15)",
                    }}
                  >
                    {st.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1E1C1A",
                    marginBottom: "10px",
                  }}
                >
                  {st.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "#66615C",
                    lineHeight: "1.65",
                  }}
                >
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
