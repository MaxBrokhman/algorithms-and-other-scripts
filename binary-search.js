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
