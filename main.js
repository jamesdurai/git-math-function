// let a = 2;
// let b = 3;
// console.log(a+b)
//String Methods    
//concatination
// let concat = "Angular"
// let concat1 = " React"
// console.log (concat +  concat1); 
//Append
// let append = "Angular";
//  append+= " React";
// console.log(append)
//Escaping
// let esc ='she can\'t run'
// console.log (esc)
//Length
// let len ="data"
// console.log(len.length)
// //toUpperCase
// let upper ="angular";
// console.log(upper.toUpperCase())
// //toLowerCase
// let lower ="REACT";
// console.log(lower.toLowerCase())
// //IndexOf
// let index="java script";
// console.log(index.indexOf('i'))
// //LastIndexOf
// let laindex ="java script"
// console.log(laindex.lastIndexOf('a'))
// //CharAt
// let chr ="javascript";
// console.log(chr.charAt(5))
// //CharCodeAt
// let char ="javascript";
// console.log(char.charCodeAt(5))
// //Substring
// let sub ="helloworld";
// console.log(sub.substring(1,5))
// //Slice
// const str ="helloworld"
// console.log(str.slice(-5))
// //split
// let spl = "helloworld";
// console.log(spl.split(""))
// //Replace
// let framework ="react is the best framework";
// let frame = framework.replace("framework","library");
// console.log(framework);
// console.log(frame);
// //Letter.length
// let letter = "     javascript"
// console.log(letter.length);
// //Trim
// let d = letter.trim()
// console.log(d.length)
// //PadStart
// let pad ="2300";
// let pad1 =pad.padStart(6,"test")
// console.log(pad1)
// //PadEnd
// let pad2 =pad.padEnd(6,"*")
// console.log(pad2)
// //Paragraph Concatination using '+' symbol
// let long ="this is a long string that" + " spans multiple lines" + " its very convinenent"
// console.log(long)

// trim()
// slice()
// charAt()
// toString()
// concat()
// subString()
// indexOf()
// toUpperCase()
// lastIndexOf()
// toLowerCase()

//function

// function formatNumber(num){
//     return num.toFixed(3);
// }

// console.log(formatNumber(3));

// //array length - Returns the length of an array
// const fruits = ["banana", 'orange', "apple", "mango"];
// console.log(fruits.length)
// //array tostring - converts an array to a string of (comma separated) array values
// console.log(fruits.toString())
// //array at - get the second index value in the array
// console.log(fruits.at(2))
// //array join - method also joins all array elements into a string
// console.log(fruits.join(" * "))
// //array pop - method removes the last element from an array
//  console.log(fruits.pop())
//  console.log(fruits)
// //array push - method adds a new element to an array (at the end),  method returns the new array length
// console.log(fruits.push("kiwi"));
// console.log(fruits.toString());
//array shift - method returns the value that was "shifted out
// console.log(fruits.shift());
// //array unshift 
// const fruits1=fruits.unshift("lemon");
// console.log(fruits.toString())

// const fruit =["banana","orange","apple","mango"];
// console.log(fruit.splice(2, "lemon","kiwi"));

//Template Literal

// var name ='ram';
// console.log(`welcome to ${name} ${name}`);

// var name =prompt("ente the full name");
// var age =prompt("enter the age");

// var greet = (`hi my name is ${name} and my age is ${age} `);

// console.log(greet);

// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruit.constructor;
// console.log(text)

//Array Creation
//Literal Array - normal
//Instance Array - find via index values
//Constructor Array - 

// var emp = new Array("john","james","dinesh")

// console.log(emp)

// emp [0]="arun";
// emp [1]="mahesh";
// emp [3]="john";
// console.log(emp)

//Array Methods

//concatination method
// const mygirl=["one", "two"];
// const myboy=["three","four"];
// const mychild = mygirl.concat(myboy);
// console.log(mychild)

//Index method
// let indexx = [1,2,3,4,5,6,7,8,9];
// let first = indexx.indexOf(5);
// console.log(first)
// //last indexof

//slice method

let fruit = ["Banana", "Orange", "Apple", "Mango", "Orange", "Apple","Orange", "Apple","Orange", "kiwi"];

//console.log (fruit.slice(2,6))
fruit.splice(2, 4, "jackfruit");
console.log(fruit);

let num =[1,2,3,4,5,6,7,8,9];
num.splice(2,2, "fruit")
console.log(num)
//splice method

//push method/

// let fruit = ["Banana", "Orange", "Apple"];
// fruit.push( "Orange", "Apple","Orange", "Apple","Orange", "Apple")
// console.log(fruit)

//pop ()
//let fruits =["apple", "banana", "Orange"];
// let lastfruit = fruits.pop();
// console.log(lastfruit)

//shift() & un shift ()
    // let lastfruit = fruits.shift();
    // console.log(fruits);
// let unfruit= fruits.unshift("grape");
// console.log(fruits);

//reverse()
// let firstfruit =fruits.reverse();
// console.log(fruits);

// // Includes
// let inclfruit = fruits.includes('watermelon');
// console.log(inclfruit)

//every ()
// let arr1 = [25,30,24,17,19];
// let adult = arr1.every(age => age = 18);
// console.log(adult);
//some()
// let adult = arr1.some(age => age <= 18);
// console.log(adult);
//find ()
// let adult = arr1.find((element) => element > 24);
// console.log(adult);
// isarray()
// let arr2=[false]
// console.log(Array.isArray(arr2))

//entry

// let fruit = ["orange","apple", "banana", " ","grape", "watermelon"]
// let fruits = fruit.entries();

// for (let entry of fruits){
//     console.log(entry)
// }
// fill()
//console.log(fruit.fill('kiwi',2,4))
// sort()
//console.log(fruit.sort())
//for each ()
// let a = [2,4,6,8,10];
// let b=[];
// a.forEach(value=>{
//     b.push(value*2)
// })
// console.log(b)
//map
// let b=a.map(value=>
//     (value*2)
// )
// console.log(b)
//filter

// let a = ["apple", "orange", "kiwi", "grape"];
// let b = a.filter (a=> a.length ===4)
// console.log(b);

// let a = [
//     { name: 'apple', category: 'fruits', price: 120 },
//     { name: 'swift', category: 'vehicle', price: 80 },
//     { name: 'dog', category: 'animal', price: 110 },
//     { name: 'dog', category: 'animal', price: 500 },
//     { name: 'banana', category: 'fruits', price: 90 }
//   ];
  
//   let b = a.filter(item => item.category === 'animal' || item.price > 100);
  
//   console.log(b);

// //reduce ()
// let a = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   let b = a.reduce((firstValue, currentValue) => firstValue.concat(currentValue));
//   console.log(b);
  // keys()
// let a =['apple', 'orange', 'grape', 'kiwi']
// let b = a.keys()
// for (let keys of b)
// {
//     console.log(keys)
// }
// values()
// let b = a.values()
// for (let keys of b)
// {
//     console.log(keys)
// }
 //flat ()
// let a = [[1,1,2],[2,2,4],[3,3,6]]
// let b = a.flat()
// console.log(b)

// //joint
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join("#");
// console.log(text)


// let array = [86, 7, 4332, 873, 4532, 993, 416, 873, 91];

// function findDuplicates(arr) {
//     let seen = {};
//     let duplicates = [];

//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//         if (seen[value]) {
//             duplicates.push(value);
//         } else {
//             seen[value] = true;
//         }
//     }

//     return duplicates;
// }

// let duplicateValues = findDuplicates(array);
// document.write("Duplicate values:", duplicateValues);




