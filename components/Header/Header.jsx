import s from "./Header.module.scss";
import Btn from "../Common/Buttons/Btn/Btn";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../images/header/Logo.svg";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import LangSelect from "../Common/LangSelect/LangSelect";
import MenuBurger from "../../images/header/MenuBurger.svg";
import Cart from "../../images/header/Cart.svg";
import UserIcon from "../../images/header/user.svg";
import Image from "next/image";
import Tooltip from "../Common/Tooltip/Tooltip";
import Billing from "../../images/header/Billing.svg";
import Quit from "../../images/header/Quit.svg";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";
import LangLinks from "../Common/LangLinks/LangLinks";

const Header = ({ isAuth, isServerError, setOpenMenu }) => {
  const name = "Maximilian ";
  const email = "MaximilianMaximilian@gmail.com";

  const router = useRouter();
  const currentLang = router.locale;

  const { t } = useTranslation();
  const mobile = useMediaQuery("(max-width:1023px)");

  return (
    <header className={s.headerWrapper}>
      {isServerError && (
        <div className={s.serverError}>
          <div className={s.contentBox}>
            <span className={s.errorMessage}>{t("header:error-message")}</span>
            <Btn small outlined>
              {t("header:error-btn")}
            </Btn>
          </div>
        </div>
      )}

      <div className={s.header}>
        <div className={s.contentBox}>
          <HeaderLeft mobile={mobile} t={t} router={router} />

          <div className={s.right}>
            {mobile ? (
              <MobileRight
                currentLang={currentLang}
                setOpenMenu={setOpenMenu}
              />
            ) : (
              <>
                <LangLinks />
                {!isAuth && <BtnSignBlock t={t} router={router} />}
                {isAuth && (
                  <>
                    <CartLink />
                    <UserSettingsBlock t={t} name={name} email={email} />
                  </>
                )}
              </>
            )}
          </div>

          {/*<div className={s.placeholder}>*/}
          {/*  <div className={s.p1} />*/}
          {/*  <div className={s.p2} />*/}
          {/*</div>*/}
        </div>
      </div>
    </header>
  );
};

export default Header;

// left
const HeaderLeft = ({ mobile, t, router }) => (
  <div className={s.left}>
    <div
      className={s.logoClickArea}
      aria-hidden="true"
      onClick={() => router.push("/")}
    >
      <Logo className={s.logo} />
    </div>
    {!mobile && <LinkBlock t={t} />}
  </div>
);

const LinkBlock = ({ t }) => (
  <>
    <ScrollLink
      to="aboutMe"
      activeClass={s.active}
      spy
      smooth
      offset={0}
      duration={500}
      className={s.link}
    >
      {t("header:about-me")}
    </ScrollLink>
    <ScrollLink
      to="relationship"
      activeClass={s.active}
      spy
      smooth
      offset={0}
      duration={500}
      className={s.link}
    >
      {t("header:relationship")}
    </ScrollLink>
    <ScrollLink
      to="users"
      activeClass={s.active}
      spy
      smooth
      offset={0}
      duration={500}
      className={s.link}
    >
      {t("header:users")}
    </ScrollLink>
  </>
);

//right
const MobileRight = ({ currentLang, setOpenMenu }) => (
  <>
    <LangSelect currentLang={currentLang === "en" ? "En" : "De"} />
    <div
      draggable="false"
      className={s.menuBurger}
      onClick={() => {
        setOpenMenu(true);
        document.body.style.overflow = "hidden";
      }}
    >
      <MenuBurger />
    </div>
  </>
);

const BtnSignBlock = ({ t, router }) => (
  <>
    <div className={s.headerBtn}>
      <Btn
        onClick={() => router.push("/login")}
        small
        outlined
        header
        width={130}
      >
        {t("header:sign-in")}
      </Btn>
    </div>

    <div className={s.headerBtn}>
      <Btn onClick={() => router.push("/registration#form")} small header width={130}>
        {t("header:sign-up")}
      </Btn>
    </div>
  </>
);

const CartLink = () => (
  <div className={s.cartLinkWrapper}>
    <NextLink href="/cart">
      <a>
        <Cart />
      </a>
    </NextLink>
  </div>
);

const UserSettingsBlock = ({ t, name, email }) => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <button
      onClick={() => {
        setOpenSettings(!openSettings);
      }}
      className={s.userBtn}
      type="button"
    >
      <UserIcon />
      {openSettings && (
        <div className={s.settingsList}>
          <div className={s.userInfo}>
            <Image
              width={38}
              height={38}
              src="/images/headerAva.png"
              alt={`avatar of ${name}`}
            />
            <div id="userDataWrapper" className={s.userData}>
              <Tooltip openSettings={openSettings} id="userName" title={name}>
                <span id="userName" className={s.name}>
                  {name}
                </span>
              </Tooltip>
              <Tooltip openSettings={openSettings} id="userEmail" title={email}>
                <span id="userEmail" className={s.email}>
                  {email}
                </span>
              </Tooltip>
            </div>
          </div>
          <div className={s.itemWrapper}>
            <div className={s.quit}>
              <div className={s.icon}>
                <Billing />
              </div>
              <span>{t("header:billing")}</span>
            </div>
            <div className={s.quit}>
              <div className={s.icon}>
                <Quit />
              </div>
              <span>{t("header:quit")}</span>
            </div>
          </div>
        </div>
      )}
    </button>
  );
};
