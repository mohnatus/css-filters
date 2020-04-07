const info = {
  opacity: {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity'
  },
  grayscale: {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale'
  },
  sepia: {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia'
  },
  blur: {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur'
  },
  saturate: {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate'
  },
  brightness: {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness'
  },
  contrast: {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast'
  },
  invert: {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert'
  },
  'hue-rotate': {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate'
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
  }),
  invert: createFilter('invert'),
  opacity: createFilter('opacity', { defaultValue: 100 }),
};
