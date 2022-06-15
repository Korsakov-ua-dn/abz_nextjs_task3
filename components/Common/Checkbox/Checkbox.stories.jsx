import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
};

const Template = function (args) {
  return (
    <div>
      <Checkbox label="Save" {...args} />
    </div>
  );
};

export const CheckboxExample = Template.bind({});
CheckboxExample.args = {
  disabled: false,
};
