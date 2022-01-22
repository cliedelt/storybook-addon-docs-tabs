import React from "react";
declare type IFrameInput = {
    url: string;
};
export default class TabFrame extends React.Component<IFrameInput> {
    iframeElement: HTMLIFrameElement | null;
    observer: IntersectionObserver;
    constructor(props: IFrameInput);
    setIFrameHeight(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
