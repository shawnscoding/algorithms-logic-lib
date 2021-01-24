class Node {
    constructor(val) {
        this.val = val;
        this.prev = null
        this.next = null
    }    
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if(!this.length){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail 
            this.tail = newNode
            // this.head.next = this.tail.prev
        }
        this.length++
        return this
    }
}

// prev:  <- tail 1 -> 2

const instance1 = new doublyLinkedList() 
instance1.push(1)
instance1.push(2)
instance1.push(3)
console.log(instance1)
console.log(instance1.head.next)
console.log(instance1.head.next.next.prev)
// 3 