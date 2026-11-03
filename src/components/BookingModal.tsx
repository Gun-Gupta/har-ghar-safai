"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Phone, MessageSquare, ShieldCheck, Wrench } from "lucide-react";
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  TEL_PRIMARY_LINK,
  TEL_SECONDARY_LINK,
  CONTACT_PHONE,
  RAW_PHONE,
  TEL_LINK,
  getWhatsAppLink,
} from "@/utils/contact";

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPromo?: string;
  initialPackage?: string;
  initialBhk?: string;
  initialTotal?: number;
  initialCustomPlan?: {
    name: string;
    price: number | string;
    duration?: string;
    suitableFor?: string;
  };
}

export default function BookingModal({
  isOpen,
  onClose,
  initialPackage = "per-room",
  initialTotal,
  initialCustomPlan,
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("Delhi NCR");
  const [address, setAddress] = useState("");
  const [servicePackage, setServicePackage] = useState(initialPackage);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("09:00 AM (Morning Slot)");
  const [customPlan, setCustomPlan] = useState(initialCustomPlan);
  const [customNotes, setCustomNotes] = useState("");

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (initialPackage) setServicePackage(initialPackage);
    if (initialCustomPlan) setCustomPlan(initialCustomPlan);
  }, [initialPackage, initialCustomPlan]);

  if (!isOpen) return null;

  const planOptions: Record<string, { name: string; price: number | string }> = {
    "per-room": { name: "Per Room Cleaning", price: 199 },
    "kitchen-cleaning": { name: "Kitchen Deep Clean", price: 199 },
    "bathroom-cleaning": { name: "Bathroom Deep Clean", price: 199 },
    "full-house": { name: "Full House Complete Clean ", price: "Under ₹1000" },
    "custom-service": { name: "Custom Cleaning Service", price: "Flexible Quote" },
  };

  const selectedPlanInfo = customPlan
    ? { name: customPlan.name, price: customPlan.price }
    : planOptions[servicePackage] || { name: "Per Room Cleaning", price: 199 };

  const finalPrice = initialTotal || selectedPlanInfo.price;
  const isCustomOption = servicePackage === "custom-service" || selectedPlanInfo.price === "Flexible Quote";

  const buildWhatsAppMessage = () => {
    return [
      `Hello Har Ghar Safai Team!`,
      ``,
      `I would like to book / inquire about a cleaning service:`,
      `• *Selected Plan:* ${selectedPlanInfo.name}`,
      isCustomOption
        ? `• *Custom Requirement:* ${customNotes || "On-demand custom cleaning"}`
        : `• *Price:* ₹${finalPrice} (100% Pay After Service)`,
      date ? `• *Preferred Date:* ${date} (${slot})` : null,
      name ? `• *My Name:* ${name}` : null,
      address ? `• *Address/Area:* ${address}, ${city}` : `• *City:* ${city}`,
      ``,
      `Please confirm available slots for my location. Thank you!`
    ].filter(Boolean).join("\n");
  };

  const handleWhatsAppClick = () => {
    const msg = buildWhatsAppMessage();
    window.open(getWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(18, 16, 14, 0.75)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          width: "100%",
          maxWidth: "540px",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(214, 184, 160, 0.5)",
          position: "relative",
          padding: "36px 30px",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            background: "#FAF6F0",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#1E1C1A",
            zIndex: 10,
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: "22px", paddingRight: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.76rem",
              fontWeight: 700,
              color: "#15803D",
              backgroundColor: "rgba(34, 197, 94, 0.12)",
              padding: "4px 12px",
              borderRadius: "9999px",
              marginBottom: "10px",
            }}
          >
            <Sparkles size={12} />
            <span>ZERO ADVANCE • PAY AFTER SATISFACTION</span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.9rem",
              fontWeight: 600,
              color: "#1E1C1A",
              lineHeight: "1.2",
              marginBottom: "6px",
            }}
          >
            Fast Slot Booking
          </h3>

          <p style={{ fontSize: "0.9rem", color: "#66615C" }}>
            Book directly via WhatsApp or Phone Call. No advance fee required.
          </p>
        </div>

        {/* Plan Selector Dropdown */}
        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#44403C", marginBottom: "6px" }}>
            SELECT CLEANING SERVICE
          </label>
          <select
            value={servicePackage}
            onChange={(e) => {
              setCustomPlan(undefined);
              setServicePackage(e.target.value);
            }}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1.5px solid rgba(214, 184, 160, 0.8)",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#1E1C1A",
              backgroundColor: "#FAF6F0",
              cursor: "pointer",
            }}
          >
            <option value="per-room">Per Room Cleaning — ₹199</option>
            <option value="kitchen-cleaning">Kitchen Deep Clean — ₹199</option>
            <option value="bathroom-cleaning">Bathroom Deep Clean — ₹199</option>
            <option value="full-house">Full House Complete Clean (Under ₹1,000)</option>
            <option value="custom-service">Custom Service — Flexible / Tailored Quote</option>
          </select>
        </div>

        {/* Custom Requirement Textarea (If custom-service selected) */}
        {isCustomOption && (
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#B45309", marginBottom: "6px" }}>
              DESCRIBE YOUR CUSTOM CLEANING NEED
            </label>
            <textarea
              rows={3}
              placeholder="e.g. 5-seater sofa shampooing, balcony floor jet wash, kitchen chimney degreasing, or shop cleaning..."
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1.5px solid #D97706",
                fontSize: "0.88rem",
                color: "#1E1C1A",
                backgroundColor: "#FFFDF9",
              }}
            />
          </div>
        )}

        {/* Selected Plan Summary Card */}
        <div
          style={{
            backgroundColor: "#FAF6F0",
            borderRadius: "14px",
            padding: "16px 20px",
            border: "1px solid rgba(214, 184, 160, 0.5)",
            marginBottom: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: "0.75rem", color: "#78716C", fontWeight: 700, textTransform: "uppercase" }}>
              Selected Package
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1E1C1A" }}>
              {selectedPlanInfo.name}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.75rem", color: "#78716C", fontWeight: 700, textTransform: "uppercase" }}>
              Rate
            </div>
            <div
              style={{
                fontSize: typeof finalPrice === "number" ? "1.5rem" : "1.15rem",
                fontWeight: 800,
                color: "#D97706",
              }}
            >
              {typeof finalPrice === "number" ? `₹${finalPrice}` : finalPrice}
            </div>
          </div>
        </div>

        {/* WhatsApp & Call Direct Action Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "22px" }}>
          {/* WhatsApp Direct Button */}
          <button
            onClick={handleWhatsAppClick}
            style={{
              backgroundColor: "#25D366",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "12px",
              padding: "15px 22px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
              transition: "all 0.2s ease",
            }}
          >
            <MessageSquare size={20} />
            <span>
              {isCustomOption
                ? "Request Custom Quote on WhatsApp"
                : `Book on WhatsApp (${CONTACT_PHONE})`}
            </span>
          </button>

          {/* Direct Phone Call Buttons - Line 1 & Line 2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr ", gap: "10px" }}>
            <a
              href={TEL_SECONDARY_LINK}
              style={{
                backgroundColor: "#2E2A27",
                color: "#FFFFFF",
                borderRadius: "12px",
                padding: "13px 14px",
                fontSize: "0.85rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                transition: "all 0.2s ease",
              }}
            >
              <Phone size={15} color="#FBBF24" />
              <span>Call 93026 42694</span>
            </a>
          </div>
        </div>

        {/* Optional Date & Area prefill inputs */}
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.08)",
            paddingTop: "16px",
          }}
        >
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#57524E", marginBottom: "10px" }}>
            Optional: Add your location & preferred time
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#78716C", marginBottom: "4px" }}>
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontSize: "0.85rem",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#78716C", marginBottom: "4px" }}>
                Area / City
              </label>
              <input
                type="text"
                placeholder="e.g. Sector 62, Noida"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontSize: "0.85rem",
                }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#78716C", marginBottom: "4px" }}>
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontSize: "0.85rem",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#78716C", marginBottom: "4px" }}>
                Slot Time
              </label>
              <select
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontSize: "0.85rem",
                }}
              >
                <option value="08:30 AM (Morning)">08:30 AM (Morning)</option>
                <option value="11:30 AM (Midday)">11:30 AM (Midday)</option>
                <option value="02:30 PM (Afternoon)">02:30 PM (Afternoon)</option>
                <option value="05:30 PM (Evening)">05:30 PM (Evening)</option>
              </select>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.75rem",
              color: "#78716C",
            }}
          >
            <ShieldCheck size={14} color="#16A34A" />
            <span>Zero advance required • Pay via UPI or Cash after service is completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
