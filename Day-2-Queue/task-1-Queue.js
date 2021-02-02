// QUEUE
// Queues are used whenever we need to manage objects in order starting with the first one in. FIFO
// Scenarios include printing documents on a printer, call center systems answering people on hold people, and so on.

Class Queue{

  constructor() {
    this.storage = {}
    this.head = 0
    this.tail = 0
  }

  enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
  }
  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  }
  getLast(){
     return this.storage[this.storage.length - 1];
  }
  getFirst() {
    return this.storage[0];
  }
  size() {
    return this.storage.length;
  }

}
