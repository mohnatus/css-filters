const mdn = {
  opacity: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity',
  grayscale: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale',
  sepia: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia',
  blur: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur',
  saturate: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate',
  brightness: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness',
  contrast: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast',
  invert: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert',
  'hue-rotate': 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate',
};

function createFilter(name, params = {}) {
  const filter = {
    name,
    defaultValue: 0,
    min: 0,
    max: 100,
    unit: '%',
    step: 1,
    mdn: mdn[name],
    ...params,
  };
  return filter;
}

export const filters = {
  invert: createFilter('invert'),
  grayscale: createFilter('grayscale'),
  sepia: createFilter('sepia'),
  blur: createFilter('blur', { max: 10, step: 0.5, unit: 'px' }),
  saturate: createFilter('saturate', { max: 500, defaultValue: 100 }),
  brightness: createFilter('brightness', { max: 500, defaultValue: 100 }),
  contrast: createFilter('contrast', { max: 500, defaultValue: 100 }),
  hueRotate: createFilter('hue-rotate', {
    max: 360,
    unit: 'deg',
  }),
  opacity: createFilter('opacity', { defaultValue: 100 }),
};

export function filterCSS(filterName, filterValue) {
  const filter = filters[filterName]
  return `${filter.name}(${filterValue}${filter.unit})`
}

export function isDefaultValue(filterName, filterValue) {
  return filters[filterName].defaultValue === filterValue;
}
