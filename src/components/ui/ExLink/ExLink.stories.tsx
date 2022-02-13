import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ExLink } from "./index";

export default {
  title: "UI/ExLink",
  component: ExLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ExLink>;

const Template: ComponentStory<typeof ExLink> = (args) => <ExLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "https://github.com/",
  children: "GitHub",
};
