"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // current lang route থেকে বের করো
  const segments = pathname.split("/");
  const currentLang = segments[1] || "en"; // fallback en

  const switchLanguage = () => {
    const newLang = currentLang === "en" ? "bn" : "en";
    segments[1] = newLang;
    const newPath = segments.join("/");

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <button
      onClick={switchLanguage}
      disabled={isPending}
      className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-opacity-80 transition"
    >
      {currentLang === "en" ? "বাংলায় যান" : "Switch to English"}
    </button>
  );
}
