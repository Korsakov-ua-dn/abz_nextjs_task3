import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Heading = ({ text, variant, bold }) => {
  const HeadingStyled = styled(Typography)`
    font-style: normal;
    font-weight: ${bold ? "bold" : 400};
    letter-spacing: normal;
    //display: -webkit-box;
    //-webkit-box-orient: vertical;
    //-webkit-line-clamp: 2;
    //overflow: hidden;

    &.MuiTypography-h1 {
      font-family: Nunito, sans-serif;
      font-size: 60px;
      line-height: 64px;
    }

    &.MuiTypography-h2 {
      font-family: Nunito, sans-serif;
      font-size: 38px;
      line-height: 40px;
    }

    &.MuiTypography-h3 {
      font-family: Nunito, sans-serif;
      font-size: 28px;
      line-height: 40px;
    }

    &.MuiTypography-subtitle1 {
      font-family: Asap, sans-serif;
      font-size: 12px;
      line-height: 14px;
    }

    &.MuiTypography-body1 {
      font-family: Asap, sans-serif;
      font-size: 18px;
      line-height: 26px;
    }

    &.MuiTypography-body2 {
      font-family: Asap, sans-serif;
      font-size: 16px;
      line-height: 26px;
    }

    @media (max-width: 1024px) {
      &.MuiTypography-h2 {
        font-family: Nunito, sans-serif;
        font-size: 18px;
        line-height: 26px;
      }
    }
  `;
  return (
    <HeadingStyled variant={variant} component="div">
      {text}
    </HeadingStyled>
  );
};

export default Heading;
