/**
 * 🔥 Firebase Analytics (GA4) - Event Tracking
 *
 * Simple, clean implementation that sends events via gtag with correct parameters.
 */

export type ProjectType = "web" | "mobile" | "desktop";
export type Language = "es" | "en";
export type ContactType = "email" | "linkedin" | "github";
export type ShareChannel = "whatsapp" | "telegram" | "linkedin" | "x";

// Wait for gtag to be ready
const waitForGtag = (): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      resolve();
    } else {
      const checkInterval = setInterval(() => {
        if (typeof window !== "undefined" && (window as any).gtag) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 50);
      // Timeout after 3 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 3000);
    }
  });
};

// Helper to send events via gtag with parameters
const sendEvent = async (eventName: string, params: Record<string, any>) => {
  await waitForGtag();

  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
    if (import.meta.env.DEV) {
      console.log(`📊 Analytics: ${eventName}`, params);
    }
  }
};

export const trackProjectClick = (
  projectId: string,
  projectName: string,
  projectType: ProjectType
) => {
  sendEvent("project_click", {
    project_id: projectId,
    project_name: projectName,
    project_type: projectType,
  });
};

export const trackLanguageClick = (language: Language) => {
  sendEvent("language_click", {
    selected_language: language,
  });
};

export const trackContactClick = (contactType: ContactType) => {
  sendEvent("contact_click", {
    contact_type: contactType,
  });
};

export const trackShareClick = (shareChannel: ShareChannel) => {
  sendEvent("share_click", {
    share_channel: shareChannel,
  });
};

export const trackPageView = (pageName: string) => {
  sendEvent("page_view", {
    page_name: pageName,
  });
};
