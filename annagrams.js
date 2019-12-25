const makeMap = (str) => {
  const cashe = {}
  const regExp = /\w/
  for (let char of str) {
    const normChar = char.toLowerCase()
    if (cashe[normChar]) {
      cashe[normChar]++
    } else {
      regExp.test(normChar) && (cashe[normChar] = 1)
    }
  }
  return cashe;
}

const isMapsSizesEqual = (map1, map2) => Object.values(map1).length === Object.values(map2).length

const isAnnagrams = (str1, str2) => {
  const casheStr1 = makeMap(str1)
  const casheStr2 = makeMap(str2)
  if(!isMapsSizesEqual(casheStr1, casheStr2)) return false
  for (let char in casheStr1) {
    if(casheStr1[char] !== casheStr2[char]) return false
  }
  return true
}

///////////////////////////
const cleanStr = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')

const isAnnagrams2 = (str1, str2) => cleanStr(str1) === cleanStr(str2)

