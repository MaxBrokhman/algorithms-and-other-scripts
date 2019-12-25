const pyramid = (n, chars = 1, counter = 1) => {
  if(n < counter) return
  const spaces = ' '.repeat((n * 2 - 1 - chars)/2)
  console.log(spaces + '#'.repeat(chars) + spaces)
  return pyramid(n, chars + 2, counter + 1)
}
