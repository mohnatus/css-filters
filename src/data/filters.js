const info = {
  opacity: {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity'
  },
  grayscale: {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale'
  },
  sepia: {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia'
  },
  blur: {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur'
  },
  saturate: {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate'
  },
  brightness: {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness'
  },
  contrast: {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast'
  },
  invert: {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert'
  },
  'hue-rotate': {
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate'
  },
};

function createFilter(name, params = {}) {
  const filter = {
    name,
    defaultValue: 0,
    min: 0,
    max: 100,
    unit: '%',
    step: 1,
    shape: 'linear',
    info: info[name],
    css(value) {
      return `${this.name}(${value}${this.unit})`;
    },
    ...params,
  };
  return filter;
}

export const filters = {
  grayscale: createFilter('grayscale'),
  sepia: createFilter('sepia'),
  blur: createFilter('blur', { max: 10, step: 0.5, unit: 'px' }),
  saturate: createFilter('saturate', { max: 500, defaultValue: 100 }),
  brightness: createFilter('brightness', { max: 500, defaultValue: 100 }),
  contrast: createFilter('contrast', { max: 500, defaultValue: 100 }),
  hueRotate: createFilter('hue-rotate', {
    max: 360,
    unit: 'deg',
    shape: 'circular',
  }),
  invert: createFilter('invert'),
  opacity: createFilter('opacity', { defaultValue: 100 }),
};
