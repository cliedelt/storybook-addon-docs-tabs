import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import { StoryContext, addons } from "@storybook/addons";

type TabContainerInput = {
  context: StoryContext;
  children: React.ReactNode;
};

export default class TabContainer extends React.Component<TabContainerInput> {
  id: string;
  url: string;
  loadEvent = new Event("tabLoaded");
  iframeElement: HTMLIFrameElement;

  constructor(props) {
    super(props);
    let tabProperties = this.props.context?.parameters?.tabs;

    if (tabProperties && tabProperties.length > 0) {
      this.id =
        tabProperties[0].mdx?.default?.id +
        "--" +
        tabProperties[0].mdx?.default?.includeStories[0];
      this.url = `iframe.html?id=${this.id}&viewMode=docs`;
    }
  }

  componentDidMount(): void {
    if (this.id) {
      this.iframeElement.onload = () => {
        this.iframeElement.height =
          this.iframeElement.contentDocument.getElementById("docs-root")
            .offsetHeight + "px";
      };
      this.iframeElement.onresize = () => {
        this.iframeElement.height =
          this.iframeElement.contentDocument.getElementById("docs-root")
            .offsetHeight + "px";
      };
    }
  }

  render() {
    return (
      <div>
        {this.id ? <Header title={this.props.context.title} /> : null}
        <div
          style={
            this.id
              ? {
                  maxWidth: "1000px",
                  margin: "auto",
                  padding: "4rem 20px",
                }
              : null
          }
        >
          {this.props.children}
          {this.id ? (
            <iframe
              ref={(elem) => (this.iframeElement = elem)}
              src={this.url}
              scrolling="no"
              seamless
              frameBorder="0"
              width="100%"
            ></iframe>
          ) : null}
        </div>
        {this.id ? <Footer /> : null}
      </div>
    );
  }
}
