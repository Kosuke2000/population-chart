---
name: "ui-component"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter component name"
---

# `src/components/ui/{{ inputs.name | pascal }}/index.tsx`

```ts
import { FC } from "react";

interface {{ inputs.name | pascal }}Props {
  className?: string;
}

export const {{ inputs.name | pascal }}: FC<{{ inputs.name | pascal }}Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
```

# `src/components/ui/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { {{ inputs.name | pascal }} } from "./index";

export default {
  title: "UI/{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }},
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

const Template: ComponentStory<typeof {{ inputs.name | pascal }}> = (args) => (
  <{{ inputs.name | pascal }} {...args} />
);

export const Default = Template.bind({});
Default.args = {};
```
