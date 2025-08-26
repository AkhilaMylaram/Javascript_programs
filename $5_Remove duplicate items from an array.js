/*Using  For Of Loop */

let fruits1 = ["Apple", "Banana", "apple", "Orange", "banana"];
let nfruits1=[];
for(f1 of fruits1){
    let f11=f1.toLowerCase();
    if(nfruits1.includes(f11)){
        continue;
    } 
    else{
        nfruits1.push(f11)

    }
} 
console.log(nfruits1); 

/* For loop */ 

let fruits2 = ["Apple", "Banana", "apple", "Orange", "banana"]; 
let nfruits2=[];
for(let i=0;i<fruits2.length;i++){
    let f22=fruits2[i].toLowerCase();
    if(nfruits2.includes(f22)){
        continue;
    } else{
        nfruits2.push(f22);
    }
}
console.log(nfruits2);

/* Using filter method */ 

let fruits3 = ["Apple", "Banana", "apple", "Orange", "banana"];  
let nfruits3=[];
let nfruits33=fruits3.filter(item3=>!nfruits3.includes(item3.toLowerCase()) && nfruits3.push(item3.toLowerCase())).map(item=>item.toLowerCase()); 
console.log(nfruits33);

/*Using Reduce method */ 

let fruits4 = ["Apple", "Banana", "apple", "Orange", "banana"];  
let fruits44=fruits4.reduce((acc,item4)=>{
    let item44=item4.toLowerCase();
    if(!acc.includes(item44)){
        acc.push(item44);
    }
    return acc;
},[]);
console.log(fruits44);

/*Using set  */

let fruits5 = ["Apple", "Banana", "apple", "Orange", "banana"].map(item=>item.toLowerCase());
let fruits55=[...new Set(fruits5)]; // Remove duplicates using Set
console.log(fruits55); 

/*Using Map */ 

let fruits6 = ["Apple", "Banana", "apple", "Orange", "banana"];
let fruits66=[...new Map(fruits6.map(item6=>[item6.toLowerCase(),item6.toLowerCase()])).values()];
console.log(fruits66);