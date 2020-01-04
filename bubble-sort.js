const bubbleSort = (arr) => {
  for(let i = 0, length = arr.length; i < length; i++){
    for(let j = 0, innerLength = length - 1; j < (innerLength - i); j++){
      if(arr[j] > arr[j + 1]){
        const [less, more] = [arr[j + 1], arr[j]]
        arr[j] = less
        arr[j + 1] = more
      }
    }
  }
  return arr
}
