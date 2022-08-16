function Npattern(n){
    for( var i=1; i<=n; i++){
        var out="";
        for( var j=1; j<=n; j++){
            if( j==1 || j==n || i==j){
                out+="*"+" "
            }else{
                out+=" "+" "
            }
        }
        console.log(out);
    }
}
Npattern(5);

