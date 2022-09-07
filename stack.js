//stack data structure LIFO (last in last out)

//class for StackItem identical to linked list except name
class StackItem {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//class to hold Stack again identical to linked list except methods and name.
class Stack {
  constructor(head = null) {
    this.head = head;
  }
  
  //add a new item to our stack at the 'top'
  push(data) {
    const oldHead = this.head; //place holder for our old head. If list is empty oldHead = null
    this.head = new StackItem(data); //set the head to our new StackItem.
    this.head.next = oldHead; // set our head.next to our old head including the old heads dot next.
  }

  // removed the item at the top of our stack
  pop() {
    const poppedVal = this.head.data; //store the top of our list to be returned later
    this.head = this.head.next; //  remove the head by setting it the the next property
    return poppedVal; //return the value we set aside earlier
  }

  //display items in our stack
  view() {
    let currentItem = this.head;// placeholder to start and traverse from
    while (currentItem) { // current item will be null at the end of the stack
      console.log(currentItem.data); //display item
      currentItem = currentItem.next; // increment to next
    }
  }

  //return a reversed version of our stack
  reverse() {
    const reversed = new Stack(); // create a new stack to hold the reversed version
    let currentItem = this.head; // placeholder to start and traverse from
    while (currentItem) { // current item will be null at the end of the stack
       /*As we traverse the stack we will grab the item at the 
      top of our first stack and add it to the botto,
      of our reversed stack */
      reversed.push(currentItem.data);
      currentItem = currentItem.next; // increment to next
    }

    reversed.view(); //just displays the reversed stack
    return reversed; //return our new reversed stack
  }
}

const stack = new Stack(); // create instance of stack
stack.push("Home");
stack.push("Order");
stack.push("Check Out");
console.log(stack.pop());
console.log("");
stack.view();
console.log("");
stack.reverse();
