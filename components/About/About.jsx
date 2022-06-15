import s from "./About.module.scss";
import ScrollDownBtn from "../Common/Buttons/ScrollDownBtn/ScrollDownBtn";
import Btn from "../Common/Buttons/Btn/Btn";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import React from "react";

const About = ({ t }) => {
  const router = useRouter();
  const isAuth = useSelector((s) => s.app.isAuth);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <ScrollDownBtn toId="aboutMe" />

        <div className={s.aboutWrapper} id="aboutMe">
          <div className={s.textWrapper}>
            <h1>{t("home:about-title")}</h1>
            <h3>{t("home:about-subtitle")}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t("home:about-description") }}
            />
            {isAuth ? (
              <ScrollLink
                to="users"
                spy
                smooth
                offset={0}
                duration={500}
              >
                <Btn secondary>{t("header:users")}</Btn>
              </ScrollLink>
            ) : (
              <Btn onClick={() => router.push("registration#form")} secondary>
                {t("header:sign-up")}
              </Btn>
            )}
          </div>
          <div className={s.programmer}>
            <img src="/images/about/programmer.svg" alt="programmer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
