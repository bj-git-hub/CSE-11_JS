const classItem = document.getElementsByClassName("Myclass")[0];
classItem.innerHTML = "Hello";
classItem.style.color = "red";

const paragraph = document.getElementsByTagName("p")[0];
paragraph.innerHTML = "Paragraph changed";
paragraph.style.fontSize = "20px";

const para = document.getElementById("para");
para.innerHTML = "Updated text";
para.style.backgroundColor = "yellow";
para.style.padding = "10px";



const test =document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor= "green";
test.style.padding="10px";
console.log(test);

const test2=document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="pink";
    test2[x].style.margin="10px";
    test2[x].style.color ="blue";
}
console.log(test2);

const element = document.getElementById("myH1");
// get attribute
// let text = element.getAttribute("class");
// document.getElementById("demo").innerHTML = text;

// //set attribute
// element.setAttribute("class", "democlass");


