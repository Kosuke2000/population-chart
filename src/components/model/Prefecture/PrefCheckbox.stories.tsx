import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockPref } from "@/mocks/Prefecture";

import { PrefCheckbox } from "./PrefCheckbox";

export default {
  title: "Model/Prefecture/PrefCheckbox",
  component: PrefCheckbox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PrefCheckbox>;

const Template: ComponentStory<typeof PrefCheckbox> = (args) => (
  <PrefCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  prefecture: mockPref,
};
