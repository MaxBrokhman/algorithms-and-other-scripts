import { Queue } from './queue'

const weaveQueues = (queue1, queue2) => {
  const res = new Queue()
  while(queue1.peek() || queue2.peek()){
    queue1.peek() && res.add(queue1.remove())
    queue2.peek() && res.add(queue2.remove())
  }
  return res
}
