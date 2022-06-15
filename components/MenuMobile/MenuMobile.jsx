import React from "react";
import s from "./Menu.module.scss";
// import logo from "../../../Assets/Img/Logo.svg";
import { Link } from "react-scroll";
// import {useDispatch, useSelector} from "react-redux"
// import {setOpenMenu} from "../../../Main/BLL/b2-app-reducer"
// import {AppStoreType} from "../../../Main/BLL/b1-store";
import Logo from "../../images/header/Logo.svg";
import About from "../../images/menu/about.svg";
import Billing from "../../images/menu/billing.svg";
import Relationship from "../../images/menu/relationship.svg";
import Users from "../../images/menu/users.svg";
import Cart from "../../images/menu/cart.svg";
import Quit from "../../images/menu/quit.svg";
import Sign from "../../images/menu/sign.svg";
import Flag from "../../images/menu/flag.svg";
import Image from "next/image";
// import Tooltip from "../Tooltip/Tooltip";
import { useTranslation } from "next-i18next";
import { useSwipeable } from "react-swipeable";

const Menu = ({ isAuth, isOpenMenu, setOpenMenu, name, email }) => {
  // const dispatch = useDispatch()
  // const isOpenMenu = useSelector((s: AppStoreType) => s.app.isOpenMenu)

  const { t } = useTranslation();

  const handleCloseMenu = () => {
    // dispatch(setOpenMenu(false))
    setOpenMenu(false);
    document.body.style.overflow = "visible"; // for correct work mobileMenu
  };

  const Item = ({ id, name, children }) => (
    <div className={s.item}>
      <Link
        to={id}
        activeClass={s.active}
        spy
        smooth
        offset={-60}
        duration={500}
        onClick={handleCloseMenu}
      >
        <div className={s.iconWrapper}>{children || <Flag />}</div>
        {name}
      </Link>
    </div>
  );

  const handlers = useSwipeable({
    onSwipedLeft: handleCloseMenu,
    trackMouse: true,
  });

  if (!isOpenMenu) return null;

  return (
    <div className={`${s.wrapper}`}>
      <div onClick={handleCloseMenu} className={s.background} />

      <div {...handlers} className={`${s.menu}`}>
        <div className={s.logoWrapper}>
          <Logo />
        </div>

        {isAuth && (
          <div className={s.userWrapper}>
            <Image width={70} height={70} src="/images/menuAva.png" />
            <span className={s.name}>{name}</span>
            <span className={s.email}>{email}</span>
          </div>
        )}

        <nav className={s.nav}>
          <Item id="aboutMe" name={t("header:about-me")}>
            <About />
          </Item>
          <Item id="relationship" name={t("header:relationship")}>
            <Relationship />
          </Item>
          <Item id="users" name={t("header:users")}>
            <Users />
          </Item>
          <Item id="cart" name={t("header:cart")}>
            <Cart />
          </Item>
          {isAuth ? (
            <>
              <Item id="billing" name={t("header:billing")}>
                <Billing />
              </Item>
              <Item id="quit" name={t("header:quit")}>
                <Quit />
              </Item>
            </>
          ) : (
            <>
              <Item id="signIn" name={t("header:sign-in")}>
                <Sign />
              </Item>
              <Item id="signUp" name={t("header:sign-up")}>
                <Sign />
              </Item>
            </>
          )}
        </nav>

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
          <Item id="terms" name={t("header:terms")} />
          <Item id="privacy" name={t("header:privacy")} />
          <Item id="help" name={t("header:help")} />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
