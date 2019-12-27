const midPoint = (list) => {
  let oneNoder = list.head
  let twoNoder = list.head
  while (twoNoder.next && twoNoder.next.next) {
    oneNoder = oneNoder.next
    twoNoder = twoNoder.next.next
  }
  return oneNoder
}
