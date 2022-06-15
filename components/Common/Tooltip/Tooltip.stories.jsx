import React from "react";
import Tooltip from "./Tooltip";

export default {
  title: "Example/Tooltip",
  component: Tooltip,
};

const Template = function (args) {
  const { text } = args;

  const spanStyle = {
    display: "block",
    maxWidth: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: 200 }}>
      <Tooltip title={text} {...args}>
        <p style={spanStyle}>{text}</p>
      </Tooltip>
    </div>
  );
};

/*eslint-disable */
export const TooltipExample = Template.bind({});
TooltipExample.args = {
  text: "MaximilianMaximilian@gmail.com",
};
/* eslint-enable */
