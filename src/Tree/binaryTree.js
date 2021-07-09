const TreeNode = require("./TreeNode");

class BinaryTree {
  root = null;

  add(data, current = this.root) {
    const node = new TreeNode(data);
    if (!this.root) this.root = node;

    while (current) {
      if (data <= current.data) {
        if (!current.left) return (current.left = node);
        current = current.left;
      } else {
        if (!current.right) return (current.right = node);
        current = current.right;
      }
    }
  }

  traverse(current = this.root, type = "inorder") {
    const execute = (root = current) => {
      if (!root) return;
      switch (type) {
        case "inorder": {
          execute(root.left);
          console.log(root.data);
          execute(root.right);
          return;
        }
        case "preorder": {
          console.log(root.data);
          execute(root.left);
          execute(root.right);
          return;
        }
        case "postorder": {
          execute(root.left);
          execute(root.right);
          console.log(root.data);
          return;
        }
      }
    };
    execute(current);
  }

  get size() {
    const calculate = (current = this.root) => {
      if (!current) return 0;
      return calculate(current.left) + 1 + calculate(current.right);
    };

    return calculate();
  }

  get height() {
    const calculate = (current = this.root) => {
      if (!current) return 0;
      return Math.max(calculate(current.left), calculate(current.right)) + 1;
    };
    return calculate();
  }
}

const tree = new BinaryTree();
[50, 30, 80, 20, 40, 60, 70].forEach((val) => tree.add(val));

tree.traverse();
console.log(tree.size);
console.log(tree.height);

module.exports = BinaryTree;
