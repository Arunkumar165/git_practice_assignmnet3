 
let num="naman"
function palin(str){


let flag=true
for(ley i=0;i<=str.length-1;i++){
if(str[i]!=str[str.length-1]){
flag=false;
}

}
console.log(flag)
}
console.log(palin(num))