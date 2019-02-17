/**
 *   A node object in javascript
 *   Will just have a value
 *   and then points to the next node
 *   @author Brower (jacobbrower96@gmail.com) 
 */

class node {
     /**
      *   Contains a value and a next element
      */
     constructor(value) {
          this.value = value;
          this.next = null;
     }

     setNext(parent, nextNode) {
          if (parent.next == null) {
               parent.next = nextNode;
          } else {
               setNext(parent.next, nextNode);
          }
     }

     getNode() {
          return parent.value;
     }
}