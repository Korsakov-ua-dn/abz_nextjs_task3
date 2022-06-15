import SignBanner from "../../components/Registration/SignBanner/SignBanner";
import { useTranslation } from "next-i18next";
import MainLayouts from "../../layouts/MainLayout";
import s from "../../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScrollDownBtn from "../../components/Common/Buttons/ScrollDownBtn/ScrollDownBtn";
import FormContainer from "../../components/Registration/Form/FormContainer";
import AlertDialog from "../../components/Common/AlertDialog/AlertDialog";
import SingletonRouter, { useRouter, Router } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setPathname } from "../../store/reducers/sign-reducer";

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, [
        "common",
        "header",
        "registration",
      ])),
    },
  };
}

const SignUp = () => {
  const { t } = useTranslation();
  // console.log("about, res:", res);
  const dispatch = useDispatch();

  const [openAlert, setOpenAlert] = useState(false);
  const [isData, setData] = useState(true);

  // перехватываю изменение урла если есть данные в форме
  useEffect(() => {
    if (isData) {
      // Adding window alert if the shop quits without saving
      window.onbeforeunload = function () {
        return "If you leave the page all data will be lost";
      };
    } else {
      window.onbeforeunload = () => {};
    }

    if (isData) {
      SingletonRouter.router.change = (...args) => {
        dispatch(setPathname(args[1]));
        setOpenAlert(true);
      };
    }
    return () => {
      delete SingletonRouter.router.change;
    };
  }, [isData]);

  return (
    <MainLayouts title="Sign up">
      <main className={s.main}>
        <SignBanner t={t} />
        <ScrollDownBtn toId="form" />
        <FormContainer t={t} />
      </main>
      <AlertDialog openAlert={openAlert} setOpenAlert={setOpenAlert} t={t} />
    </MainLayouts>
  );
};

export default SignUp;

// export async function getServerSideProps(context) {
//   const users = await usersAPI.getUsers(1, 10);
//   // console.log("getServerSideRendering");
//   return {
//     props: {
//       res: users.data,
//     }, // will be passed to the page component as props
//   };
// }
