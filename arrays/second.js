var a=[5,7,3,2,1]
var arr=[];
var max=Number.MIN_SAFE_INTEGER;
for(i=0;i<a.length;i++)
{
    if(a[i]>max)
    {
        max=a[i];
        
    }
}

for(i=0;i<a.length;i++)
{
    if( a[i]<max){
        arr.push(a[i]);
    }
    
}
var secondmax=Number.MIN_SAFE_INTEGER;
for(i=0;i<arr.length;i++)
{
    if(arr[i]>secondmax)
    {
        secondmax=arr[i];
        
    }
}
//console.log(arr)
console.log(secondmax);