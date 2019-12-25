const getChunks = (arr, size) => {
  const length = arr.length
  if(size > length || size < 1) return arr;
  const res = [];
  const modulo = length % size
  for (let i = 0; i < length; i++) {
    const idx = i + 1
    if(idx % size === 0) {
      res.push(arr.slice(idx - size, idx))
    }
  }
  if(modulo) res.push(arr.slice(length-modulo))
  return res;
};

const getChunks2 = (arr, size) => {
  const res = [];
  for (let num of arr) {
    const last = res.length - 1;
    if (!last || last.length === size) {
      res.push([num])
    } else {
      last.push(num)
    }
  }
  return res;
};

const getChunks3 = (arr, size) => {
  const res = [];
  let i = 0;

  while (i < arr.length) {
    const newIdx = i + size;
    res.push(arr.slice(i, newIdx))
    i = newIdx;
  }

  return res;
}
