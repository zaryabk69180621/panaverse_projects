function car(manufact:string,mode:number,arg:number){
console.log(arguments.length);
let obj={

manufacturer:manufact, model:mode


}
let name: string;
for(let i=arguments.length-arg;i<arguments.length;i++){
    name=arguments[i].split("-");
  
obj[name[0]]=name[1];


}
console.log(obj);


}
car("mazda",2022,2,"color- red","engine-1300cc");