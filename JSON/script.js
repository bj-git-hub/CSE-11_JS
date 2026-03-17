let text = '{"employees":['+ '{"firstName": "John", "lastName": "Doe"},'+
'{"firstName": "Anna", "lastName": "Smith"},' + '{"firstName": "Alan", "lastName": "Walker"}]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;
