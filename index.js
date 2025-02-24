class linkedList{
    constructor(head = null){
        this.head = head;
    }
}

class listNode{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


let node1 = new listNode("cat");

let list = new linkedList(node1);

let node2 = new listNode("dog");

let node3 = new listNode("parrot");

node1.next = node2;
node2.next = node3;


console.log(list)
console.log(node1)