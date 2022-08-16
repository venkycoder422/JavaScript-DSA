var str="aabbb";
//var alphabets="abcdefghijklmnopqrstuvwxyz";
n=str.length;
var remove="";
var count=0;
var start=false;

for( var i=0; i<n;i++){
    for( var j=0; j<remove.length; j++){
    if( str[i]==remove[j]){
        start=true;
        
    }
    }
    count++;
    if( count==1 && start==false){
        remove+=str[i];
    }
    start=false;
    count=0;

}
    console.log(remove)
