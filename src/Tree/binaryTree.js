const TreeNode = require("./TreeNode");
const Queue = require("../Queue");
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

  delete(data, root = this.root) {
    if (!root) return null;

    if (data < root.data) {
      root.left = this.delete(data, root.left);
    } else if (data > root.data) {
      root.right = execute(data, root.right);
    } else {
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      let smallestSuccessor = root.right;
      while (smallestSuccessor.left) {
        smallestSuccessor = smallestSuccessor.left;
      }
      root.data = smallestSuccessor.data;
      this.delete(smallestSuccessor.data, root.right);
    }
    return root;
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

  levelTraversal(root = this.root) {
    if (!root) return;
    const queue = new Queue();
    queue.enQueue(root);

    while (!queue.isEmpty) {
      const current = queue.deQueue();
      current.left && queue.enQueue(current.left);
      current.right && queue.enQueue(current.right);
      console.log(current.data);
    }
  }

  leftView(root = this.root) {
    if (!root) return [];
    let maxHeight = 0;
    let nodes = [];
    const calculate = (current = root, height = 1) => {
      if (!current) return;

      if (height > maxHeight) {
        nodes.push(current.data);
        maxHeight = height;
      }

      calculate(current.left, 1 + height);
      calculate(current.right, 1 + height);
    };
    calculate();
  }

  rightView(root = this.root) {
    if (!root) return [];
    let maxHeight = 0;
    let nodes = [];
    const calculate = (current = root, height = 1) => {
      if (!current) return;

      if (height > maxHeight) {
        nodes.push(current.data);
        maxHeight = height;
      }

      calculate(current.right, 1 + height);
      calculate(current.left, 1 + height);

      return nodes;
    };
    return calculate();
  }

  get maximum() {
    if (!this.root) return;
    let current = this.root;
    while (current.right) current = current.right;
    return current;
  }

  get minimum() {
    if (!this.root) return;
    let current = this.root;
    while (current.left) current = current.left;
    return current;
  }
}

const tree = new BinaryTree();
[50, 30, 80, 20, 40, 60, 70].forEach((val) => tree.add(val));

// tree.traverse();
// console.log(tree.size);
// console.log(tree.height);
// console.log(tree.rightView());
tree.delete(50);
tree.traverse();
console.log("\n\n");
tree.levelTraversal();
// console.log(tree.maximum);
// console.log(tree.minimum);

module.exports = BinaryTree;
