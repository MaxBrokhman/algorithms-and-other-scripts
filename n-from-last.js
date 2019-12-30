const fromLast = (n, list) => {
  let oneNoder = list.head
  let multiNoder = list.head
    while(n >= 0 && multiNoder) {
      multiNoder = multiNoder.next
      n--
    }
  if (n > 0) return null
  while (multiNoder.next) {
    oneNoder = oneNoder.next
    multiNoder - multiNoder.next
  }
  return oneNoder
}
