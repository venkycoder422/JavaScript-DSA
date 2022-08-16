function runProgram(input) {
    var arr=input.trim().split("\n");
    var N=+(arr[0]);
    var stack=[];
    
    for(var i=0; i<N; i++){
        console.log(arr[i])
      if(arr[i]==="1"){
        stack.push(arr[1]);
      }
    }
    console.log(stack);
  }
  if (process.env.USER === "") {
    runProgram('');
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
      process.exit(0);
    });
  }
  