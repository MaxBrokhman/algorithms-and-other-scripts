const findVowels = (str) => {
  const voewls = {
    a: true,
    i: true,
    e: true,
    u: true,
    o: true,
  }
  let counter = 0;
  for (let char of str.toLowerCase()) {
    voewls[char] && counter++
  }
  return counter
}

const findVowels2 = (str) => {
  let counter = 0
  const vowels = ['a', 'i', 'o', 'e', 'u']
  for (let char of str.toLowerCase()) {
    vowels.includes(char) && counter++
  }
  return counter
}

const findVowels3 = (str) => {
  const regExp = /[aioeu]/gi
  const matches = str.matches(regExp)
  return Array.isArray(matches) ? matches.length : 0
}
