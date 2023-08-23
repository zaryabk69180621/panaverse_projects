let make_album=(a:string,b:string,c:number)=>{
if(!c){
    let album={
artistname:a,
title:b}
return album;


}
else{

    let album={
        artistname:a,
        title:b,
        numberofrecords:c
        }
return album;
}

}

console.log(make_album("atif","goonj"));
console.log(make_album("ali azmat","junoon",40));