import { useDispatch, useSelector } from "react-redux";
import s from "./Form.module.scss";
import { useEffect } from "react";
import { getPositions } from "../../../store/reducers/sign-reducer";
import Success from "./Success";
import Form from "./Form";

const FormContainer = ({ t, setDataisFilled }) => {
  const dispatch = useDispatch();

  const { isAuth, isServerError } = useSelector((s) => s.app);
  const { positions, isSuccessRegistration } = useSelector((s) => s.sign);

  useEffect(() => {
    dispatch(getPositions());
  }, []);

  const title = isSuccessRegistration
    ? t("registration:success-title")
    : t("registration:form-title");

  const subtitle = isSuccessRegistration
    ? t("registration:success-subtitle")
    : t("registration:form-subtitle");

  return (
    <section id="form" className={s.section}>
      <div className={s.container}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>

        {isSuccessRegistration ? (
          <Success t={t} />
        ) : (
          <Form
            setDataisFilled={setDataisFilled}
            isServerError={isServerError}
            positions={positions}
            t={t}
          />
        )}
      </div>
    </section>
  );
};

export default FormContainer;
