// FUNCTIONS

// function (){
    // function bodu
// }

//Anonymous Function

// var test = function (){
//     console.log ("This is an anonymous function!");
// };
// test ();

// var test = function (platform) {
//     console.log("This is an anonymous", platform );
// }
// test ("second example function");

//this 

//


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         console.log(this.firstname + ' ' + this.lastname);
//     }
// }
// pokemon.getPokeName();
// var pokemonName = function(snack, hobby) {
//     console.log(this.firstname +' '+this.lastname + 'I choose you!');
//     console.log(this.firstname +' '+this.lastname + 'loves ' + snack + ' and ' + hobby);
// };

// var logPokemon = pokemonName.bind(pokemon);
// logPokemon('sus hi', 'algorithms')

// let person ={
//     name:"sam",
//     age: 26,
//     city: "chennai",
//     method: function (){
//         console.log (this.name , this.age);
//     } 
// };
// person.method();
// // console.log(person.method());
// // console.log(`my name is ${this.name}`);

// function name(a,b,c){
//     console.log (this.name, "your mark is", a+b+c)
// }
// name.call(person, 34,38,39);
// name.apply(person, [20,20,20]);
// var print = name.bind(person, 20,202,54);
// print ();

// const x = function(a,b){
//     return(a*b)
// }
// console.log(x(2,99999999))

// var a=3;
// console.log(a)
//  a =6;
// console.log(a)

