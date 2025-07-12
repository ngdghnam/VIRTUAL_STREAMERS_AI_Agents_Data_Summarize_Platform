"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [locale, setLocale] = React.useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  };

  const translation = useTranslations("navbar")

  return (
    <div className="flex justify-between items-center p-2">
      <div className="font-bold text-[20px]">{translation("logo")}</div>
      <div className="font-medium">{translation("title")}</div>
      <div>
        <Select value={locale} onValueChange={changeLocale}>
          <SelectTrigger>
            <SelectValue placeholder="Langs"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="vi">VI</SelectItem>
            <SelectItem value="kr">KR</SelectItem>
            <SelectItem value="fr">FR</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Navbar;
