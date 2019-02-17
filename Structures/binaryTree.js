/**
 *   Making a binary tree of nodes
 *   @author Brower (jacobbrower96@gmail.com) 
 */

class leafNode {
     constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
     }
}

class binarySearchTree {
     constructor() {
          this.root = null
     }

     insert(value) {
          var newNode = node(value);
          if (this.root == null) {
               this.root = newNode;
          } else {

          }
     }

     insertNode(parent, value) {
          var newNode = node(value);
          if (newNode.value < parent.value) {
               if (parent.left == null) {
                    parent.left = newNode;
               } else {
                    insertNode(parent.left, value);
               }
          } else if (newNode.value > parent.value) {
               if (parent.right == null) {
                    parent.right = newNode;
               } else {
                    insertNode(parent.right, value);
               }
          }
     }
}