var a = 10;
var b = 20;
var c = 30;

var largest;
// Conditional/Ternary Operator

largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
document.write(largest);