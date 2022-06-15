import s from "./Footer.module.scss";
import React from "react";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import SocialLink from "../Common/Links/SocialLink/SocialLink";
import Facebook from "../../images/socialIcons/facebook.svg";
import Twitter from "../../images/socialIcons/Twitter.svg";
import Instagram from "../../images/socialIcons/Instagram.svg";
import Linkedin from "../../images/socialIcons/Linkedin.svg";
import Pinterest from "../../images/socialIcons/Pinterest.svg";
import Tel from "../../images/header/tel.svg";
import Btn from "../Common/Buttons/Btn/Btn";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Logo from "../../images/header/Logo.svg";

const Footer = ({ children }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const isAuth = useSelector((s) => s.app.isAuth);

  const mobile = useMediaQuery("(max-width:767px)");

  return (
    <>
      <Print mobile={mobile} />
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.up}>
            <div className={s.upLeft}>
              <div aria-hidden="true" onClick={() => router.push("/")}>
                <Logo className={s.logo} />
              </div>
              {!mobile && (
                <>
                  <Item id="aboutMe" name={t("header:about-me")} />
                  <Item id="relationship" name={t("header:relationship")} />
                  <Item id="users" name={t("header:users")} />
                </>
              )}
            </div>
            {!mobile && children}
          </div>

          {!mobile && <Middle t={t} />}
          {mobile && !isAuth && (
            <Btn
              onClick={() => router.push("/sign")}
              marginBottom={30}
              outlined
            >
              {t("header:sign-up")}
            </Btn>
          )}

          <div className={s.bottom}>
            <span className={s.mark}>{t("header:quality-mark")}</span>
            <div className={s.socialLinkWrapper}>
              <SocialLink Icon={Facebook} href="https://www.facebook.com/" />
              <SocialLink Icon={Twitter} href="https://twitter.com/" />
              <SocialLink Icon={Instagram} href="https://www.instagram.com/" />
              <SocialLink Icon={Linkedin} href="https://www.linkedin.com/" />
              <SocialLink Icon={Pinterest} href="https://www.pinterest.ru/" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const Item = ({ id, name }) => (
  <div className={s.item}>
    <ScrollLink
      to={id}
      activeClass={s.active}
      spy
      smooth
      offset={0}
      duration={500}
    >
      {name}
    </ScrollLink>
  </div>
);

const NextItem = ({ name, href }) => (
  <div className={s.item}>
    <NextLink href={href}>
      <a>{name}</a>
    </NextLink>
  </div>
);

const Middle = ({ t }) => (
  <div className={s.middle}>
    <div className={s.left}>
      <nav className={s.nav}>
        <span className={s.subtitle}>{t("header:information")}</span>
        <Item id="news" name={t("header:news")} />
        <Item id="blog" name={t("header:blog")} />
        <Item id="partners" name={t("header:partners")} />
        <Item id="shop" name={t("header:shop")} />
      </nav>

      <nav className={s.nav}>
        <span className={s.subtitle}>{t("header:about")}</span>
        <Item id="overview" name={t("header:overview")} />
        <Item id="design" name={t("header:design")} />
        <Item id="code" name={t("header:code")} />
        <Item id="collaborate" name={t("header:collaborate")} />
      </nav>

      <nav className={s.nav}>
        <span className={s.subtitle}>{t("header:tools")}</span>
        <Item id="tutorials" name={t("header:tutorials")} />
        <Item id="resources" name={t("header:resources")} />
        <Item id="guides" name={t("header:guides")} />
        <Item id="examples" name={t("header:examples")} />
      </nav>

      <nav className={s.nav}>
        <span className={s.subtitle}>{t("header:support")}</span>
        <Item id="faq" name={t("header:faq")} />
        <NextItem href="/terms" name={t("header:terms")} />
        <Item id="privacy" name={t("header:privacy")} />
        <Item id="help" name={t("header:help")} />
      </nav>
    </div>

    <div className={s.right}>
      <nav className={s.nav}>
        <span className={s.subtitle}>{t("header:contacts")}</span>
        <div>
          <NextLink href="mailto: work.of.future@gmail.com">
            work.of.future@gmail.com
          </NextLink>
        </div>
        <span>+38 (050) 789 24 98</span>
        <span>+38 (050) 789 65 34</span>
      </nav>
    </div>
  </div>
);

const Print = ({ mobile }) => (
  <div className={s.printWrapper}>
    <picture className={s.picture}>
      <source
        media="(min-width: 1400px)"
        srcSet="/images/footer/Footprint972.webp"
      />
      <source
        media="(min-width: 768px)"
        srcSet="/images/footer/Footprint467.webp"
      />
      <img src="/images/footer/Footprint328.webp" alt="footprint" />
    </picture>
    {mobile && (
      <NextLink href="tel: +380507896534">
        <a>
          <Tel />
        </a>
      </NextLink>
    )}
  </div>
);
