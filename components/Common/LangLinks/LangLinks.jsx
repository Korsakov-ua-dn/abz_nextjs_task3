import { useRouter } from "next/router";
import s from "./LangLinks.module.scss";
import NextLink from "next/link";
import React from "react";

const LangLinks = () => {
  const router = useRouter();
  const currentLang = router.locale;
  const classEnBtn = `${currentLang === "en" && s.active} ${s.langBtn}`;
  const classDeBtn = `${currentLang === "de" && s.active} ${s.langBtn}`;

  return (
    <div>
      <NextLink href={router.pathname} locale="en">
        <a style={{ marginRight: 24 }} className={classEnBtn}>
          En
        </a>
      </NextLink>
      <NextLink href={router.pathname} locale="de">
        <a className={classDeBtn}>De</a>
      </NextLink>
    </div>
  );
};

export default LangLinks;
