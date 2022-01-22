import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StoryContext } from "@storybook/addons";
import { TabsType } from "./types/tabs";
import { tabConfigType } from "./types/tabConfig";
import TabFrame from "./components/TabFrame";
import kebabCase from "lodash/kebabCase";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabContainer.scss";

type TabContainerInput = {
  context: StoryContext;
  children: React.ReactNode;
};

export default class TabContainer extends React.Component<TabContainerInput> {
  hasTabs: boolean = false;
  tabs: TabsType = [];

  constructor(props: TabContainerInput) {
    super(props);
    let tabProperties = this.props.context?.parameters?.tabs;

    if (tabProperties && tabProperties.length > 0) {
      tabProperties.forEach((tab: tabConfigType) => {
        const docId = tab.mdx?.default?.id,
          storyId = kebabCase(tab.mdx?.default?.includeStories[0]),
          url = `iframe.html?id=${docId + "--" + storyId}&viewMode=docs`;
        this.tabs.push({
          label: tab.label,
          url: url,
        });
      });
    }
  }

  render() {
    return (
      <div>
        {this.tabs.length ? <Header title={this.props.context.title} /> : null}
        <div
          style={
            this.tabs.length
              ? {
                  maxWidth: "1000px",
                  margin: "auto",
                  padding: "4rem 20px",
                }
              : undefined
          }
        >
          {this.props.children}

          {this.tabs.length > 0 ? (
            <Tabs forceRenderTabPanel={true}>
              <TabList>
                {this.tabs.map((tab, i) => {
                  return <Tab key={i.toString()}>{tab.label}</Tab>;
                })}
              </TabList>

              {this.tabs.map((tab, i) => {
                return (
                  <TabPanel key={i.toString()}>
                    <TabFrame url={tab.url} />
                  </TabPanel>
                );
              })}
            </Tabs>
          ) : null}
        </div>
        {this.tabs.length ? <Footer /> : null}
      </div>
    );
  }
}
