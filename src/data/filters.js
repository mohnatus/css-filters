const info = {
  opacity: 'Прозрачность',
  grayscale: 'Оттенки серого',
  sepia: 'Сепия',
  blur: 'Размытие',
  saturate: 'Насыщенность',
  brightness: 'Яркость',
  contrast: 'Контраст',
  invert: 'Негатив',
  'hue-rotate': 'Поворот по цветовому кругу'
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
    ...params
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
  hueRotate: createFilter('hue-rotate', { max: 720, unit: 'deg', shape: 'circular' }),
  invert: createFilter('invert'),
  opacity: createFilter('opacity', { defaultValue: 100 }),
};
