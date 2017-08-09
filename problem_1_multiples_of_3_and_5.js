/* 08/07/17, Notes:
The first function was to find the target numbers under 1000.
The problem I encountered was that numbers in the array would repeat.
This is because the numbers would be checked twice between each if statement.
The solution was to combine the two checks into one if statement with an OR operand.
Then, to sum another loop adds everything together at the end.
I tried other methods to sum the values but couldn't get those to work as easily as a
simple loop.

This solution will give an answer value 1000 higher than what ProjectEuler accepts but
their instructions were unclear (to me)!! They ask for all values under 1000 so I set my value to 1000
but in reality they're looking for UP TO 1000 so your target should be 999 and the below 
will evaluate correctly.*/

var n = 999;

function computeThreesAndFives(){
    var threesAndFives = [];
    var total = 0;
    for (i = 1; i <= n; i++){
        if (i % 3 === 0 || i % 5 === 0){
        threesAndFives.push(i);
        console.log(threesAndFives);
        }
        /*if(i % 5 === 0) {
        threesAndFives.push(i);
        console.log(threesAndFives);
        }*/
    }
    /*var total = threesAndFives.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
    })*/

    /*var total = [threesAndFives[0]];
    for (var i=1; i<threesAndFives.length; i++) {
        if (threesAndFives[i]!=threesAndFives[i-1]) 
            total.push(threesAndFives[i]);
            console.log(total);
    }*/
    
    /*for (i = 0; i < threesAndFives.length; i++){
        total = total += threesAndFives[i];
        console.log(total);
    }*/

    for (i = 0; i <= n; i++){
        if (i % 3 === 0 || i % 5 === 0){
        total = total += i;
        console.log(total);
        }
    }


    /*var total = threesAndFives.reduce(function (a, b) {
        return a + b;
    });*/
    document.getElementById("output").innerText = threesAndFives.join(', ');
    document.getElementById("total").innerText = total;
}