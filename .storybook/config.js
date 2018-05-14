import React from "react";
import {addDecorator, configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { Provider } from "rebass";
// import { MemoryRouter } from "react-router-dom";

setOptions({
  name: "Example",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false
});
// Include any global CSS (standard CSS, not CSS Modules)
// By importing your application's CSS here, we ensure it's included
// for each story
// import '../src/styles/index.css';

// A decorator is a way to wrap a story with a common set of component(s).
// Here we add the theme decorator to incoporate the Rebass and our custom theme
const ThemeDecorator = storyFn => <Provider>{storyFn()}</Provider>;
addDecorator(ThemeDecorator);

// Stories loader
// Loading stories dynamically
// https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
const req = require.context("../src/components", true, /.stories.[jt]sx?$/);
// function loadStories() {
//     req.keys().forEach(req);
// }
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// Wrap all stories in decorator
// addDecorator(story => (
//   <MemoryRouter>
//       {story()}
//   </MemoryRouter>
// ));

// Initialize react-storybook
configure(loadStories, module);
