var str="A Transformation in education";

var arr="";
var array=[]
for( var i=0; i<str.length; i++){
    arr+=str[i];
    
    if(str[i]==" " ){
        arr=arr.trim();
        array.push(arr);
        arr="";
    }else if(i==str.length-1){
        array.push(arr);
    }
}
//console.log(array);
var out="";
for( var i=array.length-1; i>=0; i--){
    out+=array[i]+" ";
}
out=out.trim();
console.log(out);