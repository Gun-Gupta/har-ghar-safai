export const PRIMARY_PHONE = "+91 90278 65224";
export const RAW_PRIMARY_PHONE = "919027865224";
export const TEL_PRIMARY_LINK = "tel:+919027865224";

export const SECONDARY_PHONE = "+91 93026 42694";
export const RAW_SECONDARY_PHONE = "919302642694";
export const TEL_SECONDARY_LINK = "tel:+919302642694";

// Backward-compatible aliases
export const CONTACT_PHONE = PRIMARY_PHONE;
export const RAW_PHONE = RAW_PRIMARY_PHONE;
export const TEL_LINK = TEL_PRIMARY_LINK;

/**
 * Builds a direct WhatsApp chat URL with encoded message
 */
export function getWhatsAppLink(message: string, rawPhone: string = RAW_PRIMARY_PHONE): string {
  return `https://wa.me/${rawPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp in a new tab/window directly
 */
export function openWhatsApp(message: string, rawPhone: string = RAW_PRIMARY_PHONE) {
  if (typeof window !== "undefined") {
    window.open(getWhatsAppLink(message, rawPhone), "_blank", "noopener,noreferrer");
  }
}

/**
 * Initiates a phone call directly via tel: protocol
 */
export function callPhone(telLink: string = TEL_PRIMARY_LINK) {
  if (typeof window !== "undefined") {
    window.location.href = telLink;
  }
}
