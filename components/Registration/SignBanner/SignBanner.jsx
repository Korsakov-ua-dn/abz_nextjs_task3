import s from "./SignBanner.module.scss";
import Btn from "../../Common/Buttons/Btn/Btn";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

const SignBanner = ({ t }) => {
  const isAuth = useSelector((s) => s.app.isAuth);
  // console.log(isAuth);
  const desktop = useMediaQuery("(min-width:768px)");

  const description = desktop
    ? t("registration:banner-description")
    : t("registration:banner-description-mobile");

  return (
    <main className={s.main}>
      <div className={s.backgroundImg}>
        <div className={s.container}>
          <div className={s.contentWrapper}>
            <h1>{t("registration:banner-title")}</h1>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <Btn>{t("header:sign-up")}</Btn>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignBanner;
