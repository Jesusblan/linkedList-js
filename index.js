class linkedList{
    constructor(head = null){
        this.head = head;
    }
    //add node to the end

    //add node to the start

    //total size of list

    //return first node

    //return last node

    //return node at desired index

    //remove last node

    //return true or false if a desired value is on the list

    //return the index of a searched value and return null if not found

    //display all nodes as a string 
    printList(){
        let current = this.head;

        while (current){
            console.log(current.data)
            current = current.next
        }
    }
    //insert a new node at the desired index with the desired value

    //remove a node at given index
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
list.printList()