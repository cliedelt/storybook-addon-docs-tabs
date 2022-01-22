import { DocsContainer } from "@storybook/addon-docs/blocks";
import TabContainer from "../src/TabContainer";

export const parameters = {
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <TabContainer context={context}>{children}</TabContainer>
      </DocsContainer>
    ),
  },
};
