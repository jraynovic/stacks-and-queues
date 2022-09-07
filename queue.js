// queue data structure FIFO 

//class for QueueItem identical to linked list except name
class QueueItem {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//class to hold queue again identical to linked list except methods and name.
class Queue {
  constructor(head = null) {
    this.head = head;
  }

  //add an item to the queue all items are added to the head of the queue
  addItem(data) {
    const oldHead = this.head; //placeholder for our old head 
    this.head = new QueueItem(data); //set head to the new data
    this.head.next = oldHead; //set our old head to the next property of the new head
  }

  //remove an item all items removed are taken from the end of the queue
  removeItem() {
    let currentItem = this.head; // placeholder to start and traverse from
    let prevItem; // place holder for the previous item
    while (currentItem.next) { // at the end currentItem.next will be null
      prevItem = currentItem; // store prevItem
      currentItem = currentItem.next; // increment to the next
    }
    const removed = currentItem.data; // store the item we are removing
    prevItem.next = null; // remove the item by setting the previous.next to null
    return currentItem.data; // return the item we removed ie pulled from the queue
  }

  //view the contents of the queue
  view() {
    let currentItem = this.head; // placeholder to start and traverse from
    while (currentItem) { // current item will be null at the end of the queue
      console.log(currentItem.data); //display item
      currentItem = currentItem.next; // increment to the next
    }
  }

  reverse() {
    const reversed = new Queue(); // create an empty queue
    let currentItem = this.head; // placeholder to start and traverse from
    while (currentItem) { // current item will be null at the end of the queue
      /*As we traverse the queue we will grab the item at the 
      beginning of our first queue and add it to the end
      of our reversed queue */
      reversed.addItem(currentItem.data); 
      currentItem = currentItem.next; // increment to the next
    }

    reversed.view();
    return reversed;
  }
}

const queue = new Queue();
queue.addItem("1");
queue.addItem("2");
queue.addItem("3");
queue.addItem("4");
queue.view();
console.log(`\n${queue.removeItem()}\n`);
queue.view()
console.log("")
queue.reverse();
