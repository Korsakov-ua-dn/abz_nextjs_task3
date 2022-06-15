import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { variables } from "../../../utils/variables";
import En from "../../../images/header/En.svg";
import De from "../../../images/header/De.svg";
// import s from "./Select.module.scss";
// import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";

const LangSelect = ({ currentLang }) => {
  const [position, setPosition] = React.useState(currentLang);

  // const { t } = useTranslation();
  const router = useRouter();
  // const matches = useMediaQuery("(min-width:1024px)");

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 64,
        maxWidth: 92,
        marginTop: 11,
        marginLeft: 3,
        backgroundColor: "#FFFFFF",
      },
    },
  };

  const handleChange = (event) => {
    setPosition(event.target.value);
    if (event.target.value === "En") {
      router.push(router.pathname, router.pathname, { locale: "en" });
    } else {
      router.push(router.pathname, router.pathname, { locale: "de" });
    }
  };

  return (
    <FormControlStyled>
      <Select
        id="lang"
        value={position}
        onChange={handleChange}
        MenuProps={MenuProps}
        // defaultValue={}
      >
        <MenuItemStyled value="En">
          <En />
          <ListItemText primary="En" />
        </MenuItemStyled>

        <MenuItemStyled value="De">
          <De />
          <ListItemText primary="De" />
        </MenuItemStyled>

      </Select>
    </FormControlStyled>
  );
};

const MenuItemStyled = styled(MenuItem)`
  padding: 0 !important;
  min-height: 32px !important;
  background-color: transparent !important;
  // фикс подсветки поля по умолчанию и ховер

  & svg {
    margin: 0 7px 0 17px;
    z-index: 1;
  }

  // checked
  &.Mui-selected {
    cursor: auto;
    pointer-events: none; // блок повторный клик выбранного элемента
    & div::before {
      content: "";
      width: 86px;
      height: 26px;
      position: absolute;
      left: 3px;
      top: 3px;
      background-color: ${variables.secondaryColor} !important;
      border-radius: 4px;
    }

    .MuiTypography-root {
      color: white !important;
      z-index: 1;
      position: relative;
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
      z-index: 10 !important;
    }
  }
`;

const FormControlStyled = styled(FormControl)`
  width: 92px;
  margin-right: 10px;

  & .MuiTypography-root {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: normal;
    color: ${variables.textColor};
  }

  // ширина и позиционирование svg и текста
  & .MuiSelect-select {
    padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  // ширина и позиционирование svg и текста
  & .MuiListItemText-root {
    margin: 0 0 0 6px !important;
    max-width: 46px;

    & .MuiTypography-root {
      width: 30px;
    }
  }

  // arrow
  & .MuiOutlinedInput-root {
    & .MuiSvgIcon-root path {
      fill: ${variables.textColor};
    }
  }

  // border
  & fieldset {
    border: none;
  }
`;

export default LangSelect;
