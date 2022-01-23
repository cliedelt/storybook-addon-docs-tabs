import React from "react";

type IFrameInput = {
  url: string;
};

export default class TabFrame extends React.Component<IFrameInput> {
  iframeElement!: HTMLIFrameElement | null;
  observer!: IntersectionObserver;

  constructor(props: IFrameInput) {
    super(props);
  }

  setIFrameHeight() {
    if (this.iframeElement) {
      let docsRootElement =
        this.iframeElement.contentDocument?.getElementById("docs-root");
      if (docsRootElement)
        this.iframeElement.height = docsRootElement.offsetHeight + "px";
    }
  }

  componentDidMount(): void {
    console.log("Init Iframe with url: ", this.props.url);
    if (this.iframeElement) {
      this.iframeElement.onload = () => {
        this.setIFrameHeight();
      };
      this.iframeElement.onresize = () => {
        this.setIFrameHeight();
      };
      if (!this.observer) {
        this.observer = new IntersectionObserver(() => {
          this.setIFrameHeight();
        });
        this.observer.observe(this.iframeElement);
      }
    }
  }
  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    return (
      <iframe
        ref={(elem) => (this.iframeElement = elem)}
        src={this.props.url}
        scrolling="no"
        seamless
        frameBorder="0"
        width="100%"
      ></iframe>
    );
  }
}
