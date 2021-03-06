import React from "react";
import "./header.scss";

export default function Header(props: {
  title: string;
  additionalElement?: Node;
}) {
  return (
    <div className="storybook_header_container">
      <div className="storybook_header">
        <h1>{props.title}</h1>
        {props.additionalElement}
      </div>
    </div>
  );
}
