import * as React from "react";
import { variables } from "../../../utils/variables";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Checked from "../../../images/checkbox/tick.svg";
import UnChecked from "../../../images/checkbox/unChecked.svg";

const CustomCheckbox = ({ label, disabled }) => (
  <FormGroup>
    <FormControlLabelStyled
      disabled={disabled}
      control={
        <Checkbox
          defaultChecked
          icon={<UnChecked />}
          checkedIcon={<Checked />}
          disableRipple
        />
      }
      label={label}
    />
  </FormGroup>
);

export default CustomCheckbox;

const FormControlLabelStyled = styled(FormControlLabel)`
  //background-color: red;
  height: 36px;

  & .MuiCheckbox-root {
    width: 30px;
    height: 30px;
    padding: 0 !important;

    &:hover {
      background-color: rgba(126, 126, 126, 0.1);
    }

    &:active {
      background-color: rgba(126, 126, 126, 0.34);
    }
  }

  & .MuiCheckbox-root.Mui-focusVisible {
    background-color: rgba(126, 126, 126, 0.24);
  }

  //effects if checked
  & .Mui-checked {
    &:hover {
      background-color: rgba(0, 189, 211, 0.1);
    }

    &:active {
      background-color: rgba(0, 189, 211, 0.34);
    }
  }

  & .Mui-checked.MuiCheckbox-root.Mui-focusVisible {
    background-color: rgba(0, 189, 211, 0.24);
  }

  // label
  & .MuiTypography-root {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: normal;
    padding-left: 9px;
  }

  // disabled
  & .MuiCheckbox-root.Mui-disabled {
    & svg path {
      stroke: ${variables.disableBtn};
    }
  }

  & .Mui-checked.Mui-disabled {
    & svg path {
      stroke: none;
    }

    & svg path:nth-child(1) {
      fill: ${variables.disableBtn};
    }
  }

  & .MuiTypography-root.Mui-disabled {
    color: rgba(180, 180, 180, 0.87);
  }

  & .Mui-checked ~ .MuiTypography-root.Mui-disabled {
    color: ${variables.textColor};
  }

  @media (max-width: 1024px) {
    height: 48px;
  }
`;
