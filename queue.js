export class Queue {
  constructor(){
    this.queue = []
  }

  add(newValue){
    this.queue.unshift(newValue)
    return this
  }

  peek(){
    return this.queue.length && this.queue[this.queue.length - 1]
  }

  remove(){
    return this.queue.length && this.queue.pop()
  }
}
