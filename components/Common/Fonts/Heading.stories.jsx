import React from "react";
import Heading from "./Heading";
import Box from "@mui/material/Box";

export default {
  title: "Example/Heading",
  component: Heading,
};

const Template = function (args) {
  return (
    <Box sx={{ width: "100%", maxWidth: 704 }}>
      <Heading {...args} />
    </Box>
  );
};

/*eslint-disable */
export const HeadingExample = Template.bind({});
HeadingExample.args = {
  text: "The five boxing wizards jump quickly. Pack my box with five dozen liquor jugs. The jay, pig, fox, zebra and my wolves quack",
  variant: "h1",
  bold: false,
};

export const SubtitleExample = Template.bind({});
SubtitleExample.args = {
  text: "The five boxing wizards jump quickly",
  variant: "subtitle1",
};

export const BodyExample = Template.bind({});
BodyExample.args = {
  text: "The five boxing wizards jump quickly",
  variant: "body1",
  bold: false,
};
/* eslint-enable */
