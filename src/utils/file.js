export function getDataUrl(file) {
  if (!file) return Promise.resolve('');

  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      res(reader.result);
    }
    reader.onerror = function () {
      reader.abort();
      rej();
    }
    reader.readAsDataURL(file);
  })
}
