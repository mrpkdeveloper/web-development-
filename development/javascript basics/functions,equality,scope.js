function inc(x, y) {
    console.log(x + 1);
}
inc(4);
inc('hello');
// print hello1 
inc(true);
// prints 2 (true=1 1+1=2) 

console.log(1 == '1');
// prints true because == is a non strict comparator 
console.log(1 === '1');
// prints false because === is a strict comrator 

console.log('11' - 1)
//prints 10 string is typecast to number
console.log([] == "");
console.log([] == 0);
// this means that empty array can typecast to 0 as well as an empty string 

b = 20 //global scope
var d = 30; // function scope
let c = 50; // block scope

function fun() {
    let a = 5;
    if (a == 5) {
        var f = 10;
        console.log('inside ' + f)
        console.log('inside ' + b)
    }
    console.log('outside ' + f)
    console.log('outside ' + b)
}

fun()