//Write a JavaScript program which accept a number as input and insert dashes (-) 
//between each two even numbers. For example if you accept 025468 the output should be
//0-254-6-8;

var arr=[0,2,5,4,6,8];
var n=arr.length;
var array=[];
for(var i=0; i<n; i++){
    if( arr[i] % 2 ===0){
        var double=arr[i]+arr[i];
        var minus=arr[i]-double;
        array.push(minus);
    }else{
        array.push(arr[i]);
    }
}

console.log(array.join(" "));