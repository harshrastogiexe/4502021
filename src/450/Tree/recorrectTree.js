const BinaryTree = require("../../Tree/binaryTree");

function reCorrect({ root }) {
  let prev;
  let first, second;

  const traverse = (current = root) => {
    if (!current) return;

    current.left && traverse(current.left);
    if (prev && current.data < prev.data) {
      if (!first) first = prev;
      second = current;
    }
    prev = current;

    current.right && traverse(current.right);
  };
  traverse();
  [first.data, second.data] = [second.data, first.data];
}

const tree = new BinaryTree();
[50, 30, 80, 20, 40, 60, 70].forEach((val) => tree.add(val));
tree.root.data = 100;
// tree.traverse();
reCorrect(tree);
tree.traverse();
