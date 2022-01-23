import { DocsContainer } from "@storybook/addon-docs/blocks";
import { TabContainer } from "storybook-addon-docs-tabs";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const parameters = {
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <TabContainer
          context={context}
          footerElement={<Footer />}
          additionalHeaderElement={<Header />}
        >
          {children}
        </TabContainer>
      </DocsContainer>
    ),
  },
};
