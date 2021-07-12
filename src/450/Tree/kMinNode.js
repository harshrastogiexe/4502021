const BinaryTree = require("../../Tree/binaryTree");

function printKMinNode(tree = null, k) {
  if (!tree) return;
  const calculate = (root = tree.root) => {
    if (!root) return;
    const left = calculate(root.left);
    if (left) return left;

    k--;
    if (k === 0) return root;

    return calculate(root.right) || null;
  };
  const result = calculate();
  return result ? result.data : null;
}

const tree = new BinaryTree();
[50, 30, 80, 20, 40, 60, 70].forEach((val) => tree.add(val));
console.log(printKMinNode(tree, 2));
