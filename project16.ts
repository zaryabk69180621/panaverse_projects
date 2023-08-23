let guestlist:string[]=["Abdulrehman", "Ali","Bilal"];

for(let i=0;i<guestlist.length;i++){

console.log("HI",guestlist[i]+",");
console.log("I am delighted to invite for a dinner that is planned today at my house at 7 Oclock,\nYour presence will be highly appreciated\nRegards,\nZaryab Khan\n\n");


}
console.log("Ali wont be able to make it so we shall instead invite ahmed");

let x:number=guestlist.indexOf("Ali");

guestlist.splice(x,1,"Ahmed");

for(let i=0;i<guestlist.length;i++){

    console.log("HI",guestlist[i]+",");
    console.log("I am delighted to invite you for a dinner that is plnned today at my house at 7 Oclock,\nYour presence will be highly appreciated\nRegards,\nZaryab Khan\n\n");
    
    
    }

console.log("we have got some more slots that can be filled by the guestS!!!");
console.log("Inviting touseef and Amir along with everybody else");
guestlist.unshift("Touseef");
guestlist.push("Amir");
for(let i=0;i<guestlist.length;i++){

    console.log("HI",guestlist[i]+",");
    console.log("I am delighted to invite you for a dinner that is plnned today at my house at 7 Oclock,\nYour presence will be highly appreciated\nRegards,\nZaryab Khan\n\n");
    
    
    }
