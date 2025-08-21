/* Using For Loop */

let arr1 = [1, 2, 3, 4, 5]; 
let sum1=0; 
for(i=0;i<arr1.length;i++){
    sum1+=arr1[i]*arr1[i];
} 
console.log(sum1); //Output: 55

/* using For-Each Loop */ 

let arr2 = [1, 2, 3, 4, 5]; 
let sum2 =0;  
for(num2 of arr2){
    sum2 += num2*num2;
} 
console.log(sum2); //Output: 55


/* Using map + reduce */ 

let arr3 = [1, 2, 3, 4, 5]; 
let newarr3=arr3.map(num3=>num3*num3).reduce((sum3,value3)=>sum3+value3,0);
console.log(newarr3); //Output: 55


/* Using only reduce() */ 

let arr4=[1,2,3,4,5];
let sum4=arr4.reduce((total,value4)=>total+(value4*value4),0);
console.log(sum4); //Output: 55



