const merge = (left, right) => {
  const res = []
  while(left.length && right.length){
    left[0] > right[0]
      ? res.push(right.shift())
      : res.push(left.shift())
  }
  return [...res, ...left, ...right]
}

const mergeSort = (arr) => {
  if(arr.length < 2) return arr
  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)
  return merge(mergeSort(left), mergeSort(right))
}
