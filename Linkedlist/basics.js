class Node{
    constructor(element){
        this.element=element
        this.next=null

    }
}

//var node=new Node(50);
//console.log(node)

class LinkedList{
    //constructor
    constructor(){
        this.head=null;
        this.size=0;
    }
    //Methods
    //Add
    //print
    //insert
    //delete
    //Isempty;
    //size
    add(element){
        var node= new Node(element)
        //check if LL is empty or not;
        if(!this.head){
            this.head=node;
        }else{// empty;
            var current=this.head;
            //we want to see or move at the end
            while(current.next){
                current=current.next;
            }
            current.next=node
        }
        this.size++;
    }
    //Printing 
    print(){
        var current=this.head
        var index=0;
        while(current){
            console.log("element:",current.element,"Index:",index++);
            current=current.next;
        }
    }

    //emppty;
    empty(){
        return this.head===0?true:false
    }
    //Size
    sizeOfLL(){
        return this.size;
    }
}


var list= new LinkedList();
list.add(20)
list.add(30)
list.add(40)
list.add(50)
//console.log(list)
list.print()
console.log(list.empty())
console.log(list.sizeOfLL())
