let employees=[];

function addEmployee(){

let name=document.getElementById("name").value;
let id=document.getElementById("id").value;
let salary=parseFloat(document.getElementById("salary").value);
let dept=document.getElementById("dept").value;

let emp={
name:name,
id:id,
salary:salary,
dept:dept
};

employees.push(emp);

}

function displayAll(){

let out="All Employees <br>";

for(let e of employees){
out+="Name:"+e.name+" ID:"+e.id+" Salary:"+e.salary+" Dept:"+e.dept+"<br>";
}

document.getElementById("result").innerHTML=out;

}

function filterSalary(){

let out="Employees Salary > 50000 <br>";

let filtered=employees.filter(e=>e.salary>50000);

for(let e of filtered){
out+="Name:"+e.name+" Salary:"+e.salary+"<br>";
}

document.getElementById("result").innerHTML=out;

}

function totalSalary(){

let total=0;

for(let e of employees){
total+=e.salary;
}

document.getElementById("result").innerHTML="Total Salary Payout : ₹"+total;

}

function averageSalary(){

let total=0;

for(let e of employees){
total+=e.salary;
}

let avg=total/employees.length;

document.getElementById("result").innerHTML="Average Salary : ₹"+avg;

}

function countDept(){

let dept=document.getElementById("dept").value;

let count=employees.filter(e=>e.dept==dept).length;

document.getElementById("result").innerHTML="Employees in "+dept+" : "+count;

}