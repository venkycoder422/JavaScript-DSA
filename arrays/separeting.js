var arr=[1,-2,3,-1,4,5,6,-9];
var n=arr.length; 

var separate=[]
for( var i=0; i<n; i++){
    if( arr[i]<0){
        separate.push(arr[i]);
    }
}

for( var i=0; i<n; i++){
    if( arr[i]>0){
        separate.push(arr[i]);
    }
}
console.log(separate);