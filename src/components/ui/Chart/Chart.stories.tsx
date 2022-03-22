import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Chart } from "./index";

export default {
  title: "UI/Chart",
  component: Chart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {};
