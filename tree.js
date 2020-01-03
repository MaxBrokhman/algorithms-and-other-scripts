class Node {
  constructor(data){
    this.data = data
    this.children = []
  }

  add(data){
    this.children.push(new Node(data))
    return this
  }

  remove(data){
    this.children = this.children.filter(node => node.data !== data)
  }
}

class Tree {
  constructor(){
    this.root = null
  }

  traversDFS(func){
    const buffer = [this.root]
    while(buffer.length){
      const currentNode = buffer.shift()
      buffer.unshift(...currentNode.children)
      func(currentNode)
    }
  }

  traversBFS(func) {
    const queue = [this.root]
    while(queue.length){
      const currentNode = queue.shift()
      queue.push(...currentNode.children)
      func(currentNode)
    }
  }
}
