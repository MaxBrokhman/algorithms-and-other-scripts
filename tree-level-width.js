const getTreeLevelWidth = (root) => {
  const res = []
  const endOfLevelSign = 'end'
  const buffer = [root, endOfLevelSign]
  let counter = 0
  while(buffer.length > 1){
    const currentNode = buffer.shift()
    if(currentNode === endOfLevelSign){
      res.push(counter)
      counter = 0
    } else {
      buffer.push(...currentNode.children)
      counter++
    }
  }
  return res
}
