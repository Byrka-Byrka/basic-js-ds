const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
 class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  inside(node, direction) {
    let currentNode = node
    while (currentNode[direction]) {
      currentNode = currentNode[direction]
    }
    return currentNode.data
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data)

    function addNode(node, data) {
      if (!node) return new Node(data)

      if (node.data === data) return node

      if (node.data > data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
  }

  has(data) {
    let result = hasData(this.rootNode, data)

    function hasData(node, data) {
      if (!node) return false

      if (node.data === data) return true

      if (node.data > data) {
        return hasData(node.left, data)
      } else {
        return hasData(node.right, data)
      }
    }
    return result
  }

  find(data) {
    return findData(this.rootNode, data)

    function findData(node, data) {
      if (!node) return null

      if (node.data === data) return node

      if (node.data > data) {
        return findData(node.left, data)
      } else {
        return findData(node.right, data)
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data, this.inside)

    function removeNode(node, data, inside) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data, inside);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data, inside);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        node.data = inside(node.left, 'right')
        node.left = removeNode(node.left, node.data)
        return node
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null
    }
    return (this.inside(this.rootNode, 'left'))
  }

  max() {
    if (!this.rootNode) {
      return null
    }
    return (this.inside(this.rootNode, 'right'))
  }
}

module.exports = {
  BinarySearchTree
};