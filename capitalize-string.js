const capStr = (str) => {
  const regExp = /\w/
  return str.split('')
    .map((char, i) => {
      if(regExp.test(char) && (!regExp.test(str[i-1]) || i - 1 < 0)){
        return char.toUpperCase()
      }
      return char
    })
    .join('')
}
