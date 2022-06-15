import s from "./Success.module.scss";
import Btn from "../../Common/Buttons/Btn/Btn";

const Success = ({ t }) => (
  <div className={s.successWrapper}>
    <img src="/images/registration/registrationSuccess.svg" alt="send email" />
    <span className={s.description}>
      {t("registration:success-description")}
    </span>
    <Btn>{t("registration:success-btn")}</Btn>
  </div>
);

export default Success;
