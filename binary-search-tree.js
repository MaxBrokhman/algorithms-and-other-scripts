class Node {
  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }
  
  _addRight(value){
    this.right = new Node(value)
  }
  
  _addLeft(value){
    this.left = new Node(value)
  }

  insert(value){
    const isRight = value > this.value
    let side = isRight
      ? this.right
      : this.left
    if(!side) {
      return isRight 
        ? this._addRight(value)
        : this._addLeft(value)
    } else {
      side.insert(value)
    }
  }

  contains(value){
    if(value === this.value) return this
    const isRight = value > this.value
    let side = isRight
      ? this.right
      : this.left
    if(!side){
      return null
    } else {
      return side.contains(value)
    }
  }
}
