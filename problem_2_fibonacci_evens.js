/* 08/04/17 Notes:
The computeFibonacci function calculates the next Fibonacci numbers
by adding A and B with A initially set to zero up to 1000 times (via variable N).
I determined that passing the function that many times would be more than enough
to reach the desired max value of 4000000. The problem asks for only evens so I used
modulus to only push to array if the Fibonnaci number is even.
After that the Total function sums all the items in the array together.*/

var n = 1000;

function computeFibonacci(){
    var fibonacciArr = [];
    var a = 0, b = 1, f = 1;
    for (i = 2; i <= n; i++){
        f = a + b;
        a = b;
        b = f;
        if (f % 2 === 0){
        fibonacciArr.push(f);
        }
        if (f >= 4000000) {
            break
        }
    }
    var total = fibonacciArr.reduce(function (a, b) {
        return a + b;
    });
    document.getElementById("output").innerText = fibonacciArr.join(', ');
    document.getElementById("total").innerText = total;
}