function palindrome(str){

    var l=0; 
    var r=str.length-1;
    ispal=true;
    while(l<r){
        if(str[l]!==str[r]){
            ispal=false;
            break;
        }else{
            l++;
            r--;
        }
        
    }
    return ispal;
}

console.log(palindrome("racecar"));