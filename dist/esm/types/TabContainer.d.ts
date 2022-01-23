import React from "react";
import { StoryContext } from "@storybook/addons";
import { TabsType } from "./types/tabs";
import "./tabContainer.scss";
declare type TabContainerInput = {
    context: StoryContext;
    children: React.ReactNode;
    additionalHeaderElement?: Node;
    footerElement?: Node;
};
export default class TabContainer extends React.Component<TabContainerInput> {
    hasTabs: boolean;
    tabs: TabsType;
    constructor(props: TabContainerInput);
    isNotTabIframe(): boolean;
    render(): JSX.Element;
    renderDocPage(): JSX.Element;
    renderTabs(): JSX.Element;
    renderTabContent(): JSX.Element;
}
export {};
