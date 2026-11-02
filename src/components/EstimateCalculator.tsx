"use client";

import React, { useState } from "react";
import { Calculator, Check, Sparkles, Tag, ArrowRight, ShieldCheck, Flame, Phone, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

interface EstimateData {
  bhk: string;
  packageType: string;
  addons: string[];
  coupon: string;
  total: number;
  originalTotal: number;
  savings: number;
}

export default function EstimateCalculator({
  onBookEstimate,
}: {
  onBookEstimate: (data: EstimateData) => void;
}) {
  const [bhk, setBhk] = useState("3bhk");
  const [packageType, setPackageType] = useState("diwali");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "brass-polish",
  ]);
  const [coupon, setCoupon] = useState("DIWALI35");
  const [couponApplied, setCouponApplied] = useState(true);

  // Base pricing matrix
  const basePrices: Record<string, Record<string, number>> = {
    "1bhk": {
      diwali: 3499,
      shaadi: 5499,
      standard: 2499,
      kitchenbath: 1999,
    },
    "2bhk": {
      diwali: 4499,
      shaadi: 6999,
      standard: 3199,
      kitchenbath: 2499,
    },
    "3bhk": {
      diwali: 5999,
      shaadi: 9499,
      standard: 4299,
      kitchenbath: 3199,
    },
    "4bhk": {
      diwali: 7999,
      shaadi: 12499,
      standard: 5499,
      kitchenbath: 3999,
    },
    villa: {
      diwali: 11999,
      shaadi: 17999,
      standard: 8499,
      kitchenbath: 5999,
    },
  };

  const addonPrices: Record<string, { label: string; price: number; isFreeWithDiwali?: boolean }> = {
    "marble-polish": { label: "Italian Marble Diamond Crystallization", price: 1499 },
    "chandelier": { label: "Vintage Chandelier & High-Reach Crystal Care", price: 699 },
    "balcony": { label: "Balcony & Terrace Jet Pressure Wash", price: 599 },
    "fridge-interior": { label: "Refrigerator & Microwave Deep Detox", price: 499 },
    "brass-polish": { label: "Brass Diya & Silverware Royal Polish", price: 650, isFreeWithDiwali: true },
  };

  const toggleAddon = (key: string) => {
    setSelectedAddons((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // Calculate pricing
  const basePrice = basePrices[bhk]?.[packageType] || 4999;
  
  let addonTotal = 0;
  selectedAddons.forEach((key) => {
    const item = addonPrices[key];
    if (item) {
      if (key === "brass-polish" && (packageType === "diwali" || coupon === "DIWALI35")) {
        // Free bonus!
        addonTotal += 0;
      } else {
        addonTotal += item.price;
      }
    }
  });

  const rawTotal = basePrice + addonTotal;

  // Apply discounts
  let discountAmount = 0;
  if (couponApplied) {
    if (coupon.toUpperCase() === "DIWALI35") {
      discountAmount = Math.round(rawTotal * 0.35);
    } else if (coupon.toUpperCase() === "BANDBAAJA") {
      discountAmount = 3500;
    } else if (coupon.toUpperCase() === "FIRSTCLEAN") {
      discountAmount = 800;
    }
  }

  const finalTotal = Math.max(1499, rawTotal - discountAmount);
  const totalSavings = (rawTotal - finalTotal) + (selectedAddons.includes("brass-polish") ? 650 : 0);

  const applyCouponCode = (code: string) => {
    setCoupon(code);
    setCouponApplied(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
    });
  };

  return (
    <section
      id="calculator"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        backgroundColor: "#FAF6F0",
        borderTop: "1px solid rgba(29, 26, 24, 0.08)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px auto" }}>
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
            <Calculator size={13} />
            <span>Transparent Pricing Matrix</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#1E1C1A",
              lineHeight: "1.2",
              marginBottom: "14px",
            }}
          >
            Instant Festive <em>Estimate</em> Calculator
          </h2>

          <p style={{ color: "#66615C", fontSize: "0.98rem" }}>
            Select your home size and festive package to calculate guaranteed all-inclusive pricing with instant coupon savings.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid rgba(214, 184, 160, 0.45)",
            boxShadow: "0 20px 50px rgba(30, 28, 26, 0.07)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
          }}
          className="calc-grid"
        >
          {/* Left Column: Form Controls */}
          <div style={{ padding: "36px 32px" }}>
            {/* Step 1: BHK Size */}
            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#1E1C1A",
                  marginBottom: "12px",
                }}
              >
                1. Select Residence Size
              </label>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "8px",
                }}
                className="bhk-grid"
              >
                {[
                  { id: "1bhk", label: "1 BHK" },
                  { id: "2bhk", label: "2 BHK" },
                  { id: "3bhk", label: "3 BHK" },
                  { id: "4bhk", label: "4 BHK" },
                  { id: "villa", label: "Villa" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBhk(item.id)}
                    style={{
                      padding: "10px 4px",
                      borderRadius: "10px",
                      border: bhk === item.id ? "2px solid #D97706" : "1px solid rgba(0,0,0,0.12)",
                      backgroundColor: bhk === item.id ? "#FEF3C7" : "#FAF6F0",
                      color: bhk === item.id ? "#92400E" : "#44403C",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Package Type */}
            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#1E1C1A",
                  marginBottom: "12px",
                }}
              >
                2. Choose Festive Package
              </label>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  {
                    id: "diwali",
                    title: "Diwali 360° Sanctuary Clean",
                    sub: "Full dust extraction, chimney degrease, FREE brass diya polish",
                    badge: "35% OFF",
                  },
                  {
                    id: "shaadi",
                    title: "Shaadi Royal Palace Makeover",
                    sub: "Diamond marble buffing, upholstery steam, 7-day touch-up perk",
                    badge: "SAVE ₹3,500",
                  },
                  {
                    id: "standard",
                    title: "Signature Full Home Sanitization",
                    sub: "Complete deep scrub & hospital-grade surface disinfection",
                    badge: "Popular",
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => {
                      setPackageType(pkg.id);
                      if (pkg.id === "diwali") setCoupon("DIWALI35");
                      if (pkg.id === "shaadi") setCoupon("BANDBAAJA");
                    }}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: packageType === pkg.id ? "2px solid #D97706" : "1px solid rgba(0,0,0,0.1)",
                      backgroundColor: packageType === pkg.id ? "rgba(217, 119, 6, 0.05)" : "#FFFFFF",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#1E1C1A",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span>{pkg.title}</span>
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#66615C", marginTop: "2px" }}>
                        {pkg.sub}
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        backgroundColor: packageType === pkg.id ? "#D97706" : "rgba(0,0,0,0.06)",
                        color: packageType === pkg.id ? "#FFFFFF" : "#57524E",
                        padding: "3px 8px",
                        borderRadius: "9999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#1E1C1A",
                  marginBottom: "12px",
                }}
              >
                3. Royal Detailing Add-ons
              </label>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {Object.entries(addonPrices).map(([key, item]) => {
                  const isSelected = selectedAddons.includes(key);
                  const isFreeBonus = key === "brass-polish" && (packageType === "diwali" || coupon === "DIWALI35");

                  return (
                    <div
                      key={key}
                      onClick={() => toggleAddon(key)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        backgroundColor: isSelected ? "rgba(217, 119, 6, 0.05)" : "#FAF6F0",
                        border: isSelected ? "1px solid #D97706" : "1px solid rgba(0,0,0,0.06)",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            border: isSelected ? "none" : "1.5px solid #9CA3AF",
                            backgroundColor: isSelected ? "#D97706" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FFFFFF",
                          }}
                        >
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span style={{ fontSize: "0.84rem", color: "#292524", fontWeight: 500 }}>
                          {item.label}
                        </span>
                      </div>

                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: isFreeBonus ? "#16A34A" : "#1E1C1A" }}>
                        {isFreeBonus ? "FREE (Diwali Perk)" : `+₹${item.price}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Price Summary & Breakdown */}
          <div
            style={{
              backgroundColor: "#F7ECE1", // Warm peach card
              padding: "36px 30px",
              borderLeft: "1px solid rgba(214, 184, 160, 0.45)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: 600,
                color: "#1E1C1A",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Sparkles size={18} color="#D97706" />
              <span>Estimate Breakdown</span>
            </h3>

            {/* Price list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#57524E" }}>
                <span>Base Package ({bhk.toUpperCase()})</span>
                <span style={{ fontWeight: 600, color: "#1E1C1A" }}>₹{basePrice.toLocaleString()}</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#57524E" }}>
                <span>Add-ons ({selectedAddons.length})</span>
                <span style={{ fontWeight: 600, color: "#1E1C1A" }}>₹{addonTotal.toLocaleString()}</span>
              </div>

              {discountAmount > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.9rem",
                    color: "#16A34A",
                    fontWeight: 600,
                    padding: "6px 0",
                    borderTop: "1px dashed rgba(22, 163, 74, 0.3)",
                    borderBottom: "1px dashed rgba(22, 163, 74, 0.3)",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Tag size={13} /> Festive Promo ({coupon})
                  </span>
                  <span>-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Promo Code Input & Presets */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#66615C", marginBottom: "6px" }}>
                Apply Coupon
              </div>
              <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                  placeholder="Enter Code"
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,0,0,0.15)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                <button
                  onClick={() => applyCouponCode(coupon)}
                  style={{
                    backgroundColor: "#1E1C1A",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Apply
                </button>
              </div>

              {/* Quick Preset Buttons */}
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={() => applyCouponCode("DIWALI35")}
                  style={{
                    background: "rgba(217, 119, 6, 0.12)",
                    border: "1px solid #D97706",
                    color: "#B45309",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  DIWALI35
                </button>
                <button
                  onClick={() => applyCouponCode("BANDBAAJA")}
                  style={{
                    background: "rgba(225, 29, 72, 0.1)",
                    border: "1px solid #E11D48",
                    color: "#BE123C",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  BANDBAAJA
                </button>
              </div>
            </div>

            {/* Total box */}
            <div
              style={{
                marginTop: "auto",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(214, 184, 160, 0.6)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                <span style={{ fontSize: "0.85rem", color: "#66615C", fontWeight: 600 }}>Total Estimated Price</span>
                <span style={{ fontSize: "1.9rem", fontWeight: 800, color: "#1E1C1A" }}>
                  ₹{finalTotal.toLocaleString()}
                </span>
              </div>

              <div
                style={{
                  fontSize: "0.78rem",
                  color: "#16A34A",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginBottom: "16px",
                }}
              >
                <Sparkles size={13} />
                <span>You save ₹{totalSavings.toLocaleString()} with festive benefits!</span>
              </div>

              {/* Action Buttons: WhatsApp & Direct Call */}
              <button
                onClick={() =>
                  onBookEstimate({
                    bhk,
                    packageType,
                    addons: selectedAddons,
                    coupon,
                    total: finalTotal,
                    originalTotal: rawTotal,
                    savings: totalSavings,
                  })
                }
                className="btn btn-dark"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "0.95rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "#25D366",
                  color: "#FFFFFF",
                  border: "none",
                  fontWeight: 700,
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                  marginBottom: "8px",
                }}
              >
                <MessageSquare size={18} />
                <span>Send Estimate via WhatsApp</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="tel:+919027865224"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "0.88rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "#1E1C1A",
                  color: "#FFFFFF",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                }}
              >
                <Phone size={15} color="#FBBF24" />
                <span>Call +91 90278 65224 Directly</span>
              </a>

              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "0.72rem",
                  color: "#78716C",
                }}
              >
                <ShieldCheck size={14} color="#059669" />
                <span>No advance payment needed to book. Pay after completion.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
          }
          .bhk-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
