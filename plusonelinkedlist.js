//Objective is the same as 'Plus One', but now with a linked list as an input

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(9)
head.next.next.next.next = new Node(9)


//O(n) solution that traverses the list, finds the right-most non-none,
//and adjusts all values afterwards accordingly

//Example with [1,2,3,9,9]

let newNode = new Node(0)
newNode.next = head
let temp = newNode

while (head) {
    //Find the right-most not-nine value
    //In our example, it is 3
    if (head.val != 9) {
        temp = head
    }
    head = head.next
}

//We add 1 to 3 and move on
//[1,2,4,9,9]
temp.val++
temp = temp.next 

//Make all 9's after the adjusted value 0's
//[1,2,4,0,0]
while (temp) {
    temp.val = 0
    temp = temp.next
}

//If the first value in our new list has been adjusted, then we keep it as the new head
//This is only the case if all the other values in the list are 9's
//Otherwise return the rest of the list
return newNode.val != 0 ? newNode : newNode.next