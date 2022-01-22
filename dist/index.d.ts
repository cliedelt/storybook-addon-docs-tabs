import React from 'react';
import { StoryContext } from '@storybook/addons';

declare type TabsType = {
    label: string;
    url: string;
}[];

declare type TabContainerInput = {
    context: StoryContext;
    children: React.ReactNode;
};
declare class TabContainer extends React.Component<TabContainerInput> {
    hasTabs: boolean;
    tabs: TabsType;
    constructor(props: TabContainerInput);
    render(): JSX.Element;
}

export { TabContainer };
