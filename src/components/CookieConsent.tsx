"use client";

import { useEffect, useState } from "react";
import { Cookie, ShieldCheck, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  social: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  social: true,
};

const STORAGE_KEY = "capitaire_cookie_consent";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Small delay for smooth entrance after page load
        const timer = setTimeout(() => setIsOpen(true), 800);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(stored);
        if (parsed?.preferences) {
          setPreferences(parsed.preferences);
        }
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  const saveConsent = (status: "accepted" | "rejected" | "custom", prefs: CookiePreferences) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          status,
          preferences: prefs,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {
      // Storage unavailable or blocked
    }
    setIsOpen(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allEnabled: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      social: true,
    };
    setPreferences(allEnabled);
    saveConsent("accepted", allEnabled);
  };

  const handleRejectNonEssential = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      social: false,
    };
    setPreferences(onlyNecessary);
    saveConsent("rejected", onlyNecessary);
  };

  const handleSavePreferences = () => {
    saveConsent("custom", preferences);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Bottom Cookie Banner */}
      <AnimatePresence>
        {isOpen && !showSettings && (
          <motion.div
            role="region"
            aria-label="Cookie consent banner"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-xl md:bottom-6 md:right-6 md:left-auto md:max-w-[460px] max-[589px]:bottom-[86px]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141C2B]/95 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_24px_rgba(203,166,75,0.18)] backdrop-blur-2xl md:p-6">
              {/* Subtle top gold accent bar */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-[0_0_12px_rgba(203,166,75,0.2)]">
                  <Cookie className="h-5 w-5" />
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans text-sm font-semibold tracking-wide text-white">
                      Cookie Preferences
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Dismiss cookie banner"
                      className="rounded-md p-1 text-[#848EA3] transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-2 text-justify text-[13px] font-normal leading-[20px] text-[#A5ADBC]">
                    We use cookies to personalise content and ads, provide social media features, and analyse our traffic. We also share information about your use of our site with our analytics, advertising, and social media partners.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleAcceptAll}
                      className="cursor-pointer rounded-[4px] bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(203,166,75,0.35)] transition-all hover:brightness-110 active:scale-95"
                    >
                      Accept Cookies
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowSettings(true)}
                      className="cursor-pointer rounded-[4px] border border-[#CBA64B]/40 px-3.5 py-2 font-sans text-xs font-medium uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/10 active:scale-95"
                    >
                      Cookie Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Cookie Settings"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[90vh] w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#141C2B] text-white shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(203,166,75,0.2)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-sans text-lg font-semibold text-white">
                      Cookie Settings
                    </h2>
                    <p className="text-xs text-[#848EA3]">
                      Manage your cookie and privacy preferences
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  aria-label="Close settings"
                  className="rounded-md p-1.5 text-[#848EA3] transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Preferences List */}
              <div className="max-h-[calc(90vh-170px)] space-y-4 overflow-y-auto px-6 py-5 text-sm text-[#A5ADBC]">
                <p className="text-xs leading-relaxed text-[#848EA3]">
                  We use cookies to enhance navigation, analyse site usage, and assist in our marketing efforts. You can choose which types of cookies you permit below.
                </p>

                {/* Necessary Cookies */}
                <div className="rounded-xl border border-white/5 bg-[#1A2334]/70 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Strictly Necessary Cookies</h4>
                      <p className="mt-1 text-xs text-[#848EA3]">
                        Essential for core site security, session integrity, and navigation. These cannot be switched off.
                      </p>
                    </div>
                    <span className="ml-3 shrink-0 rounded-full bg-primary/20 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary uppercase">
                      Always Active
                    </span>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="rounded-xl border border-white/5 bg-[#1A2334]/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-white">Analytics & Performance Cookies</h4>
                      <p className="mt-1 text-xs text-[#848EA3]">
                        Allow us to count visits and traffic sources to measure and improve the performance of our site.
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.analytics}
                      onClick={() =>
                        setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                      }
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                        preferences.analytics ? "bg-primary" : "bg-white/20"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-navy shadow ring-0 transition duration-200 ease-in-out ${
                          preferences.analytics ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="rounded-xl border border-white/5 bg-[#1A2334]/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-white">Marketing & Advertising Cookies</h4>
                      <p className="mt-1 text-xs text-[#848EA3]">
                        Used by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.marketing}
                      onClick={() =>
                        setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))
                      }
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                        preferences.marketing ? "bg-primary" : "bg-white/20"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-navy shadow ring-0 transition duration-200 ease-in-out ${
                          preferences.marketing ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </button>
                  </div>
                </div>

                {/* Social Media & Personalisation */}
                <div className="rounded-xl border border-white/5 bg-[#1A2334]/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-white">Social Media & Personalisation Cookies</h4>
                      <p className="mt-1 text-xs text-[#848EA3]">
                        Enable sharing buttons, interactive features, and personalised content suited to your browsing history.
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.social}
                      onClick={() =>
                        setPreferences((prev) => ({ ...prev, social: !prev.social }))
                      }
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                        preferences.social ? "bg-primary" : "bg-white/20"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-navy shadow ring-0 transition duration-200 ease-in-out ${
                          preferences.social ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#0E1522] px-6 py-4">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="cursor-pointer text-xs font-medium tracking-wide text-[#848EA3] transition-colors hover:text-white"
                >
                  Reject Non-Essential
                </button>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="cursor-pointer rounded-[4px] border border-[#CBA64B]/50 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/10 active:scale-95"
                  >
                    Save Preferences
                  </button>
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-[4px] bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(203,166,75,0.35)] transition-all hover:brightness-110 active:scale-95"
                  >
                    <Check className="h-3.5 w-3.5" />
                    Accept All
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
