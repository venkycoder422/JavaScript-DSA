var str="the masai school";

var out="";
var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","X","y","z"];
var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for(var i=0; i<str.length; i++){
    for(var j=0; j<lower.length; j++){
        if( str[i]==lower[j]){
            out+=upper[j];
            break;
        }else{
            if(str[i]==" "){
                out+=" ";
                break;
            }
        }
    }
}
console.log(out)
console.log(str);