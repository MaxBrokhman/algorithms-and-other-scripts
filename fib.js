const fib = n => n < 2 ? n : fib(n-1) + fib(n-2)

const fib2 = (n) => {
  let i = 1,
  prevValue = 0,
  currentVal = 1,
  nextVal;
  while (i < n){
    nextVal = prevValue + currentVal;
    prevValue = currentVal;
    currentVal = nextVal;
    i++;
  }
  return nextVal;
}

const fib3 = (n, f = 0, s = 1) => n === 0 ? f : fib3(n-1, s, f + s)
