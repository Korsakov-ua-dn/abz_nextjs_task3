import React, { useState } from "react";
import UploadFile from "./UploadFile";

export default {
  title: "Example/UploadFile",
  component: UploadFile,
  argTypes: {
    // onClick: { action: 'clicked' },
  },
};

const Template = function (args) {
  const [value, setValue] = useState("");
  return (
    <UploadFile
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      {...args}
    />
  );
};

/*eslint-disable */
export const UploadFileExample = Template.bind({});
UploadFileExample.args = {
  errorMessage: "",
  disable: false,
  helperText: "Helper text",
  id: 1,
  children: "Upload",
  placeholder: "Upload your photo",
};
/* eslint-enable */
