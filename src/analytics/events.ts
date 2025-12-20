/**
 * 🔥 Firebase Analytics (GA4) - Event Tracking
 *
 * Centralizes all analytics event tracking for the portfolio.
 * Uses Firebase Analytics logEvent with custom parameters.
 *
 * ✅ Events follow GA4 best practices:
 * - Names in snake_case
 * - Precise parameters for business KPIs
 * - Only triggered on explicit user actions
 *
 * @see https://firebase.google.com/docs/analytics/events
 */

import { logEvent } from "firebase/analytics";
import { analytics } from "@/config/firebase";

// Utility: wait for `gtag` to be available before calling it
const waitForGtag = (maxAttempts = 20, interval = 200) => {
  return new Promise<typeof window.gtag>((resolve, reject) => {
    if (typeof window === "undefined") return reject(new Error("no-window"));
    let attempts = 0;
    const id = setInterval(() => {
      attempts += 1;
      const g = (window as any).gtag;
      if (typeof g === "function") {
        clearInterval(id);
        resolve(g);
      } else if (attempts >= maxAttempts) {
        clearInterval(id);
        reject(new Error("gtag-timeout"));
      }
    }, interval);
  });
};

// Habilita `debug_mode` automáticamente en entorno de desarrollo
// para que los eventos aparezcan en DebugView sin ejecutar comandos manuales.
if (import.meta.env.DEV && typeof window !== "undefined") {
  waitForGtag()
    .then((gtagFn) => {
      try {
        gtagFn("set", { debug_mode: true });
        console.info("Analytics debug_mode enabled (dev)");
      } catch (e) {
        console.warn("Failed to set debug_mode:", e);
      }
    })
    .catch(() => {
      // ignore if gtag never appears
    });
}

// Nota: No es necesario llamar gtag('config', secondId) porque
// los eventos ya se envían al Measurement ID configurado en index.html (G-L8QWCNC52H).
// VITE_GA_SECOND_ID se mantiene como variable de entorno por compatibilidad futura.

// ====================================
// 📊 Type Definitions
// ====================================

export type ProjectType = "web" | "mobile" | "desktop";
export type Language = "es" | "en";
export type ContactType = "email" | "linkedin" | "github";
export type ShareChannel = "whatsapp" | "telegram" | "linkedin" | "x";

// ====================================
// 🎯 Analytics Event Functions
// ====================================

/**
 * 1️⃣ Track Project Click
 *
 * Fires when user explicitly clicks "Ver proyecto" / "View Project" button.
 *
 * ⚠️ IMPORTANT: Only fires on button click, NOT on:
 * - Card render
 * - Hover
 * - Scroll into view
 *
 * @param projectId - Unique project identifier
 * @param projectType - Type of project (web, mobile, desktop)
 * @param language - Current portfolio language
 *
 * @example
 * trackProjectClick("royal-chicken-bbq", "web", "es");
 */
export const trackProjectClick = (
  projectId: string,
  projectType: ProjectType,
  language: Language
) => {
  if (!analytics) {
    console.warn("Firebase Analytics not initialized. Event not tracked.");
    return;
  }

  try {
    logEvent(analytics, "project_click", {
      project_id: projectId,
      project_type: projectType,
      language: language,
    });

    // Optional: Console log for debugging (remove in production)
    if (import.meta.env.DEV) {
      console.log("📊 Analytics: project_click", {
        project_id: projectId,
        project_type: projectType,
        language: language,
      });
    }
  } catch (error) {
    console.error("Error tracking project_click:", error);
  }
};

/**
 * 2️⃣ Track Language Change
 *
 * Fires when user manually switches portfolio language.
 *
 * @param language - Selected language (es or en)
 *
 * @example
 * trackLanguageClick("en");
 */
export const trackLanguageClick = (language: Language) => {
  if (!analytics) {
    console.warn("Firebase Analytics not initialized. Event not tracked.");
    return;
  }

  try {
    logEvent(analytics, "language_click", {
      language: language,
    });

    if (import.meta.env.DEV) {
      console.log("📊 Analytics: language_click", { language });
    }
  } catch (error) {
    console.error("Error tracking language_click:", error);
  }
};

/**
 * 3️⃣ Track Contact Click
 *
 * Fires when user clicks on any contact link (email, LinkedIn, GitHub).
 *
 * @param contactType - Type of contact clicked (email, linkedin, github)
 * @param language - Current portfolio language
 *
 * @example
 * trackContactClick("email", "es");
 * trackContactClick("linkedin", "en");
 */
export const trackContactClick = (
  contactType: ContactType,
  language: Language
) => {
  if (!analytics) {
    console.warn("Firebase Analytics not initialized. Event not tracked.");
    return;
  }

  try {
    logEvent(analytics, "contact_click", {
      contact_type: contactType,
      language: language,
    });

    if (import.meta.env.DEV) {
      console.log("📊 Analytics: contact_click", {
        contact_type: contactType,
        language,
      });
    }
  } catch (error) {
    console.error("Error tracking contact_click:", error);
  }
};

/**
 * 4️⃣ Track Share Click
 *
 * Fires when user clicks on a share button.
 *
 * @param shareChannel - Social media platform used (whatsapp, telegram, linkedin, x)
 * @param language - Current portfolio language
 *
 * @example
 * trackShareClick("whatsapp", "es");
 * trackShareClick("linkedin", "en");
 */
export const trackShareClick = (
  shareChannel: ShareChannel,
  language: Language
) => {
  if (!analytics) {
    console.warn("Firebase Analytics not initialized. Event not tracked.");
    return;
  }

  try {
    logEvent(analytics, "share_click", {
      share_channel: shareChannel,
      language: language,
    });

    if (import.meta.env.DEV) {
      console.log("📊 Analytics: share_click", {
        share_channel: shareChannel,
        language,
      });
    }
  } catch (error) {
    console.error("Error tracking share_click:", error);
  }
};

/**
 * 🎯 Additional utility for page views (optional)
 *
 * Firebase Analytics automatically tracks page_view events,
 * but you can manually track specific views if needed.
 */
export const trackPageView = (pageName: string, language: Language) => {
  if (!analytics) return;

  try {
    logEvent(analytics, "page_view", {
      page_name: pageName,
      language: language,
    });
  } catch (error) {
    console.error("Error tracking page_view:", error);
  }
};
