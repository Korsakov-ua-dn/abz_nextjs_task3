import React, { useEffect } from "react";
// import Image from "next/image";
import s from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MainLayouts from "../layouts/MainLayout";
import MainBanner from "../components/MainBanner/MainBanner";
import About from "../components/About/About";
import Relationship from "../components/Relationship/Raltionship";
import Users from "../components/Users/Users";
import { useDispatch } from "react-redux";
import { initializeApp } from "../store/reducers/app-reducer";

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, [
        "common",
        "header",
        "home",
      ])),
    },
  };
}

export default function Home() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  return (
    <MainLayouts title="Main page">
      <main className={s.main}>
        <MainBanner t={t} />
        <About t={t} />
        <Relationship t={t} />
        <Users t={t} />
      </main>
    </MainLayouts>
  );
}
