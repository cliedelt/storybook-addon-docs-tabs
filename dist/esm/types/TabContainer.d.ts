import React from "react";
import { StoryContext } from "@storybook/addons";
import { TabsType } from "./types/tabs";
import "./tabContainer.scss";
declare type TabContainerInput = {
    context: StoryContext;
    children: React.ReactNode;
};
export default class TabContainer extends React.Component<TabContainerInput> {
    hasTabs: boolean;
    tabs: TabsType;
    constructor(props: TabContainerInput);
    render(): JSX.Element;
}
export {};
