import s from "./Form.module.scss";
import SocialMediaBtn from "../../Common/Buttons/SocialMediaBtn/SocialMediaBtn";
import DisabledModal from "./DisabledModal";
import { Formik } from "formik";
import { validateForm } from "../../../utils/validateForm";
import Input from "../../Common/Input/Input";
import InputWithMask from "../../Common/Input/InputWithMask";
import CustomSelect from "../../Common/Select/Select";
import { UploadFile } from "../../Common/UploadFile/UploadFile";
import Btn from "../../Common/Buttons/Btn/Btn";
import { useState } from "react";
import { createUserTC } from "../../../store/reducers/sign-reducer";
import { useDispatch } from "react-redux";
// import validateUploadFile from "../../../utils/validateUploadFile";

const Form = ({ isServerError, positions, t }) => {
  const dispatch = useDispatch();

  const [uploadFileName, setUploadFileName] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    position: "",
    upload: "",
  };

  return (
    <div className={s.formWrapper}>
      <div className={s.btnWrapper}>
        <SocialMediaBtn />
        <SocialMediaBtn variant="Google" />
      </div>

      {isServerError && <DisabledModal t={t} />}

      <Formik
        initialValues={initialValues}
        validationSchema={validateForm}
        onSubmit={(values, { resetForm }) => {
          // eslint-disable-next-line prefer-const
          let { name, email, phone, position, upload } = values;
          phone = phone.replace("(", "").replace(")", "").replace("-", "");
          dispatch(
            createUserTC({ name, email, phone, position, photo: upload })
          );

          // console.log("values: ", values);
          setUploadFileName("");
          resetForm(initialValues);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          // isSubmitting,
          setFieldValue,
          setFieldError,
          setFieldTouched,
          validateField,
          isValid,
          dirty,
          validateForm,
        }) => {
          // console.log("upload value: ", values.upload);
          // console.log('FormContainer render');
          // console.table([values, errors, touched]);
          // console.log("values: ", values);

          // const onBlurAnotherPhonesHandler = (e) => {
          //   const replaceValue = e.target.value
          //     .replace(/^[;, ]*/g, "")
          //     .replace(/[;,+ ]*$/g, "")
          //     .replace(/\s{2,}/g, " ");
          //   setFieldValue("anotherPhones", replaceValue);
          //   handleBlur(e);
          // };

          const onChangePhoneHandler = (e) => {
            // console.log(e);
            if (e.nativeEvent.inputType === "insertFromPaste") {
              // console.log(e.nativeEvent, 'input value');
              e.preventDefault();
              return;
            }
            handleChange(e);
          };

          const onPastePhoneHandler = (e) => {
            const pasteText = e.clipboardData.getData("Text");
            // console.log("onPaste", pasteText);
            // console.log(e.clipboardData.getData('Text'));
            const onlyNumbers = pasteText.replace(/[\s()+-]*/gm, "");
            // console.log(onlyNumbers);
            const last9 = onlyNumbers.slice(-9);
            setFieldValue("phone", last9);
          };

          return (
            <form className={s.form} onSubmit={handleSubmit}>
              <Input
                // required
                label={t("registration:label-name")}
                marginBottom={57}
                errorMessage={errors.name}
                touched={touched.name}
                helperText={t("registration:helper-name")}
                placeholder={t("registration:label-name")}
                n={128}
                value={values.name}
                name="name"
                onChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode=""
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <Input
                label={t("registration:label-email")}
                // required
                marginBottom={57}
                errorMessage={errors.email}
                touched={touched.email}
                helperText={t("registration:helper-email")}
                placeholder={t("registration:label-email")}
                n={128}
                value={values.email}
                name="email"
                onChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode="email"
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <InputWithMask
                label={t("registration:label-phone")}
                marginBottom={57}
                // required
                mask="+38(099)999-9999"
                helperText={t("registration:helper-phone")}
                errorMessage={errors.phone}
                touched={touched.phone}
                placeholder={t("registration:label-phone")}
                value={values.phone}
                maxLength={16}
                name="phone"
                onChange={onChangePhoneHandler}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                inputmode="tel"
                handleReset={handleReset}
                onPaste={onPastePhoneHandler}
                validateField={validateField}
                setFieldTouched={setFieldTouched}
              />

              <CustomSelect
                label={t("registration:label-position")}
                marginBottom={57}
                errorMessage={errors.position}
                name="position"
                positions={positions}
                setFieldValue={setFieldValue}
              />

              <UploadFile
                placeholder={t("registration:label-upload")}
                helperText={t("registration:helper-upload")}
                errorMessage={errors.upload}
                touched={touched.upload}
                name="upload"
                id="upload"
                value={values.upload}
                onChange={handleChange}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                uploadFileName={uploadFileName}
                setUploadFileName={setUploadFileName}
                validateField={validateField}
              >
                Upload
              </UploadFile>

              <div className={s.submitWrapper}>
                <Btn type="submit" disabled={!(dirty && isValid)}>
                  {t("header:sign-up")}
                </Btn>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
