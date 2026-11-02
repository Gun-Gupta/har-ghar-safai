"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Home, Utensils, Bath, Store, Briefcase, RefreshCw } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  planId: string;
  icon: React.ElementType;
}

export default function ServiceCategories({
  onSelectCategory,
}: {
  onSelectCategory: (planId: string) => void;
}) {
  const categories: CategoryItem[] = [
    {
      id: "home",
      name: "Home Cleaning",
      desc: "Complete routine and deep floor care, dusting, and room upkeep for sparkling residences.",
      price: 199,
      image: "/images/hero-cleaner.jpg",
      planId: "ghar-basic",
      icon: Home,
    },
    {
      id: "kitchen",
      name: "Kitchen Cleaning",
      desc: "Degreasing countertops, exterior stove detailing, sink scrub, and floor sanitation.",
      price: 299,
      image: "/images/kitchen-luxury.jpg",
      planId: "kitchen-fresh",
      icon: Utensils,
    },
    {
      id: "bathroom",
      name: "Bathroom Cleaning",
      desc: "Toilet and washbasin descaling, sparkling mirror & tap buffing, and accessible tile cleaning.",
      price: 299,
      image: "/images/bathroom-clean.jpg",
      planId: "bathroom-shine",
      icon: Bath,
    },
    {
      id: "shop",
      name: "Shop Cleaning",
      desc: "Floor sweeping, mopping, counter dusting, entrance and glass-door clarity for retail spaces.",
      price: 349,
      image: "/images/shop-clean.jpg",
      planId: "dukaan-clean",
      icon: Store,
    },
    {
      id: "office",
      name: "Office Cleaning",
      desc: "Desk & surface dusting, spotless floor cleaning, and waste bin disposal for small offices.",
      price: 399,
      image: "/images/office-clean.jpg",
      planId: "office-fresh",
      icon: Briefcase,
    },
    {
      id: "apartment",
      name: "Apartment Refresh",
      desc: "Top-to-bottom rapid turnaround sanitization designed especially for small 1BHK homes.",
      price: 549,
      image: "/images/cleaning-supplies.jpg",
      planId: "ghar-deep-refresh",
      icon: RefreshCw,
    },
  ];

  return (
    <section
      id="categories"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        backgroundColor: "#FAF6F0",
        borderTop: "1px solid rgba(29, 26, 24, 0.08)",
      }}
    >
      <div className="container">
        {/* Section Header */}
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
            <Sparkles size={13} />
            <span>Targeted Spaces</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#1E1C1A",
              lineHeight: "1.2",
              marginBottom: "12px",
            }}
          >
            Service <em>Categories</em>
          </h2>

          <p style={{ color: "#66615C", fontSize: "0.98rem" }}>
            Explore focused care for homes, kitchens, bathrooms, retail shops, and professional workstations.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(214, 184, 160, 0.45)",
                  boxShadow: "0 10px 28px rgba(30, 28, 26, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                className="category-card"
              >
                {/* Image banner with starting price badge */}
                <div style={{ position: "relative", width: "100%", height: "210px" }}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />

                  {/* Icon badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      backgroundColor: "rgba(255, 255, 255, 0.92)",
                      backdropFilter: "blur(6px)",
                      color: "#D97706",
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Starting Price Pill */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      right: "16px",
                      backgroundColor: "rgba(30, 28, 26, 0.92)",
                      backdropFilter: "blur(8px)",
                      color: "#FAF6F0",
                      padding: "5px 14px",
                      borderRadius: "9999px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span>Starts at</span>
                    <strong style={{ color: "#FBBF24", fontSize: "0.95rem" }}>₹{cat.price}</strong>
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "24px 22px 22px 22px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      color: "#1E1C1A",
                      marginBottom: "8px",
                    }}
                  >
                    {cat.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#66615C",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      flex: 1,
                    }}
                  >
                    {cat.desc}
                  </p>

                  {/* View Plan Button */}
                  <button
                    onClick={() => onSelectCategory(cat.planId)}
                    style={{
                      backgroundColor: "#F7ECE1",
                      border: "1px solid rgba(214, 184, 160, 0.6)",
                      color: "#1E1C1A",
                      borderRadius: "9999px",
                      padding: "10px 20px",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.2s ease",
                      marginTop: "auto",
                    }}
                    className="view-plan-btn"
                  >
                    <span>View Plan & Details</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(30, 28, 26, 0.08) !important;
        }
        .view-plan-btn:hover {
          background-color: #1E1C1A !important;
          color: #FFFFFF !important;
          border-color: #1E1C1A !important;
        }
      `}</style>
    </section>
  );
}
