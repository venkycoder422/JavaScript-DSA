
function Nsum(n,m,matrix){
    var out=""
    for( var i=0; i<m; i++){
            if( i % 2===0){
                for( var j=n-1; j>=0; j--){
                    out+=matrix[j][i]+" ";
                }
            }else{
                for( var j=0; j<n; j++){
                    out+=matrix[j][i]+" ";
                }
            }
        
    }

    console.log(out)

}

var matrix=[[1, 4, 3],
[6, 5, 6],
[7, 8, 10]];
var n=3;
var m=3;
Nsum(n,m,matrix);