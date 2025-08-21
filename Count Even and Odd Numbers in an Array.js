/* Using For Loop */

let nums = [2, 5, 7, 8, 10, 3]; 
 let even=0;
 let odd=0;

 for(i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        even+=1;
    } 
    else{
        odd+=1;
    }
 } 
 console.log(even,odd); // Output: 3 3 

 /* using For of loop */ 

 let nums1 = [2, 5, 7, 8, 10, 3];  
 let even1=0;
 let odd1=0;
 for( num1 of nums1){
    if(num1%2==0){
        even1+=1;
    }else{
        odd1+=1;
    }
 }
 console.log(even1, odd1); // Output: 3 3 

 /*Using Filter method */ 

 let nums2 = [2, 5, 7, 8, 10, 3]; 
 let even2=nums2.filter(num=>num%2==0);
 let odd2=nums2.filter(num=>num%2!=0);
 console.log(even2.length,odd2.length); // Output: 3 3 

 /* Using reduce method */ 

  let nums3 = [2, 5, 7, 8, 10, 3];  
  let result=nums3.reduce((count,num3)=>{num3 %2===0?count.even3++:count.odd3++; 
    return count;},
    {even3:0,odd3:0}); 
    console.log(result.even3,result.odd3);  // Output: 3 3 

/* Using Bitwise & Operator */ 

  let nums4 = [2, 5, 7, 8, 10, 3];   
  let even4=0;
  let odd4=0;
  for(num4 of nums4){
    (num4 & 1) ? odd4++ : even4++ ;
  } 
  console.log(even4,odd4); // Output: 3 3 

/* Using Map  with counter() */ 

let nums5 = [2, 5, 7, 8, 10, 3];   
let even5=0;
let odd5=0;
nums.map(num => num%2===0?even5++:odd5++);
console.log(even5,odd5); // Output: 3 3 

