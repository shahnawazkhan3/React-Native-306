function abc() {
    return "helow";
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