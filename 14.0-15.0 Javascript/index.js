// Exercise 1 - Tweet Character Limit Indication Alert

var characterLimit = 140
var string = prompt("input tweet here")

alert(
  "You have used" +
    " " +
    string.length +
    " " +
    "characters and you have" +
    " " +
    (characterLimit - string.length) +
    " " +
    "characters left",
)

// Exercise 2 - Dog Age Calculator

var dogAge = prompt("How old is your dog?")

var humanAge = (dogAge - 2) * 4 + 21

alert("If your dog was a human, it would be " + humanAge + " years old!")

// Exercise 3 - Amount of time remaining until age 90 calculator

function lifeInWeeks(age) {
  //Write your code here.
  var day = 365
  var week = 52
  var month = 12
  var remainingYears = 90 - age
  lifeInWeeks = Math.floor(remainingYears * week)
  lifeInDays = Math.floor(remainingYears * day)
  lifeInMonths = Math.floor(remainingYears * month)
  console.log(
    "You have " +
      lifeInDays +
      " days, " +
      lifeInWeeks +
      " weeks," +
      " and " +
      lifeInMonths +
      " months left.",
  )
}

lifeInWeeks(27)

// Exercise 4 - BMI Calculator

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
  var yourBmi = Math.round(weight / (height * height))

  console.log("Your BMI is " + yourBmi)

  return yourBmi
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

var bmi = bmiCalculator(65, 1.8)

// Exercise 5 - Love Calculator

var person1 = prompt("Enter your name")
var person2 = prompt("Enter the name of your crush")

var percentage = Math.random() * 100
percentage = Math.floor(percentage) + 1

if (percentage > 70) {
  alert(
    "Your love chemistry percentage is " +
      percentage +
      "%!" +
      " You love each other as much as Kanye loves Kanye",
  )
}

if (percentage > 30 && percentage <= 70) {
  alert("Your love chemistry percentage is " + percentage + "%!")
}

if (percentage <= 30) {
  alert(
    "Your love chemistry percentage is " +
      percentage +
      "%!" +
      " You go together like oil and water.",
  )
}

// Exercise 6 - BMI Calculator 2.0

function bmiCalculator(weight, height) {
  var yourBmi = Math.round(weight / (height * height))

  if (yourBmi < 18.5) {
    return "Your BMI is " + yourBmi + ", so you are underweight."
  }

  if (yourBmi > 18.5 && yourBmi < 24.9) {
    return "Your BMI is " + yourBmi + ", so you have a normal weight."
  }

  if (yourBmi > 24.9) {
    return "Your BMI is " + yourBmi + ", so you are overweight."
  }

  return yourBmi
}

// Exercise 7 - Leap Year Checker

function isLeap(year) {
  var leapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
  if (leapYear == true) {
    return "Leap year."
  } else {
    return "Not leap year."
  }
}

// Exercise 8 - Guest List Checker

var guestName = prompt("Enter your name")
var guestList = ["John", "James", "Jack", "Jamal"]

if (guestList.includes(guestName)) {
  alert("Welcome " + guestName + "!")
} else {
  alert("Sorry, maybe next time.")
}

// Exercise 9 - FizzBuzz Game

var output = []
var count = 1

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz")
  } else if (count % 3 === 0) {
    output.push("Fizz")
  } else if (count % 5 === 0) {
    output.push("Buzz")
  } else {
    output.push(count)
  }

  count++

  console.log(output)
}

fizzBuzz(); // Run this after the initial code to get the output. (15 times until FizzBuzz)

// Exercise 10 - Who's Buying Lunch?
function whosPaying(names) {
  /******Don't change the code above*******/

  var randomName = Math.floor(Math.random() * names.length);

  // This code snippet generates a random index within the range of the length of the names array. 
    // It uses the Math.random() function to generate a random decimal number between 0 and 1, 
    // multiplies it by the length of the names array, and then uses Math.floor() to 
    // round down to the nearest whole number. The resulting value is assigned to the randomName variable.

  return names[randomName] + " is going to buy lunch today!";

  // This line of code returns a string stating that a randomly selected person from the names array 
  // will buy lunch today. The randomName variable holds the index of the randomly chosen person.

  /******Don't change the code below*******/
}

// Exercise 11 - Fizz Buzz - While Loops

var output = [];
var count = 1;
function fizzBuzz() {

  while(count <= 100) {

  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;

}

  console.log(output);
  
}

fizzBuzz(); // Run this and it will give you the first 100 numbers.

// Exercise 12 - 99 Bottles of Beer on the Wall usings WHILE loops

function bottlesOfBeer() {
  var numberOfBottles = 99; // The number of bottles of beer on the wall

  while (numberOfBottles > 0) {
    console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down, pass it around, " + (numberOfBottles - 1) + " bottles of beer on the wall.");
    numberOfBottles--;
  }

  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

// Exercise 13 - 99 Bottles of Beer on the Wall using FOR loops

function bottlesOfBeer() {
  // The number of bottles of beer on the wall

 for (var numberOfBottles = 99 ; numberOfBottles > 0; numberOfBottles--) {
   console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down, pass it around, " + (numberOfBottles - 1) + " bottles of beer on the wall.");
 }

 console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

// Exercise 14 - Fizz Buzz - FOR Loops

var output = [];

function fizzBuzz() {

  for(var count = 1; count < 101; count++) {

  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

}

  console.log(output);
  
}

fizzBuzz(); // Run this and it will give you the first 100 numbers.

// Exercise 15 - Fibonacci Sequence Generator

function fibonacciGenerator(n) {
    var output = [];
    var firstNumber = 0;
    var secondNumber = 1;

    if (n === 1) {
        output.push(0);
    } else if (n === 2) {
        output.push(0);
        output.push(1);
    } else {
      for (var count = 0; count < n; count++) {
          output.push(firstNumber);
          var nextNumber = firstNumber + secondNumber;
          firstNumber = secondNumber;
          secondNumber = nextNumber;

        }

    return output;
  }    
}