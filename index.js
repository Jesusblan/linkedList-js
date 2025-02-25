class linkedList{
    constructor(head = null){
        this.head = head;
    }
    //add node to the end
    insertLast(data){
        let newNode = new listNode(data);
        let current;
        if (!this.head){
            this.head = newNode;
        }
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    //add node to the start
    insertFirst(data){
        this.head = new listNode(data, this.head);
    }

    //total size of list
    listSize(){
        let current = this.head;
        let counter = 0;

        while (current != null){
            counter ++;
            current = current.next;
        }

        return counter;
    }

    //return first node
    firstListItem(){
        return this.head.data;
    }

    //return last node
    lastListItem(){
        let current = this.head;

        while (current.next){
            current = current.next;
        }
        return current.data;
    }

    //return node at desired index
    getAt(index){
        let current = this.head;
        let counter = 0;

        while (current){
            if (counter == index){
                return current.data;
            }
            counter ++;
            current = current.next;
        }
    }

    //remove last node

    //return true or false if a desired value is on the list

    //return the index of a searched value and return null if not found

    //display all nodes as a string 
    printList(){
        let current = this.head;

        while (current){
            console.log(current.data);
            current = current.next;
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

list.insertLast("mouse");
list.insertFirst("fish");

console.log("<-------------------------------->")

list.printList();

console.log("<---->")

console.log("Items in list: "+list.listSize());

console.log("First item is: "+list.firstListItem())
console.log("Last item is: "+list.lastListItem())
console.log("The item in index 2 is: "+list.getAt(2))

console.log("<-------------------------------->")
