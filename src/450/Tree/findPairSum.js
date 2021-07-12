const BinaryTree = require("../../Tree/binaryTree");

function pairSum({ root }, sum = 100) {
  if (!root) return;
  let found = false;
  const store = new Map();

  const traverse = (current = root) => {
    current.left && traverse(current.left);

    if (!store.has(sum - current.data)) store.set(current.data);
    else found = true;

    current.right && traverse(current.right);
  };

  traverse();
  return found;
}

const tree = new BinaryTree();
[50, 30, 80, 20, 40, 60, 70].forEach((val) => tree.add(val));
console.log(pairSum(tree, 100));
