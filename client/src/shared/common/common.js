export const sleep = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const minMaxValueOfKeyFromArrayOfObject = (key, arrayOfObject) => {
  const minArr = arrayOfObject.map((data) => Number(data[key]));
  const min = typeof Math.min(...minArr) == 'number' ? Math.min(...minArr) : 0;
  const max = typeof Math.max(...minArr) == 'number' ? Math.max(...minArr) : 0;
  return { min, max };
};

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}