console.log("Hello World!");   //Print statement to console
document.write("Hello World!");

// data types
var num = 10;
console.log(num);
console.log(typeof(num));

num = false;
console.log(num);
console.log(typeof(num))

num = "Sanjeev soni";
console.log(num);
console.log(typeof(num))

num = null;
console.log(num);
console.log(typeof(num));

num = undefined;
console.log(num);
console.log(typeof(num));

// function
var sayHello = function(){
    alert("hello world!");
}

sayHello;

// array

var numberArray = [1,2,3]; // static
var animals = new Array("cat", "dog", "mouse", "lion"); // dynamic

// object

var person = {
    name: "Barack Hussein Obama II",
    age: "51",
}

// symbol type

const sym1 = Symbol(4);
console.log(sym1);

const sym2 = Symbol(4);
console.log(sym2);

if(sym1 == sym2 ){
    console.log("true");
}
else{
    console.log("false");
}


