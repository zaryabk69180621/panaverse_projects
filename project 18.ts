const placetovisit:string[]=["Mecca","Medina","Prague","Paris","Santorini","Dubai"];
console.log("the place i want to visit are "+placetovisit);

console.log("In Alphabetical order:" + (placetovisit.slice(0,placetovisit.length)).sort());
console.log("the original list is:"+placetovisit);
console.log("In Reverse order:"+(placetovisit.slice(0,placetovisit.length)).reverse());
console.log("the original list is:"+placetovisit);
placetovisit.reverse();
console.log("the array in reverse order is:"+ placetovisit);
placetovisit.reverse();
console.log("the array is again reversed:"+ placetovisit);
placetovisit.sort();
console.log("teh sorted original array is"+placetovisit);
placetovisit.reverse();
console.log("the reverse sorted original array is "+placetovisit);