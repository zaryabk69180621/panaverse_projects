let arr1:string[]=["admin","eric","James","CHristopher","Camaron"];
if(arr1.length==0){
console.log("we need some more users!!!");


}
for(let i=0;i<arr1.length;i++){
if(arr1[i]==="admin"){
console.log(`Hello ${arr1[i]} would you like to see the status report`);
}
else {

console.log(`HI ${arr1[i]},thanks for logging in again`);

}


}


