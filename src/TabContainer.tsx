import React from "react";
import Header from "./components/Header";
import { StoryContext, AddonStore } from "@storybook/addons";
import { TabsType } from "./types/tabs";
import { tabConfigType } from "./types/tabConfig";
import TabFrame from "./components/TabFrame";
import kebabCase from "lodash/kebabCase";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabContainer.scss";
import { isNull } from "lodash";

type TabContainerInput = {
  context: StoryContext;
  children: React.ReactNode;
  additionalHeaderElement?: Node;
  footerElement?: Node;
};

export default class TabContainer extends React.Component<TabContainerInput> {
  hasTabs: boolean = false;
  tabs: TabsType = [];

  constructor(props: TabContainerInput) {
    super(props);
    let tabProperties = this.props.context?.parameters?.tabs;
    if (tabProperties && tabProperties.length > 0) {
      tabProperties.forEach((tab: tabConfigType) => {
        const docId = tab.mdx?.default?.id;
        if (!docId)
          console.error("Did you forget to set the id of the mdx page?");
        const storyId = kebabCase(tab.mdx?.default?.includeStories[0]);
        const url = `iframe.html?id=${
          docId + "--" + storyId
        }&viewMode=docs&tabIframe`;
        this.tabs.push({
          label: tab.label,
          url: url,
        });
      });
    }
  }

  isNotTabIframe() {
    const params = new URLSearchParams(window.location.search);
    return !params.has("tabIframe");
  }

  render() {
    return this.isNotTabIframe()
      ? this.renderDocPage()
      : this.renderTabContent();
  }
  renderDocPage() {
    return (
      <div>
        <Header
          title={this.props.context.title}
          description={this.props.context.description ? this.props.context.description : null}
          additionalElement={this.props.additionalHeaderElement}
        />
        {this.tabs.length > 0 ? this.renderTabs() : this.renderNormalDocPage()}
        {this.props.footerElement ? this.props.footerElement : null}
      </div>
    );
  }
  renderTabs() {
    return (
      <Tabs forceRenderTabPanel={false}>
        <TabList id="tabList">
          {this.tabs.map((tab, i) => {
            return <Tab key={i.toString()}>{tab.label}</Tab>;
          })}
        </TabList>
        <div>
          {this.tabs.map((tab, i) => {
            return (
              <TabPanel key={i.toString()}>
                <TabFrame url={tab.url} />
              </TabPanel>
            );
          })}
        </div>
      </Tabs>
    );
  }
  renderNormalDocPage() {
    return <div className="tab-addon-content">{this.props.children}</div>;
  }
  renderTabContent() {
    return <div className="tab-addon-tab-content">{this.props.children}</div>;
  }
}
