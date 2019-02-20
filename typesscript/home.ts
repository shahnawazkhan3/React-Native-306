


function abc() :string{
    return "helow"
}

function show() {
     var a = abc();
     console.log(a);
}

show();
function test_param(n1, s1) {
    console.log(n1);
    console.log(s1);
 }
 test_param(123, "this is a string");

 var dd =function () {
    return "shah"
}

console.log(dd());


var res = function (a, b) {
    return a * b;
 };
 console.log(res(12, 2));
 var myFunction = new Function("a", "b", "return a * b"); 

var x = myFunction(4, 3); 

console.log(x);

(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()  
 
 var foo =()=>10
 
 console.log(foo());


