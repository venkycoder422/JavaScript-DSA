function plus(n){
    for( var i=1; i<=n; i++){
        var out="";
        for( var j=1; j<=n; j++){
            if( i==3 || j==3){
                out+="*"+" ";

            }else{
                out+=" "+" ";
            }
        }
        console.log(out);

    }
}
plus(5);