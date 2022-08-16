function masaiTraversalAndQueries(N, M, q, arr){
    
    var out="";
    for( var i=0; i<M; i++){
        if( q % 2===1){
            if( i % 2===0){
                for( var j=0; j<N; j++){
                    out+=arr[j][i]+" ";
                }
            }else{
                for( var k=N-1; k>=0; k--){
                    out+=arr[k][i]+" ";
                }
            }
        }else{
            if( i % 2===1){
                for( var j=0; j<N; j++){
                    out+=arr[j][i]+" ";
                }
            }else{
                for( var k=N-1; k>=0; k--){
                    out+=arr[k][i]+" ";
                }
            }
        }
    }
    out=out.trim();
    console.log(out);
}
var N=3;
var M=4;
var q=1;
var arr=[
    [1,2,3,4],
    [4,5,6,5],
    [7,8,9,6]
];

masaiTraversalAndQueries(N,M,q,arr);