"use client";

import { usePathname } from "next/navigation";

const SITE_URL = "https://yaxshiniyat.uz";
const LOCALES = ["ru", "uz"];
const DEFAULT_LOCALE = "ru";

export function Canonical() {
  const pathname = usePathname() ?? "/"; // если null, берем "/"
  const pathWithoutLocale = pathname.replace(/^\/(ru|uz)/, ""); // /about

  const canonical = `${SITE_URL}${pathname}`;
  const languages: Record<string, string> = {};

  LOCALES.forEach((locale) => {
    languages[locale] = `${SITE_URL}/${locale}${pathWithoutLocale}`;
  });

  const alternates = {
    canonical,
    languages,
    default: `${SITE_URL}/${DEFAULT_LOCALE}${pathWithoutLocale}`,
  };

  return (
    <>
      <link rel="canonical" href={alternates.canonical} />
      {Object.entries(alternates.languages).map(([locale, url]) => (
        <link key={locale} rel="alternate" href={url} hrefLang={locale} />
      ))}
      <link rel="alternate" href={alternates.default} hrefLang="x-default" />
    </>
  );
}
