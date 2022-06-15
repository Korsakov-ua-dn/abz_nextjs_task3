import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";

const BasicTooltip = ({ children, title, openSettings, id }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (openSettings) {
      setTimeout(() => {
        const htmlElement = document.getElementById(id);
        setDisabled(
          htmlElement.offsetWidth < htmlElement.scrollWidth ||
            htmlElement.offsetHeight < htmlElement.scrollHeight
        );
        // setDisabled(htmlElement.offsetHeight < htmlElement.scrollHeight);

        // console.log(`html: ${htmlElement}`);
        // console.log(`offsetWidth: ${htmlElement.clientHeight}`);
        // console.log(`scrollWidth: ${htmlElement.scrollHeight}`);
      }, 50);
    }
  }, [openSettings]);

  const tooltipProps = {
    tooltip: {
      id: "tooltip", // можно повесить id
      sx: {
        bgcolor: "#232F34",
        color: "#FFFFFF",
        maxWidth: "320px",
        padding: "9px 16px",
        margin: "21px 16px 0 16px !important",
        fontFamily: "Asap, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "14px",
        letterSpacing: "normal",
        // "& .MuiTooltip-arrow": {
        //   color: "common.black",
        // },
      },
    },
  };

  return (
    <Tooltip
      disableHoverListener={!disabled}
      componentsProps={tooltipProps}
      title={title}
    >
      {children}
    </Tooltip>
  );
};

export default BasicTooltip;
