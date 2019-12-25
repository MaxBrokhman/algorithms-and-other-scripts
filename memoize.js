const memoize = (func) => {
  const cashe = {}
  return (...args) => {
    if (cashe[args]) return cashe[args]

    const res = func(args)
    cashe[args] = res
    return res
  }
}
