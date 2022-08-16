var arr=[1,-2,3,3,-4];
var n=arr.length;
var arr2=[];
for( var i=0; i<n; i++){
    if( arr[i]<0){
        var sign=(-(arr[i]));
        arr2.push(sign)
    }else{
        arr2.push(-(arr[i]));
    }
}
console.log(arr2);