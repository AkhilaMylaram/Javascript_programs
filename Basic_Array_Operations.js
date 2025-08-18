
/* Creating Arrays */

//Method -1 
let fruits=["Apple","Banana","Cherry","Dragon"]; // Creation of Array using array literals 
console.log(fruits) 

//Method -2 
let animals=new Array("monkey","cat","dog","elephant");  // creation of array using new keyword
console.log(animals) 

/*Accesing Array Elements */ 

let numbers=[1,2,3,4,5]; 
console.log(numbers)    // Accessing all the elements in array 

console.log(numbers[0]) // Accessing first Element in array , index starts from zero[0] 

/* length of the Array */ 

let names=["rama","sita","laxman","hanuman"] ;
console.log(names.length); 

/* Adding elements to the Array */ 

let num=[2,4,6,8,10] 
num.push(12) // adding element at the end of the Array
console.log(num);

num.unshift(0); // Adding element at the start of the array 
console.log(num); 

num.splice(1,0,1); // Adding Eleemnt at the Specified Location (index, num of elements to delete from the index, element to add)
console.log(num); 

num[3]=3; // Directly Assigning Value at the specified location
console.log(num);  

/*Removing Elements From the array */ 

let alpha=["a","b","c","d"];
alpha.pop(); //Removing last element from the array
console.log(alpha); 

alpha.shift(); //Removing first Element 
console.log(alpha);

alpha.splice(0,1); //Removing from Specified Location
console.log(alpha); 

alpha.length=0; // Clear All the Elements 
console.log(alpha); 

/* Check  if the element exist */ 

let digits=[9,8,7,6,5,4];
console.log(digits.includes(8)); // check if element exist 
console.log(digits.includes(3)); 

/*Converting array to String */ 

let chocolates=["kitkat","dairyMilk","Munch"];
console.log(chocolates.join(", ")); 

/*Reversing an Array */ 

let flowers=["rose","sunflower","mariegold"];
console.log(flowers.reverse()); 

