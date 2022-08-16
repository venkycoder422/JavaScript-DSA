var sentence="Transformation of Education";
 var arr=[];
 
for( var i=0; i <sentence.length; i++){
    var out=[];
    var word="";
    word+=sentence[i];
    if(word[i]==" "){
        for(var j=0; j<i; j++){
            out+=word[j];
        }
        console.log(word);
    }
   
    
    
    
}
