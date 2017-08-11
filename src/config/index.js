const SPACING_BASE = 12;

export default {
  breakpoint: {
    small: '@media only screen and (max-width : 768px)',
    medium: '@media only screen and (min-width : 768px)',
    large: '@media only screen and (min-width : 1224px)',
  },
  spacing: {
    ONE: `${SPACING_BASE}px`,
    ONE_AND_HALF: `${1.5 * SPACING_BASE}px`,
    TWO: `${2 * SPACING_BASE}px`,
  },
};
