/* Finding The Largest Number In The Array */

/* Using Simple for Loop (Brute Force)*/

let arr = [10, 5, 8, 20, 15]; 
let largest_no=arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]>largest_no){
        largest_no=arr[i]; 
    }
} 
console.log(largest_no);  // output : 20


/* Using For of Loop */ 

let arr1 = [10, 5, 8, 20, 15]; 
let largest_no1=arr1[0];
for(num1 of arr1){
    if(num1>largest_no1){
        largest_no1=num1;
    } 
    
}
console.log(largest_no1); // output : 20

/* Using redue() method */ 

let arr2 =  [10, 5, 8, 20, 15]; 
let final_value=arr2.reduce((largest_no2,num2)=>(num2>largest_no2?num2:largest_no2)) ;
console.log(final_value); // output : 20

/* Using Spread operator */ 

let arr3 =  [10, 5, 8, 20, 15]; 
let max = Math.max(...arr3);
console.log(max); // output : 20

/* sorting the array */ 

let arr4 =  [10, 5, 8, 20, 15]; 
arr4.sort((a,b)=>b-a);
console.log(arr4[0]); // output : 20