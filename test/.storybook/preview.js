import { DocsContainer } from "@storybook/addon-docs/blocks";
import { TabContainer } from "storybook-addon-docs-tabs";

export const parameters = {
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <TabContainer context={context}>{children}</TabContainer>
      </DocsContainer>
    ),
  },
};
