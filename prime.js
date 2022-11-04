let num=10;
function prime(N){
let count=0
for(i=2;i<=N;i++){
if(N%i==0){
count++
}
}
if(count==2){
console.log("is prime")
}
else{
console.log("is not prime")
}

}
prime(num)