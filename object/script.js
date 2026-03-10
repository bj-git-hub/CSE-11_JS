let person = new Object();

person.name = 'John';
person.age = 30;
person.isMarried = true;

person.address = {};
person.address.street = "nagar road"; // first way
person['address']['flatNO'] = 44; //second way

document.write(person.name);
document.write('</br>');
document.write(person.address.street);
