"use client";

import Button from "../../ui/Button";
import Link from "next/link";
import TitleDescSection from "../../common/TitleDescSection";
import { useTranslations } from "next-intl";
import HomeBlogs from "./HomeBlogs";

const RecentNewsesNBlogs = () => {
  const t = useTranslations("blog");

  return (
    <TitleDescSection
      className="pb-[100px]"
      title={t("title")}
      description={t("description")}
    >
      <HomeBlogs />

      <div className="mt-10 flex justify-center">
        <Link href="/resources/blog">
          <Button>{t("view_all_button")}</Button>
        </Link>
      </div>
    </TitleDescSection>
  );
};

export default RecentNewsesNBlogs;
