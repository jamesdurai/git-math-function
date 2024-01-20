//if else statements

// var a = prompt("Enter the number");
// if (a > 10) {
//     document.write("value is greater than 10");
// }
// else {
//     document.write("value is less than 10 ")
// }

//even or add

// let input = prompt("Enter the Number")

// if(input % 2==0){
//     document.write(`${input} is a even number`)
// } else {
//     document.write(`${input} is  a odd number`)
// }
// number or not

// var input = prompt("Enter the input");
// if (isNaN(input)){
//     document.write(`${input} is not a number`)
// }
// else {
//     document.write(`${input} is a valid number`)
// }

//if else if

// var num1 = prompt("Enthe the input 1");
// var num2 = prompt("Enter the input 2");
// if (num1 > num2){
//     document.write(`${num1} is the largest number`)
// }
// else if (num1 < num2){
//     document.write(`${num2} is the largest number`)
// }
// else {
//     document.write(`${num1} is equal to ${num2}`)
// }

// Find the largest side

// let side1 =prompt ("Enter the Side 1");
// let side2 =prompt ("Enter the Side 2");
// let side3 =prompt ("Enter the Side 3");

// if ((side1 == side2) && (side2 == side3)){
//     document.write(`It\'s a Eqilateral Triangle`)
// }
// else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
//     document.write(`It\'s a Isosceles Triangle`)
// }
// else {
//     document.write (`It\'s a Scalene Triangle`)
// }

// find year is leap or not

// let year = prompt("Enter the Year");

// if (((year%4 ==0)&&(year%100 !==0)||(year%400 ==0))){
//     document.write(`Year ${year} is a Leap Year`)
// }
// else {
//     document.write(`Year ${year} is not a leap year`)
// }

// Different types of Loops

//for loop
//for in loop
// for of loop
// while loop
//do-while loop

//for loop 

// const n = prompt("Enter the number between 1-100");

// for (i=1;i<=n;i++){
//     document.write ("i")
// }


    // const numbers=[1,3,4,5,3,1,5];
    // const duplicates= numbers.filter((element, index) => element !==numbers.indexOf(element));
    // console.log(duplicates);

//  
//   const numbers = [1, 3, 4, 5, 3, 1, 5];

// const duplicates = numbers.filter((element, index) => numbers.indexOf(element) !== index);

// console.log(duplicates);

// const numbers = [1, 2, 3, 4, 1, 2];
// const duplicates = numbers.filter((element, index) => element !== numbers.indexOf(element));
// console.log(duplicates); // [1, 2]

const numbers = [1, 2, 3, 4, 1, 2];
const duplicates = new Set();
numbers.forEach((element) => {
  if (duplicates.has(element)) {
    duplicates.add(element);
  }
});
console.log(duplicates); // [1, 2]
