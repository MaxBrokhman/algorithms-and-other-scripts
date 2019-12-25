const makeRepeat = (char, num) => {
  let res = ''
  while (num > 0) {
    res += char
    num--
  }
  return res
}

const steps = (n) => {
  const char = '#'
  for (let i = 1; i <= n; i ++) {
    console.log(makeRepeat(char, i) + makeRepeat(' ', n - i));
  }
}

const steps2 = (n) => {
  const char = '#'
  for (let i = 1; i <= n; i ++) {
    console.log(char.repeat(i) + ' '.repeat(n - i));
  }
}

const steps3 = (num, chars = 1) => {
  if(num < chars) return
  console.log('#'.repeat(chars) + ' '.repeat(num - chars))
  return steps3(num, chars + 1)
}
