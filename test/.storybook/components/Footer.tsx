import React from "react";
import "!style-loader!css-loader!sass-loader!./Footer.scss";

export default function Footer() {
  return (
    <div className="storybook_footer_container">
      <div className="storybook_footer">
        <h3>Feedback</h3>
        This could be your custom footer!
      </div>
    </div>
  );
}
