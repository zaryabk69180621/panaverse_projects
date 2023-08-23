let existinguser:string[]=["ali","abdul","ahsan","karim","baba"];
let newuser:string[]=["ahmad","bilal","KARIM","Ahsan"];
let var1, var2; let checker=0;
for(let i=0;i<newuser.length;i++){
    checker=0;
var1=(newuser[i].toUpperCase());
for(let j=0;j<existinguser.length;j++){
    var2=existinguser[j].toUpperCase();
if(var1===var2){
checker=1;

}


}
if(checker==1){
console.log(var1+"should not be accepted");



}
else{
console.log(newuser[i]+" is availible");

}

}



