import { css } from 'styled-components';
import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import shade from 'polished/lib/color/shade';

const createMediaQuery = n => `@media screen and (min-width:${n})`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      },
    })
  );

const lineHeights = [1, 1.125, 1.25, 1.5];

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
};

// border-radius

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
// const emSize = sizes[label] / 16
// em breakpoints based on Rebass defaults
// const breakpoints = ['32em', '40em', '48em', '64em'];
export const breakpoints = ['32em', '40em', '48em', '64em'];
export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ['sm', 'md', 'lg', 'xl'];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);
console.log('theme_breakpoints', breakpoints);
export const sizes = {
  special: {
    sidebarWidth: 300,
    navbarHeight: 50,
  },
};

// Iterate through the sizes and create a media template
// / max-width: apply to all screen sizes equal to or narrower than _size
// / max-width: apply to all screen sizes equal to or wider than _size

export const mediaQueryMinWidthWrap = aliases.reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const space = [0, 4, 8, 16, 32, 64, 128];

export const font = `'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif`;

export const fontSizes = [12, 14, 16, 20, 24, 32, 48];

export const regular = 400;
export const bold = 600;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  regular,
  bold,
};

// color palette
const black = '#000';
const white = '#fff';
const text = '#001833';
const lightBlue = '#cdf';
const blue = '#007aff'; // primary
const darkBlue = '#049';
const lightGray = '#f6f8fa';
const borderGray = '#d1d6db';
const gray = '#687B8E'; // primary
const darkGray = '#364049';
const lightGreen = '#cec';
const green = '#0a0'; // secondary
const darkGreen = '#060';
const lightRed = '#fcc';
const red = '#c00'; // secondary
const darkRed = '#800';
const lightOrange = '#feb';
const orange = '#fa0'; // secondary
const darkOrange = '#a50';
const lightPurple = '#ecf';
const purple = '#70b'; // secondary
const darkPurple = '#407';

// COLORS for the NAV and Websites
const vision = '#FC3BA3';
const work = '#FCE89F';
const journal = '#9FFCA8';
const projects = '#9FFCF7';
const contact = '#9FAEFC';
const collective = '#C29FFC';
const shop = '#FC9FED';

const paleGrey = '#efefef';
const lightGrey = 'rgba(20, 20, 20, 0.1)';
const darkGrey = darken(0.05, '#282a36');
const grey = '#282a36';

const violetRed = 'rgb(219, 112, 147)';
const lightVioletRed = lighten(0.27, 'rgb(219, 112, 147)');

const gold = shade(0.9, 'rgb(243, 182, 97)');

// tints
const flatten = (name, colors) =>
  colors.reduce((a, b, i) => {
    const color = {
      [name + i]: {
        enumerable: true,
        get() {
          console.warn(
            `Priceline Design System Warning: Using numbered colors like ${[
              name + i,
            ]} will be deprecated in the next theme. Use light${name.charAt(0).toUpperCase() +
              name.slice(1)}, ${name} or dark${name.charAt(0).toUpperCase() + name.slice(1)} instead.`
          );
          return b;
        },
      },
    };
    return { ...a, ...color };
  }, {});

const blues = [lightBlue, lightBlue, blue, blue];
const grays = [lightGray, lightGray, gray, gray];
const greens = [lightGreen, lightGreen, green, green];
const reds = [lightRed, lightRed, red, red];
const oranges = [lightOrange, lightOrange, orange, orange];
const purples = [lightPurple, lightPurple, purple, purple];

const colors = {
  black,
  white,
  text,
  blue,
  lightBlue,
  darkBlue,
  gray,
  lightGray,
  borderGray,
  darkGray,
  green,
  lightGreen,
  darkGreen,
  red,
  lightRed,
  darkRed,
  orange,
  lightOrange,
  darkOrange,
  purple,
  lightPurple,
  darkPurple,
  blues,
  greens,
  reds,
  oranges,
  purples,
  paleGrey,
  lightGrey,
  darkGrey,
  grey,
  violetRed,
  lightVioletRed,
  gold,
  vision,
  work,
  journal,
  projects,
  contact,
  collective,
  shop,
};

const borders = [0, '1px solid', '2px solid'];
const shadows = [`0 1px 2px 0 ${colors.text}`, `0 1px 4px 0 ${colors.text}`];

Object.defineProperties(colors, {
  ...flatten('blue', blues),
  ...flatten('gray', grays),
  ...flatten('green', greens),
  ...flatten('red', reds),
  ...flatten('orange', oranges),
  ...flatten('purple', purples),
});

export { colors };

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 2, 6];
export const radius = 1;

export const maxContainerWidth = '1280px';

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`,
];

// animation duration
export const duration = {
  fast: 150,
  normal: 300,
  slow: 450,
  slowest: 600,
};

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)';
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)';
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)';

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
};

export const fonts = {
  font,
  bodyFont:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace: '"Operator Mono SSm A", "Operator Mono SSm B", monospace',
  get headerFont() {
    return `"Avenir Next", ${this.bodyFont}`;
  },
};

const fontFamily = fonts.bodyFont;

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  lineHeights,
  letterSpacings,
  borders,
  shadows,
  fontFamily,
};

export default theme;

/*
// theme.js

// breakpoint values
// any array length works with styled-system
const breakpoints = ['40em', '52em', '64em'];

const colors = {
  main: 'rgba(61, 90, 128, 1)',
  second: 'rgba(152, 193, 217, 1)',
  third: 'rgba(224, 251, 252, 1)',
  fourth: 'rgba(238, 108, 77, 1)',
  fifth: 'rgba(41, 50, 65, 1)',
  primary: '#d02e77',
  bg: 'white',
  dark: 'rgba(0, 0, 0, 0.9)',
  default: 'rgba(0, 0, 0, 0.7)',
  light: 'rgba(0, 0, 0, 0.6)',
  ultraLight: 'rgba(0, 0, 0, 0.25)',
  text: '#024',
  blue: '#07c',
  // nested objects work as well
  // arrays can be used for scales of colors
  gray: ['#333', '#666', '#999', '#ccc', '#eee', '#f6f6f6'],
};

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

// typographic scale
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

// for any scale, either array or objects will work
const lineHeights = [1, 1.125, 1.25, 1.5];

const fontWeights = {
  normal: 500,
  bold: 700,
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
};

// border-radius
const radii = [0, 2, 4, 8];

const borders = [0, '1px solid', '2px solid'];

const shadows = [`0 1px 2px 0 ${colors.text}`, `0 1px 4px 0 ${colors.text}`];

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
// const emSize = sizes[label] / 16
// em breakpoints based on Rebass defaults
const sizes = {
  desktop: 80,
  laptop: 64,
  tablet: 48,
  phone: 32,
};

// Iterate through the sizes and create a media template
// / max-width: apply to all screen sizes equal to or narrower than _size
// / max-width: apply to all screen sizes equal to or wider than _size

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});


// Pass media template via theme object and Styled Components ThemeProvider

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
  transitionTime: '0.5s',
  fontSmall: '0.9rem',
  media,
};

export default theme;
*/

// for any scale, either array or objects will work
