import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

//TODO: REPLACE
export const ANALYTICS_MEASUREMENT_ID = "G-XGL84RGTS6";
const ANALYTICS_STORAGE_KEY = "google_analytics";
const COOKIES_STORAGE_KEY = "cookies";

export function useAnalytics(): [boolean, () => void] {
  const [optedIn, setOptedIn] = useState(false);

  useEffect(() => {
    const storedVal = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    setOptedIn(storedVal !== "false");
  }, []);

  function toggle() {
    const storedVal = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const newVal = storedVal === "false";

    localStorage.setItem(ANALYTICS_STORAGE_KEY, newVal.toString());
    location.reload();
  }
  return [optedIn, toggle];
}

export function useCookies(): [boolean | undefined, (v?: boolean) => void] {
  const [optedIn, setOptedIn] = useState<boolean>();

  useEffect(() => {
    const storedVal = localStorage.getItem(COOKIES_STORAGE_KEY);

    setOptedIn(
      typeof storedVal === "string" ? storedVal === "true" : undefined
    );
  }, []);

  function toggle(v?: boolean) {
    const storedVal = localStorage.getItem(COOKIES_STORAGE_KEY);
    const newVal = typeof v !== "undefined" ? v : storedVal !== "true";

    // set consent
    consentGA("update", newVal);
    setOptedIn(newVal);
    localStorage.setItem(COOKIES_STORAGE_KEY, newVal.toString());

    // remove existing cookies if the user
    // has declined consent
    if (!newVal) {
      document.cookie
        .split(";")
        .forEach(
          (c) =>
            (document.cookie = c
              .replace(/^ +/, "")
              .replace(
                /=.*/,
                "=;expires=" + new Date().toUTCString() + ";path=/"
              ))
        );
    }

    // cookie analytics
    ReactGA.gtag("event", "cookie_consent", {
      status: newVal ? "accepted" : "declined"
    });
  }

  return [optedIn, toggle];
}

export function consentGA(consentType: "default" | "update", cookies: boolean) {
  const val = cookies ? "granted" : "denied";

  const cookieFields = [
    "ad_storage",
    "analytics_storage",
    "functionality_storage",
    "personalization_storage"
  ];

  const consentConfig: Record<string, string | number> = {
    security_storage: "granted",
    wait_for_update: 2000
  };

  for (const field of cookieFields) {
    consentConfig[field] = val;
  }
  ReactGA.gtag("consent", consentType, consentConfig);
}
