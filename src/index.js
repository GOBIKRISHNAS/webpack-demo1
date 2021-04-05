import add from '../javascripts/addition.js'
import dec from '../javascripts/decrement.js'
import div from '../javascripts/division.js'
import exp from '../javascripts/exponentiation.js'
import inc from '../javascripts/increment.js'
import mod from '../javascripts/modulus.js'
import mul from '../javascripts/multiplication.js'
import sub from '../javascripts/subtraction.js'

var a = 10;
var b = 10;

console.log("The addition of ",a," and ",b," is ", add(a,b));
console.log("The decrement of ",a," is ", dec(a));
console.log("The division of ",a," and ",b," is ", div(a,b));
console.log("The exponentiation of ",a," and ",b," is ", exp(a,b));
console.log("The increment of ",a," is ", inc(a));
console.log("The modulus of ",a," and ",b," is ", mod(a,b));
console.log("The multiplication of ",a," and ",b," is ", mul(a,b));
console.log("The subtraction of ",a," and ",b," is ", sub(a,b));