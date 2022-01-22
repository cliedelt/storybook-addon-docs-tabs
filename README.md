Your `.storybook/manager-head.html`

```html
<style>
  [id^="hidden"],
  [data-parent-id^="hidden"] {
    display: none !important;
  }
</style>
```

Your `.storybook/preview.js`

```js
import { DocsContainer } from "@storybook/addon-docs/blocks";
import TabContainer from "../src/TabContainer";

export const parameters = {
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <TabContainer context={context}>{children}</TabContainer>
      </DocsContainer>
    ),
  },
};
```

Your `.storybook/tsconfig.json`

```json
{
  "extends": "../tsconfig.app.json",
  "compilerOptions": {
    "jsx": "react"
  }
}
```

Your `.storybook/.babelrc`

```json
{
  "presets": [["@babel/react", { "runtime": "automatic" }]]
}
```

Your `.storybook/preview-head.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .sbdocs.sbdocs-wrapper {
        padding: 0px;
      }
      .sbdocs.sbdocs-content {
        max-width: none;
      }
    </style>
  </head>
  <body></body>
</html>
```
