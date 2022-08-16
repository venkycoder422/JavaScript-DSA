var string1="aabd";

var obj={};
var count=0;
for( var i=0; i<string1.length; i++){
    if( obj[string1[i]]===undefined){
        obj[string1[i]]=1
    }
    else{
        obj[string1[i]]++;
    }
}

//console.log(obj);
for( var keys in obj){
    //console.log(keys);
    if(obj[keys] % 2 === 0){

    }else{
        count++;
    }
}

//console.log(count);
if(count>1){
console.log("Not Posiible!")
}else{
    console.log("Possible!")
}