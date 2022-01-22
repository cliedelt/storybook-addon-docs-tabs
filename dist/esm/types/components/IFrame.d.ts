import React from "react";
declare type IFrameInput = {
    url: string;
};
export default class IFrame extends React.Component<IFrameInput> {
    iframeElement: HTMLIFrameElement | null;
    constructor(props: IFrameInput);
    setIFrameHeight(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
