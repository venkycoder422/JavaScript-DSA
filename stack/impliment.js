class Stack {
  
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
        this.top=-1;
    }
    
    push(elem){
        //this.items.push(elem);
        
            this.top++;
            this.items[this.top]=elem;
        }
    popD(){
        if(this.top==-1){
            return "empty";
        }else{
            
            this.top--;
            return this.items[this.top];

        }
        

    }
    peek(){
        return this.items[this.items.top-1];
    }
    printStack(){
        var str="";
        for( var i=0; i<this.items.length; i++){
            str+=this.items[i]+" ";
            
        }
        return str;
    }
  
}
var s= new Stack();

s.push(10);
s.push(20);
s.push(30);
s.push(40);
console.log(s.popD());
s.peek();

//console.log(s.printStack());