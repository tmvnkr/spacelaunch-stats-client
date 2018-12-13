export const size = {
  huge: '1200px',
  large: '992px',
  medium: '768px',
  small: '576px'
};
export const device = {
  mobile: `(min-width: ${size.small})`,
  tablet: `(min-width: ${size.medium})`,
  laptop: `(min-width: ${size.large})`,
  desktop: `(min-width: ${size.huge})`
};
