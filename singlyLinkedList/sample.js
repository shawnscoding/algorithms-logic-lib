class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }    
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode 
        } 
        else {
            // has to be tail.next since head never lose its first node
            this.tail.next = newNode  
            this.tail = newNode 
        }
        // first true but all false after it
        // compares if it points to same memory location
        // console.log(this.head === this.tail)
        this.length++
        return this
    }
    pop() {
        if(!this.head) return;
        if(this.head === this.tail) {
            this.head = null
            this.tail = null
            this.length--
            return;
        }
        let current = this.head
        while(current) {
            // console.log(current.val)
            if(current.next === this.tail){
                // found 2nd to last node
                this.tail = current
                this.tail.next = null
            } 
            current = current.next
        }
        this.length--
        return this.tail
    }

    shift() {
        if(!this.head) return
        // make 2nd to the head, head
        // remove original head
        let currentHead = this.head
        this.head = currentHead.next 
        this.length--
        if(this.length === 0){
        this.tail = null 
        }
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            // add it to the biginning
            // assign next to prev head 
            newNode.next = this.head
            this.head = newNode
            // this.head.next = prev
        }
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || this.length <= index) return;
       let current = this.head
       let count = 0
       while(count !== index){
           count++
           current = current.next
       }  
       return current
    }

    set(i, val) {
        let foundNode =  this.get(i)
        if(foundNode){
            foundNode.val = val
            return true
        }
       return false;
    }

    insert(i, val) {
        if(i < 0 || i > this.length) return false
        if(i === this.length)     return !!this.push(val) 
        if(i === 0)       return !!this.unshift(val) 

        const newNode = new Node(val)
        let prev =  this.get(i - 1)
        newNode.next = prev.next
        prev.next = newNode 
        return true
        // let foundNode =  this.get(i - 1)
            // newNode.next = foundNode.next
            // foundNode.next = newNode
            // this.length++
            // return true
    }

    remove(i){
        if(i < 0 || i >= this.length)return false;
        if(i === 0) return !!this.shift();
        if(i === this.length - 1) return !!this.pop()
        // if not
        let prev =  this.get(i-1)
        prev.next = prev.next.next
        this.length--
        return true
    }

    print() {
        let arr = [];
        let current = this.head    
        while(current){
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

    reverse() {
    // interview question
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next; 
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            // time to point
            node.next = prev
            // time to level up for prev and node
            prev = node
            node = next
        }
        // i=0;max=3
        // [0,   1,   2,   3]
        // PRE  NODE  NEXT
        //       PRE   NODE NEXT
        //             PRE   next
        //             
        // 3 --> 2 --> 1 --> 0 --> null


        // res [3,  1,  2,  0]
        return this
    }
}

const instance1 = new SinglyLinkedList()

instance1.push(0)
instance1.push(1)
instance1.push(2)
instance1.push(3)
instance1.reverse()

console.log("instance1 ::", instance1)
console.log("instance1 ::", instance1.print())
// console.log("instance1 ::", instance1.head.next)


// set(i, val) {
//     let foundNode =  this.get(i)
//     let copy  = foundNode
//     if(foundNode){
//         let newNode = new Node(val)
//         newNode.next = foundNode.next
//         foundNode = newNode
//         // !important note
//         // this will make foundNode lose the address
//         // of the node class to update
//         // to keep the address and update
//         // have to update just val in the address
//         console.log('test :: ', copy === foundNode)
//         return true
//     }
//    return false;
// }


// insertion - O(1) constant time
// removal - O(1) or O(N). if shift, O(1). if pop, O(N)
// search O(N)
// Access O(N)

// whereas array
// insertion - O(N) or O(1)
// removal - O(1) or O(N). if shift, O(N). if pop, O(1)
// but overall, worse than ssl
// search O(1)
// Access O(1)