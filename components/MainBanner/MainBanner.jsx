import s from "./MainBanner.module.scss";
import Btn from "../Common/Buttons/Btn/Btn";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import React from "react";

const MainBanner = ({ t }) => {
  const router = useRouter();
  const isAuth = useSelector((s) => s.app.isAuth);
  // console.log(isAuth);
  const desktop = useMediaQuery("(min-width:768px)");

  const description = desktop
    ? t("home:main-description")
    : t("home:main-description-mobile");

  return (
    <main className={s.main}>
      <div className={s.backgroundImg}>
        <div className={s.container}>
          <div className={s.contentWrapper}>
            <h1>{t("home:main-title")}</h1>
            <p>{description}</p>
            {isAuth ? (
              <ScrollLink to="users" spy smooth offset={0} duration={500}>
                <Btn>{t("header:users")}</Btn>
              </ScrollLink>
            ) : (
              <Btn onClick={() => router.push("/registration#form")}>
                {t("header:sign-up")}
              </Btn>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBanner;
