var str="4jidfg2kgihi12";

var alpha="1234567890";
var sum=0;
var isdouble=true;
for( var i=0; i<str.length; i++){
    
    for( var j=0; j<alpha.length; j++){
        if( str[i]==alpha[j] && str[i+1]==alpha[j+1]){
            console.log(Number(str[i]+str[i+1]));
            isdouble=false;
            break;
        }
        if( str[i]==alpha[j] && isdouble==true){
            sum+=Number(alpha[j]);
            
        }
        isdouble=true;
    
    }
    
}
console.log(sum);


function sequenceNum(str){

}