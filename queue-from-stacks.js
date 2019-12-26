import { Stack } from './stack'

class QueueFromStacks {
  constructor(){
    this.value = new Stack()
    this.temp  = new Stack()
  }
  
  add(item){
    this.value.add(item)
  }

  _runToTemp(){
    while(this.value.peek()){
      this.temp.add(this.value.remove())
    }
  }

  _runToValue(){
    while(this.temp.peek()){
      this.value.add(this.temp.remove())
    }
  }
  
  remove(){
    this._runToTemp()
    const deleted = this.temp.remove()
    this._runToValue()
    return deleted
  }
  
  peek(){
    this._runToTemp()
    const peeked = this.temp.peek()
    this._runToValue()
    return peeked
  }
}
