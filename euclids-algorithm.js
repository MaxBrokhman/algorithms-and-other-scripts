const getGreatestCommonFactor = (first, second) => {
  if (first === second) return first
  const minor = first < second
    ? first
    : second
  const major = first > second
    ? first
    : second
  const difference = major - minor
  if (difference === minor || difference === 1) return difference
  return getGreatestCommonFactor(minor, difference)
}
