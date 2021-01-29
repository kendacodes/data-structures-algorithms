// Linked Lists - Push & BuildOneTwoThree

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
 let newNode = new Node(data);
  newNode.next = head;
  return newNode;
}

function buildOneTwoThree() {
  var chained = null
  chained = push(chained, 3)
  chained = push(chained, 2)
  chained = push(chained, 1)
  return chained
}
