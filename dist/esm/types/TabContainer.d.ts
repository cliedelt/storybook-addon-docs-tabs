import React from "react";
import { StoryContext } from "@storybook/addons";
declare type TabContainerInput = {
    context: StoryContext;
    children: React.ReactNode;
};
export default class TabContainer extends React.Component<TabContainerInput> {
    id: string;
    url: string;
    loadEvent: Event;
    iframeElement: HTMLIFrameElement | null;
    constructor(props: TabContainerInput);
    componentDidMount(): void;
    setIFrameHeight(): void;
    render(): JSX.Element;
}
export {};
