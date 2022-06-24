import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { styled } from "@mui/material/styles";
import { variables } from "../../../utils/variables";
import s from "./Select.module.scss";
import { useMediaQuery } from "@mui/material";

const ITEM_HEIGHT = 32;

const CustomSelect = ({
  label,
  marginBottom,
  disabled,
  error,
  positions,
  setFieldValue,
}) => {
  // debugger
  const [position, setPosition] = React.useState("");
  const matches = useMediaQuery("(min-width:1024px)");
  const totalItems = matches ? 7 : 3;
  // const maxWidth = useMediaQuery("(max-width:600px)");

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * totalItems,
        // minWidth: 320,
        // maxWidth: maxWidth ? 320 : 352,
        marginTop: position ? -34 : -29,
        marginLeft: -6,
        backgroundColor: "#eceded",
      },
    },
  };

  const handleChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div style={{ marginBottom: marginBottom }} className={s.wrapper}>
      <FormControlStyled error={error} disabled={disabled}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={position}
          label={label}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {positions.map((p) => (
            <MenuItemStyled key={p.id} value={p.name}>
              <ListItemText
                primary={p.name}
                onClick={() => setFieldValue("position", p.id)}
              />
            </MenuItemStyled>
          ))}
        </Select>
        {error && !disabled && <FormHelperText>Helper text</FormHelperText>}
      </FormControlStyled>
    </div>
  );
};

const MenuItemStyled = styled(MenuItem)`
  padding: 0 4px !important;
  min-height: 32px !important;

  // фикс подсветки поля по умолчанию и ховер
  background-color: transparent !important;

  & div {
    padding: 0 8px 0 26px;

    &:hover {
      background-color: ${variables.secondaryColor} !important;
      border-radius: 4px;

      & .MuiTypography-root {
        color: white;
      }
    }
  }

  // checked
  &.Mui-selected {
    cursor: auto;
    pointer-events: none; // блок повторный клик выбранного элемента
    & div span:before {
      content: url("https://test2022-oleg-k2.abzdev2.com/images/checkSelect.svg");
      display: block;
      width: 9px;
      height: 8px;
      position: absolute;
      left: 12px;
      top: 2px;
    }
  }

  & .MuiListItemText-root {
    & .MuiTypography-root {
      font-family: "Asap", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: normal;
      color: ${variables.textColor};
      overflow: hidden;
    }
  }
`;

const FormControlStyled = styled(FormControl)`
  max-width: 360px;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 328px;
  }

  & .MuiListItemText-root {
    overflow: hidden;
    padding-left: 16px;
  }

  & .MuiTypography-root {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: normal;
    text-align: left;
    color: ${variables.textColor};
    // -webkit-box-shadow: inset 0 0 0 50px ${variables.backgroundColor}; /* накладываеть тень поверх инпута т.к. с автозполнением из браузера прилетают другие стили*/
    // -webkit-text-fill-color: ${variables.textColor};
  }

  & .MuiSelect-select {
    padding: 0;
  }

  & .MuiOutlinedInput-root {
    height: 54px;

    & fieldset legend span {
      font-family: "Asap", sans-serif;
      font-size: 12px;
      line-height: 14px;
      font-style: normal;
      font-weight: normal;
      letter-spacing: normal;
    }
  }

  // border
  & fieldset {
    border: 1px solid ${variables.enabledBorder} !important;
  }

  &:hover {
    fieldset {
      border: 1px solid ${variables.textColor} !important;
    }
  }

  & .Mui-focused {
    & fieldset {
      border: 2px solid ${variables.secondaryColor} !important;
    }
  }

  & .Mui-error fieldset {
    border: 2px solid ${variables.errorColor} !important;
  }

  & .Mui-disabled fieldset {
    border: 1px solid ${variables.enabledBorder} !important;
  }

  // label
  & .MuiInputLabel-root {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    color: ${variables.labelColor};
  }

  & .MuiInputLabel-shrink {
    font-size: 12px;
    line-height: 14px;
    transform: translate(16px, -7px) scale(1);
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${variables.secondaryColor};
  }

  & .MuiInputLabel-root.Mui-error {
    color: ${variables.errorColor};
  }

  & .MuiInputLabel-root.Mui-disabled {
    color: ${variables.labelColor};
  }

  & .MuiFormHelperText-root.Mui-error {
    font-family: "Asap", sans-serif;
    letter-spacing: normal;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: ${variables.errorColor} !important;
    margin: 4px 16px 0;
  }

  // svg icon
  & .MuiSvgIcon-root path {
    fill: ${variables.labelColor};
  }
  & .MuiSvgIcon-root.Mui-disabled path {
    fill: ${variables.disableBorder};
  }
`;

export default CustomSelect;
