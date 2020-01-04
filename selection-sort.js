const selectionSort = (arr) => {
  for(let i = 0, length = arr.length; i < length; i++){
    let indexOfMin = i
    for(let j = i + 1; j < length; j++){
      if(arr[indexOfMin] > arr[j]) {
        indexOfMin = j
      }
    }
    if(indexOfMin !== i){
      const [less, more] = [arr[indexOfMin], arr[i]]
      arr[i] = less
      arr[indexOfMin] = more
    }
  }
  return arr
}
