let megicians:string[]=["luqman","ahmed","doreamon"];
let show_magicians=(a:string[])=>{
console.log("the magcicians are "+a);



}
let make_great=(a:string[])=>{
for(let i=0;i<a.length;i++){

a.splice(i,1,"Great "+a[i]);


}
return a;



}
let b=make_great(megicians.slice(0,megicians.length));

show_magicians(megicians);
show_magicians(b);
