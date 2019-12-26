export class Stack {
  constructor(){
    this.stack = []
  }
  
  add (newItem){
    this.stack.push(newItem)
    return this
  }

  remove(){
    return this.stack.length && this.stack.pop()
  }

  peek(){
    return this.stack.length && this.stack[this.stack.length - 1]
  }
}
