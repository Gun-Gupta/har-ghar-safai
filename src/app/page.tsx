"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PricingPlans, { PlanItem } from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { MessageSquare, Phone } from "lucide-react";
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  TEL_PRIMARY_LINK,
  TEL_SECONDARY_LINK,
  CONTACT_PHONE,
  TEL_LINK,
  getWhatsAppLink,
} from "@/utils/contact";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPackage, setModalPackage] = useState("per-room");
  const [modalTotal, setModalTotal] = useState<number | undefined>(undefined);
  const [modalCustomPlan, setModalCustomPlan] = useState<
    | {
        name: string;
        price: number;
        duration?: string;
        suitableFor?: string;
      }
    | undefined
  >(undefined);

  const handleOpenBooking = (promo?: string, service?: string) => {
    if (service) {
      const msg = `Hi Har Ghar Safai! I want to book: ${service.replace(/-/g, " ").toUpperCase()}. Please share available slots.`;
      window.open(getWhatsAppLink(msg), "_blank", "noopener,noreferrer");
      return;
    }
    setModalPackage("per-room");
    setIsModalOpen(true);
  };

  const handleBookPlan = (plan: PlanItem) => {
    let msg = "";
    if (plan.isCustom) {
      msg = `Hi Har Ghar Safai! I want to inquire about a *Custom Cleaning Service* for my space.\nPlease share details, customized options, and pricing quote.`;
    } else {
      msg = `Hi Har Ghar Safai! I want to book the following cleaning service:\n• *Plan:* ${plan.name}\n• *Price:* ₹${plan.price}\n• *Duration:* ${plan.duration}\n• *Suitable For:* ${plan.suitableFor}\n\nPlease confirm available slots for my location.`;
    }
    window.open(getWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* 1. Header & Minimalist Navigation */}
      <Navbar onBookClick={handleOpenBooking} />

      {/* 2. Homepage / Hero Section */}
      <Hero onBookClick={handleOpenBooking} />

      {/* 3. Payments & Services (Per room 199, Kitchen 199, Bathroom 199, Full House Under 1000 + Payment Modes) */}
      <PricingPlans onBookPlan={handleBookPlan} />

      {/* 4. Real Customer Testimonials */}
      <Testimonials />

      {/* 5. Frequently Asked Questions */}
      <FaqSection />

      {/* 6. Contact Details Footer */}
      <Footer onBookClick={handleOpenBooking} />

      {/* 7. Direct Booking & Slot Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage={modalPackage}
        initialTotal={modalTotal}
        initialCustomPlan={modalCustomPlan}
      />

      {/* Sticky Quick Contact Floating Bar */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 45,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Direct Call Button with both lines */}
        <div
          style={{
            height: "48px",
            padding: "0 16px",
            borderRadius: "9999px",
            backgroundColor: "#1E1C1A",
            color: "#FFFFFF",
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.28)",
            border: "2px solid rgba(255, 255, 255, 0.35)",
            fontWeight: 700,
            fontSize: "0.82rem",
          }}
          className="float-call-btn"
        >
          <Phone size={15} color="#FBBF24" />
          <span style={{ color: "#A8A29E", fontSize: "0.72rem", textTransform: "uppercase" }}>Call:</span>
          <a
            href={TEL_PRIMARY_LINK}
            title={`Call Line 1: ${PRIMARY_PHONE}`}
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            90278 65224
          </a>
          <span style={{ color: "#D97706" }}>/</span>
          <a
            href={TEL_SECONDARY_LINK}
            title={`Call Line 2: ${SECONDARY_PHONE}`}
            style={{ color: "#FBBF24", textDecoration: "none" }}
          >
            93026 42694
          </a>
        </div>

        {/* Direct WhatsApp Button */}
        <a
          href={getWhatsAppLink("Hi Har Ghar Safai! I want to book a cleaning slot.")}
          target="_blank"
          rel="noopener noreferrer"
          title={`Instant WhatsApp Booking (${CONTACT_PHONE})`}
          style={{
            height: "48px",
            padding: "0 20px",
            borderRadius: "9999px",
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 8px 24px rgba(37, 211, 102, 0.45)",
            border: "2px solid #FFFFFF",
            transition: "all 0.25s ease",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.88rem",
          }}
          className="float-whatsapp"
        >
          <MessageSquare size={19} />
          <span>WhatsApp</span>
        </a>
      </div>

      <style jsx>{`
        .float-whatsapp:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.5) !important;
        }
        .float-call-btn:hover {
          transform: translateY(-2px);
          background-color: #332F2C !important;
        }
      `}</style>
    </main>
  );
}
