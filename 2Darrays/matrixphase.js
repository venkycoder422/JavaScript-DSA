function twoArrayAndPhrase(n, m, matrix){
    var count=0;
  for( var i=0; i<n ; i++){
      var every=matrix[i];
      for( var j=0; j<every.length;  j++){
        for( var k=0; k<every[j].length; k++){
          console.log(every);
          if( every[j][k]=="s"){
            //Horizontal
            if( every[j][k+1]=="a" && every[j][k+2]=="b" && every[j][k+3]=="a" && i+4<n ){
              count++
            }
            
          }
        }
      }
  
  }
console.log(count);
}

var n=5;
var m=5;
var matrix=[
["sabar"],
["amjad"],
["babol"],
["aaron"],
["songs"],
];

twoArrayAndPhrase(n,m,matrix);