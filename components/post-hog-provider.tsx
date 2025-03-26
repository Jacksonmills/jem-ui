"use client";

import { useEffect } from "react";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      person_profiles: "never",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
