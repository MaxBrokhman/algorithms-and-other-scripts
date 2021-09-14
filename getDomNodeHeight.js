const getDomNodeHeight = (node) => {
  if (!node) return 0;
  const range = document.createRange();
  range.selectNodeContents(node);
  const height = range.getBoundingClientRect().height;
  range.detach();
  return height;
};
