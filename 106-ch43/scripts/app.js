function sayHello(name, lastName){
    console.log("Hello " + name + "" + lastName);
    let color ="blue";
}

function sum(num1, num2){
const result = num1 + num2;
return result;
}

function init(){

    console.log("hello world");
    let anything = "Adrian";
    sayHello(anything, "Gerardo");
    const result = sum(12,22);
    console.log(result);
}

window.onload = init; // we are forcing the computer to wait


// print neumbers from 1 to 20 except 7 and 13 
// my example:

function number(){

    let number = i

    for (let i = 0; i < 20; i++)

    while (i=7,i=13);

    console.log(number)
} 

// teachers example:
let number = [12,424,23,65,53, 153, 642];
function printNumber(){
    for (let i = 0; i < 21; i++){
        if (i!= 7 && i!= 13){
            console.log(i);
        }
    }
    for (let i =0; i < number.length; i++){
        let num = numbers[i];
        console.log(num);
    }
}