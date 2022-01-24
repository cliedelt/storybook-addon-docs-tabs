## storybook-addon-docs-tabs

A [Storybook](https://github.com/storybooks/storybook) addon that adds tabs to the [Docs Addon](https://github.com/storybookjs/storybook/tree/next/addons/docs).

## Getting started

### 1. Install

```sh
npm install --save-dev storybook-addon-designs
# yarn add -D storybook-addon-designs
```

### 2. Add new Container to `.storybook/preview.js`

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

### 2. Hide Tab Stories from the sidebar in `.storybook/manager-head.html`

```html
<style>
  [id^="hidden"],
  [data-parent-id^="hidden"] {
    display: none !important;
  }
</style>
```

### 3. Add jsx in `.storybook/tsconfig.json`

**Optional: If you havent configured jsx**

```json
{
  "extends": "../tsconfig.app.json",
  "compilerOptions": {
    "jsx": "react"
  }
}
```

### 4. Add react preset in `.storybook/.babelrc`

**Optional: If you havent configured jsx**

```json
{
  "presets": [["@babel/react", { "runtime": "automatic" }]]
}
```

---

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
