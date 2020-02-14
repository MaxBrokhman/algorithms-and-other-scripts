const binarySearch = (arr, val) => {
    let low = 0,
      high = arr.length - 1,
      mid = Number((low + high)/2).toFixed(0);
    let guess = arr[mid];
    if (val === guess) return mid;

    const findMid = (min, max) => {
      mid = Number((min + max)/2).toFixed(0);
      guess = arr[mid];

      if (guess < val){
        min = mid + 1;
        findMid(min, max);
      } else if (val < guess){
        max = mid - 1;
        findMid(min, max);
      }
      return mid;
    };

    while (guess !== val){
      findMid(low, high);
    }

    return mid;
}

const binarySearch2 = (value, arr, min = 0, max = arr.length - 1) => {
	let mid = Number(((min + max) / 2).toFixed(0))
	let guess = arr[mid]
	if(guess === value) return mid
	if(value < arr[mid]) return binarySearch2(value, arr, min, mid - 1)
	if(value > arr[mid]) return binarySearch2(value, arr, mid + 1, max)
}
