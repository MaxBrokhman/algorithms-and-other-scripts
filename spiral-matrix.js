const spiralMatrix = (n) => {
  const res = []
  for(let i = 0; i < n; i++){
    res.push([])
  }
  let counter = 1,
    startColumn = 0,
    startRow = 0,
    endColumn = n - 1,
    endRow = n - 1

  while(startColumn <= endColumn && startRow <= endRow) {
    // top row
    for (let i = startColumn; i <= endColumn; i ++) {
      res[startRow][i] = counter++
    }
    startRow++

    // right column
    for (let i = startRow; i <= endRow; i++){
      res[i][endColumn] = counter++
    }
    endColumn--

    // bottom row
    for (let i = endColumn; i >= startColumn; i--){
      res[endRow][i] = counter++
    }
    endRow--

    // left column
    for (let i = endRow; i >= startRow; i--) {
      res[i][startColumn] = counter++
    }
    startColumn++
  }
  return res
}
