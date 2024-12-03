//Spread opearator is also a special syntax which is used to unpack the 
//values from array's or properties from objects into individual elements


//Array Destructuring
const arr1=[1,2,]
const arr2=[...arr1,3,4,5]
console.log(arr2) //output: [1, 2, 3, 4,


//Object Destructuring.
const obj={
    a1:1,
    a2:2,
}
const obj2={...obj,a3:3,a4:4,a5:5}
console.log(obj2)