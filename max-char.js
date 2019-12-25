const maxChars = (str) => {
  const cashe = {}
  let res,
      current = 0;
  for (let char of str) {
    cashe[char] = cashe[char] + 1 || 1
    if(cashe[char] > current) {
      res = char
      current = cashe[char]
    }
  }
  return res;
}
