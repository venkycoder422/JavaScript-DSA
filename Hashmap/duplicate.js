var arr=[1,2,1,4,1,7];

var mp=new Map();
var count=1;
for( var i=0; i<arr.length; i++){
    if( mp.has(arr[i])){
        count++;
        mp.set(arr[i],count);
        
    }else{
        mp.set(arr[i],1);
    }
}

console.log(mp)
var array=[];
var values=mp.values();
//console.log(mp.size);
//console.log();
for( var i=0; i<mp.size; i++){
    console.log(values.next().value);
    if( values.next().value > 1){
        console.log("i")
        array.push(values);
    }
}
    
console.log(array.join(" "));
