import React from "react";
import "./tabframe.scss";

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
      if (docsRootElement) {
        this.iframeElement.height = docsRootElement.offsetHeight + "px";
        docsRootElement.classList.add("iframe");
      }
    }
  }

  componentDidMount(): void {
    if (this.iframeElement) {
      if (
        this.iframeElement.contentDocument &&
        this.iframeElement.contentDocument.readyState === "complete" &&
        this.iframeElement.contentWindow &&
        this.iframeElement.contentWindow.location.toString() !== "about:blank"
      ) {
        this.addObserver();
      }
      this.iframeElement.onload = () => {
        this.addObserver();
      };
      this.iframeElement.onresize = () => {
        this.addObserver();
      };
    }
  }
  addObserver() {
    this.setIFrameHeight();
    if (
      !this.observer &&
      this.iframeElement &&
      this.iframeElement.contentDocument
    ) {
      console.log("SET OBSERVE");
      this.observer = new IntersectionObserver(() => {
        console.log("SET HEIGHT");
        this.setIFrameHeight();
      });
      this.observer.observe(this.iframeElement.contentDocument.body);
    }
  }
  componentWillUnmount() {
    if (this.observer) this.observer.disconnect();
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
