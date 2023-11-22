

//Prints hello x10

for (let i = 0; i < 10; i++) {
    console.log("Hello");
}

//Checks numbers 0-99 in intervals of 1for the conditions of being a multiple of 3, 5
//or both with identifiers of Fizz, Buzz and Fizzbuzz
for (let i = 0; i < 99; i++) {
    console.log; if (i % 5 === 0 && i % 3 === 0) { console.log("FizzBuzz"); }
    else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) console.log("Fizz");
    else { console.log("Out of range"); };
}




let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


for (let i = 0; i < arr.length; i++) {
    console.log; if (i % 5 === 0 && i % 3 === 0) { console.log("FizzBuzz"); }
    else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) console.log("Fizz");
    else { console.log("Out of range"); };
}


//Backwards

for (let i = arr.length - 1; i >= 0; i--) {
    console.log; if (i % 5 === 0 && i % 3 === 0) { console.log("FizzBuzz"); }
    else if (i % 5 === 0) { console.log("Buzz");} 
    else if (i % 3 === 0) console.log("Fizz");
    else { console.log("Out of range"); };
}


const num = [1,2,3,4,5,6,7,8,9,10];
sum1 = 0;

for (let i = 0; i <num.length; i++){
    sum1 += num[i]
    console.log(sum1);
}

let sum = 0;
for (let i = 0; i < 10; i++){;
        sum += i; console.log(sum);}