import React from "react";
import CustomSelect from "./Select";

export default {
  title: "Example/CustomSelect",
  component: CustomSelect,
};

const Template = function (args) {
  return <CustomSelect maxLength={30} {...args} />;
};

/*eslint-disable */
export const Select = Template.bind({});
Select.args = {
  disabled: false,
  error: false,
  label: "Name",
};
/* eslint-enable */
