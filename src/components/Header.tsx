import React from "react";
import "!style-loader!css-loader!sass-loader!./header.scss";

export default function Header(props) {
  return (
    <div className="storybook_header_container">
      <div className="d-flex justify-content-between align-items-center storybook_header">
        <h2>{props.title}</h2>
        <a
          href="https://libri-gmbh.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=10046&issuetype=10004"
          className="report_link"
          target="_blank"
        >
          <label className="cta">
            <i className="material-icons-outlined icon">campaign</i>
            Report an issue
          </label>
        </a>
      </div>
    </div>
  );
}
