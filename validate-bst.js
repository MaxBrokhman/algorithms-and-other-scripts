const validateBst = (node) => {
  if(!node) return true
  const isRightValid = node.right && node.value < node.right.value
  const isLeftValid = node.left && node.value > node.left.value
  if(!isRightValid || !isLeftValid){
    return false
  }
  return validateBst(node.left) && validateBst(node.right)
}
