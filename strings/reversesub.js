var str="A Masai School";

str=str.split(" ");
console.log(str);
var out="";
for(var i=0; i<str.length; i++){
    var arr=str[i];
    for(var j=arr.length-1; j>=0; j--){
        out+=arr[j];
    }
    out+=" ";
}

console.log(out);