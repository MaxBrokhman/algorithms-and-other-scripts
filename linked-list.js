class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insertFirst(data){
    this.head =  new Node(data, this.head)
    return this
  }

  recursiveSize(head = this.head, counter = 0){
    if(!head) return counter
    return this.recursiveSize(head.next, counter + 1)
  }

  size(){
    if(!this.head) return 0
    let counter = 1
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
      counter++
    }
    return counter
  }

  getFirst(){
    return this.head
  }

  recursiveGetLast(node = this.head){
    return !node.next ? node : this.recursiveGetLast(node.next)
  }

  getLast(){
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  
  _isOutOfRange(idx){
    return idx >= this.size() && idx >= 0
  }

  removeFirst(){
    this.head =  this.head ? this.head.next : null
    return this
  }

  removeLast(){
    if(!this.head) return
    let currentNode = this.head
    while(currentNode.next.next){
      currentNode = currentNode.next
    }
    currentNode.next = null
    return this
  }

  insertLast(data){
    if(!this.head) return this.insertFirst(data)
    this.getLast().next = new Node(data)
    return this
  }

  clear(){
    this.head = null
  }

  getAt(idx){
    if(!this.head || this._isOutOfRange(idx)) return null
    let i = 0
    let currentNode = this.head
    while(currentNode) {
      if(i++ === idx) return currentNode
      currentNode = currentNode.next
    }
  }

  removeAt(idx){
    if(this._isOutOfRange(idx)) return null
    const deleted = this.getAt(idx)
    const previous = this.getAt(idx-1)
    previous.next = deleted.next
    return deleted
  }

  insertAt(data, idx){
    if(idx > this.size()) return
    if(idx === this.size()) {
      this.getLast().next = new Node(data)
      return this
    }
    const previous = this.getAt(idx - 1) || this.getLast()
    const newNode = new Node(data, previous.next)
    previous.next = newNode
    return this
  }

  forEach(func){
    let currentNode = this.head
    let idx = 0
    while(currentNode){
      func(currentNode, idx++)
      currentNode = currentNode.next
    }
  }

  *[Symbol.iterator](){
    let currentNode = this.head
    while (currentNode) {
      yield currentNode
      currentNode = currentNode.next
    }
  }
}
