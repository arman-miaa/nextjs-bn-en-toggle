
import LanguageToggle from "@/componemts/shared/LanguageToggle";
import { getTranslations } from "next-intl/server";

export default async function HomePage({ params }) {
  const t = await getTranslations("home"); // automatically uses params.lang

  return (
    <div className="text-center mt-10">
      <LanguageToggle lang={params.lang} />
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="mt-3 text-lg">{t("subtitle")}</p>
    </div>
  );
}
