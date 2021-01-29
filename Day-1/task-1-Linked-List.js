class ListNode {
  // a list node contains two items: the data and the pointer to the next
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// A linked list is a linear data structure similar to an array.
class LinkedList {
  // implementation of a linked list class with a constructor.
  // if the head node is not passed
  //the head is initialised to null.
  constructor(head = null) {
    this.head = head
  }
  // This method returns the number of nodes present in the linked list.
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  }
  // This method empties out the list.
  clear() {
    this.head = null;
  }

  // This method returns the last node of the linked list.
  getLast() {
    // setting the last node to be the head to start off with
    let lastNode = this.head;
    // checking if this list is not empty by checking for head which we stored in variable lastNode
    if (lastNode) {
      // looping though and checking if theres a next property
      while (lastNode.next) {
        lastNode = lastNode.next // setting lastNode to be the next property of the LastNode
      }
    }
    return lastNode
  }

  // This method returns the first node of the linked list
  getFirst() {
    //  the head is always the first node
    return this.head;
  }

}
