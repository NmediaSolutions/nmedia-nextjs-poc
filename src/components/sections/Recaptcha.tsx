"use client";

import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        params: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
        }
      ) => number;
    };
    onRecaptchaApiLoad?: () => void;
  }
}

const SCRIPT_ID = "recaptcha-api-script";

/**
 * Widget reCAPTCHA v2 (checkbox), equivalent du composant vue3-recaptcha2
 * utilise sur le site source. Necessite NEXT_PUBLIC_RECAPTCHA_SITE_KEY
 * (cle site enregistree pour le nouveau domaine).
 */
export default function Recaptcha({
  onVerify,
  onExpire,
}: {
  onVerify: (token: string) => void;
  onExpire: () => void;
}) {
  const containerId = useId();
  const rendered = useRef(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!siteKey || rendered.current) return;

    function renderWidget() {
      const el = document.getElementById(containerId);
      if (el && window.grecaptcha && !rendered.current) {
        window.grecaptcha.render(el, {
          sitekey: siteKey!,
          callback: onVerify,
          "expired-callback": onExpire,
        });
        rendered.current = true;
      }
    }

    if (window.grecaptcha) {
      renderWidget();
      return;
    }

    if (!document.getElementById(SCRIPT_ID)) {
      window.onRecaptchaApiLoad = renderWidget;
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaApiLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey]);

  if (!siteKey) {
    return (
      <p className="text-14 text-warning border border-warning rounded p-12">
        reCAPTCHA non configuré (NEXT_PUBLIC_RECAPTCHA_SITE_KEY manquant) — mode développement.
      </p>
    );
  }

  return <div id={containerId} />;
}
