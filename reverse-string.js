const reverse = str => str.split('').reverse().join('')
const reverse2 = (str) => {
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}
const reverse3 = (str) => str
    .split('')
    .reduce((res, val) => val + res, '')
