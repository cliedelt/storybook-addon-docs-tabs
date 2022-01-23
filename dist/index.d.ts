import React from 'react';
import { StoryContext } from '@storybook/addons';

declare type TabsType = {
    label: string;
    url: string;
}[];

declare type TabContainerInput = {
    context: StoryContext;
    children: React.ReactNode;
    additionalHeaderElement?: Node;
    footerElement?: Node;
};
declare class TabContainer extends React.Component<TabContainerInput> {
    hasTabs: boolean;
    tabs: TabsType;
    constructor(props: TabContainerInput);
    isNotTabIframe(): boolean;
    render(): JSX.Element;
    renderDocPage(): JSX.Element;
    renderTabs(): JSX.Element;
    renderTabContent(): JSX.Element;
}

export { TabContainer };
