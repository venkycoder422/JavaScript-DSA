function longestRepeatedOdd(N, array) {
   
    var count=0;
      var temp=0;
      var number=0;
      for( var i=0; i<N; i++){
           number=array[i];
        if(array[i] % 2 === 1 && array[i] === number){
          count++;
          if( temp < count ){ 
             temp=count;
            }
        }else if(array[i] % 2===0 ){
            count=0;   
        }
            // }else{
        //     count=1; 
        // }
        
      number=array[i];
      if( temp < count ){
         temp=count;
        }
    }
     console.log(temp);
    }

    longestRepeatedOdd(10,[1,1,1,1,2,2,2,2,1,1])
    