"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Copy, Check, Clock, Phone, Flame } from "lucide-react";
import confetti from "canvas-confetti";

export default function FestiveBanner({
  onBookClick,
}: {
  onBookClick: (promo?: string) => void;
}) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 28,
    minutes: 42,
    seconds: 18,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ["#D97706", "#F59E0B", "#FDE68A", "#BE185D"],
    });
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: "#1E1C1A",
        color: "#FAF6F0",
        padding: "10px 16px",
        fontSize: "0.85rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {/* Left Festive Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              backgroundColor: "rgba(217, 119, 6, 0.25)",
              color: "#FBBF24",
              padding: "2px 10px",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              border: "1px solid rgba(251, 191, 36, 0.3)",
            }}
          >
            <Flame size={13} color="#FBBF24" />
            DIWALI & SHAADI SPECIAL
          </span>
          <span style={{ color: "#E7E2DA" }}>
            Flat <strong>35% OFF</strong> on Festive Deep Cleaning + <strong>FREE</strong> Brass Diya Polishing!
          </span>
        </div>

        {/* Center / Right actions: Coupons & Countdown */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          {/* Countdown timer */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "0.75rem",
              color: "#D1C7BD",
            }}
          >
            <Clock size={13} color="#FBBF24" />
            <span>Rush Closes In:</span>
            <strong style={{ color: "#FFFFFF", fontFamily: "monospace", letterSpacing: "1px" }}>
              {String(timeLeft.hours).padStart(2, "0")}h:
              {String(timeLeft.minutes).padStart(2, "0")}m:
              {String(timeLeft.seconds).padStart(2, "0")}s
            </strong>
          </div>

          {/* Coupon 1: DIWALI35 */}
          <button
            onClick={() => handleCopy("DIWALI35")}
            title="Click to copy coupon"
            style={{
              background: "transparent",
              border: "1px dashed #F59E0B",
              color: "#FBBF24",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              transition: "all 0.2s ease",
            }}
          >
            {copiedCode === "DIWALI35" ? (
              <>
                <Check size={12} color="#10B981" /> Copied!
              </>
            ) : (
              <>
                <Copy size={12} /> CODE: DIWALI35
              </>
            )}
          </button>

          {/* Coupon 2: BANDBAAJA */}
          <button
            onClick={() => handleCopy("BANDBAAJA")}
            title="Click to copy coupon for Shaadi season"
            style={{
              background: "transparent",
              border: "1px dashed #F43F5E",
              color: "#FB7185",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              transition: "all 0.2s ease",
            }}
          >
            {copiedCode === "BANDBAAJA" ? (
              <>
                <Check size={12} color="#10B981" /> Copied!
              </>
            ) : (
              <>
                <Copy size={12} /> WEDDING: BANDBAAJA
              </>
            )}
          </button>

          {/* Fast Booking CTA */}
          <button
            onClick={() => onBookClick("DIWALI35")}
            style={{
              backgroundColor: "#D97706",
              color: "#FFFFFF",
              border: "none",
              padding: "5px 14px",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              transition: "all 0.2s ease",
            }}
          >
            <Sparkles size={12} /> Claim Offer
          </button>
        </div>
      </div>
    </div>
  );
}
