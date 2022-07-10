import React from "react";
import s from "./UploadFile.module.scss";

const UploadFile = ({
  disable,
  errorMessage,
  touched,
  id,
  // uploadFileName,
  // setUploadFileName,
  children,
  placeholder,
  marginBottom,
  helperText,
  // value,
  // onChange,
  setFieldValue,
  setFieldTouched,
  uploadFileName,
  setUploadFileName,
  // validateField,
}) => {
  // console.log("Render Upload file");
  // console.log("err: ", errorMessage);

  const setName = (e) => {
    e.target.files[0]
      ? setUploadFileName(e.target.files[0].name)
      : setUploadFileName("");
  };

  const labelClassName = `${s.label} ${touched && errorMessage && s.error} ${
    disable && s.disable
  }`;
  const textareaWrapper = `${s.textareaWrapper} ${
    touched && errorMessage && s.error
  } ${disable && s.disable}`;
  const helperTextClassName = `${s.helperText} ${
    touched && errorMessage && s.error
  } ${disable && s.disable}`;

  const handleOnChange = (e) => {
    !touched && setFieldTouched("upload", true);
    // console.log("change");
    // setFieldTouched("upload", true);
    setFieldValue("upload", e.target.files[0]);
    // validateField("upload");

    // console.log("onChange", e.target.files[0]);
    // validateUploadFile(e.target.files).then((res) => {
    //   // console.log("res: ", res);
    //   if (res) {
    //     setFieldError("upload", res);
    //   }
    // });

    setName(e);
  };

  return (
    <div className={s.wrapper} style={{ marginBottom: marginBottom }}>
      <input
        className={s.input}
        type="file"
        accept="image/jpeg"
        id={id}
        onChange={handleOnChange}
        // onClick={(e) => e.target.focus}
        // onBlur={() => !touched && setFieldTouched("upload", true)}
        disabled={disable}
      />
      <label className={labelClassName} htmlFor={id}>
        <span>{children}</span>
      </label>
      <div className={textareaWrapper}>
        <input
          className={s.textarea}
          placeholder={placeholder}
          value={uploadFileName}
          readOnly
        />
      </div>
      <span className={helperTextClassName}>
        {(touched && errorMessage) || helperText}
      </span>
    </div>
  );
};

export default React.memo(UploadFile);
