import React from "react";
import { StorybookThemeProvider } from "../src/components/ThemeProvider";
import type { Preview } from "@storybook/react";
import {
  ThemeDefaultBackground,
  ToggleThemeButton,
} from "../src/stories/ThemeUtility";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#FFFFFF",
        },
        {
          name: "dark",
          value: "#121212",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <StorybookThemeProvider>
        <ThemeDefaultBackground>
          <ToggleThemeButton />
          <Story />
        </ThemeDefaultBackground>
      </StorybookThemeProvider>
    ),
  ],
};

export default preview;
