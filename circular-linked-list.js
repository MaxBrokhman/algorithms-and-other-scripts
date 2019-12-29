const isCircular = (list) => {
  let oneNoder = list.head
  let twoNoder = list.head
  while (twoNoder.next && twoNoder.next.next) {
    oneNoder = oneNoder.next
    twoNoder = twoNoder.next.next
    if (twoNoder === oneNoder) return true
  }
  return false
}
