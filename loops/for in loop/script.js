
/* for(key in object){

 } */

const person ={
    fname: "bhavesh",
    lname: "joshi",
    age: 25
};
for(let x in person){
    console.log("person details"+ x +  ": " +  person[x])
}