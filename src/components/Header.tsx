import React from "react";
import "./header.scss";

export default function Header(props: {
  title: string;
  additionalElement?: Node;
}) {
  return (
    <div className="storybook_header_container">
      <div className="storybook_header">
        <h2>{props.title}</h2>
        {props.additionalElement}
      </div>
    </div>
  );
}
