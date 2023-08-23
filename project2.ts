let x:string="mohammad ali";
console.log(`in uppercase ${x.toUpperCase()}`);
console.log(`in lowercase ${x.toLowerCase()}`);
let check:number=0;

for(let i=0;i<x.length;i++){

    if(i===0){

        let j:string=x[i];
        x= x.replace(j,(j.toLocaleUpperCase()));

    }
    if(check==1){

        let j:string=x[i];
       x= x.replace(" "+j," "+(j.toLocaleUpperCase()));


    }
if(x[i]===' ')
check=1;
else{
check=0;

}


}
console.log(`in title case${x}`);