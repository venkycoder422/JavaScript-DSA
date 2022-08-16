function multipattern(arr){
var array="";

    for( var i=0; i<arr.length; i++){
        n=arr[i];
       
        for( var j=0; j<n; j++){
            var out=""
            for( k=0; k<n; k++){
                
                if(j==0 || k===0 || j==n-1){
                    out+="*"+" ";
                    
                }else{
                    out+=" "+" ";
                }
                
            }
           
            console.log(out)
            
        }
        
        
    }
    
    
    

}
var arr=[6,5,4,3];
multipattern(arr);
//multipattern(6)