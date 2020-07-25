export const debounce = (fn, time) => {
  let timeout
  return (...args) => {
    const later = () => {
      fn(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, time);
  }
}
