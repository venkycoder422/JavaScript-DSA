
//var arr=[3,10,2,9];

function runProgram(input) {
    var newinput=input.split("\n");
   //console.log(newinput);
   var N=Number(newinput[0][0]);
   var index=Number(newinput[0][2]);
   var arr=newinput[1].split(" ").map(Number);
   var k=Number(newinput[2]);
//    console.log(N)
 // console.log(index);
//    console.log(k);
//    console.log(arr);
console.log(bill(N,index,arr,k));
function bill(N,index,arr,k){
var totalbill=0;
for( var i=0; i<N; i++){
    if( arr[i]===arr[index]){
        
    }else{
        totalbill+=arr[i];
    }
}
var actualbill=totalbill/2;
var paid=k-actualbill;
if( paid===k || paid==0){
  return "Bon Apetit"
}else{
  return paid;
}
}

  }
  if (process.env.USERNAME === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }

  

