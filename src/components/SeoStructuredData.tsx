import React from "react";
import { FAQS_DATA } from "@/data/faqs";

export default function SeoStructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Har Ghar Safai",
    "alternateName": "Har Ghar Safai Cleaning Services",
    "image": "https://hargharsafai.in/images/hero-cleaner.jpg",
    "url": "https://hargharsafai.in",
    "telephone": "+919027865224",
    "priceRange": "₹199 - ₹899",
    "paymentAccepted": "Cash, UPI, PhonePe, Google Pay, Paytm",
    "currenciesAccepted": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Connaught Place",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6315,
      "longitude": 77.2167
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+919027865224",
        "contactType": "customer service",
        "contactOption": "TollFree",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+919302642694",
        "contactType": "reservations",
        "contactOption": "TollFree",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "4820",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Har Ghar Safai Cleaning Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Per Room Deep Cleaning",
            "description": "Comprehensive dusting, cobweb removal, switchboards, fan cleaning, and floor scrubbing."
          },
          "price": "199",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Deep Clean",
            "description": "Oil & grease removal, tile degreasing, chimney exterior wipe, and sink descaling."
          },
          "price": "199",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Deep Clean",
            "description": "Tile wall scrubbing, hard water scale removal, toilet & washbasin sanitization, tap polish."
          },
          "price": "199",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full House Deep Cleaning Package",
            "description": "Complete top-to-bottom clean of all bedrooms, living room, kitchen, bathrooms, and balcony under ₹1,000."
          },
          "price": "899",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hargharsafai.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cleaning Services & Pricing",
        "item": "https://hargharsafai.in/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Reviews",
        "item": "https://hargharsafai.in/#reviews"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Frequently Asked Questions",
        "item": "https://hargharsafai.in/#faqs"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
