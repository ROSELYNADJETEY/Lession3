// console.log("Hello, World!");


// let username = "Roselyn";
// console.log(username);//Roselyn

// console.log("what is your age?");
// let ages = prompt("what is your age?");
// console.log(age); 





// let num1 = 30;
// let num2 = 90;
// let sum = num1 + num2;


// console.log(num1 + num2); //num1 + num2 = 120
// console.log(num2 - num1); //num2 - num1 = 60
// console.log(num2 / num1); //num2 / num1 = 3
// console.log(num1 * num2); //num1 * num2 = 2700
// console.log(15 % 4); //15 % 4 = 3


// let h =true;
// console.log(h); //true

// let i = false;
// console.log(i); //false 

// let k =  40
// typeof k; //number
// console.log(typeof k); //number 

// let l = "60";
// typeof l; //string
// console.log(typeof l); //string

// // //prompt the user to enter a number
// // //check if the number is even or odd 
// // // display that the number the user entered is even or odd



// let number = prompt ("Enter a number: ")
// if (number % 2 === 0) {
//    alert(`${number} is even.`);
// } else {
//    alert(`${number} is odd.`);
// }


// // Take the user's name 
// // Ask for the age
// // if they are 18 and above,display that they can sign up 
// //if they are less than 18, display that they cannot sign up



// let Username = prompt("What is your name?");
// let answer = prompt("How old are you?");
// if(answer >= 18) {
//     alert(`Hello, ${Username}! "You can sign up for tiktok."`);
// } else {
//     alert(`Hello, ${Username}. "sorry, You are not old enough to sign up for tiktok."`);
// }

// let name = prompt("what is your name?");
// let age = prompt(" how old are you ");
// let email = prompt("enter your Email")

// if ( age < 12){
//     alert(`Hi ${name},You are ${age}. years old and you are too young to register.Sorry😞😞`) 

// }else if(12 < age && age < 18){
//     alert(`Hello ${name}.You are ${age}. years old and you have limited  options to register for .We will keep in touch via your email:${emaiL}.👋👋`)


//  }   else if (age>=18){
//         alert(`Hello${name}.You are ${age}. years old and you can register for any option of your choosing.We will keep in touch via your email:${email}. 👋👋 `)
//  }  else{
//     alert(`You must be 12 years old`)

//  }

function gender(){// crating a function which will determine the gender of the user based on their input.
    let gender = prompt("Enter your gender - male orfemale")//taking an input from the user to determine their gender.and storing it in a variable called gender.

    console.log(gender); // logging the user input to the console for debugging purposes.
    gender = gender.toLowerCase()// converting the user input to lowercase to make the function case-insensitive. This allows the user to enter "
    gender= gender.split(" ").join("")// removing any spaces from the user input to ensure that it can be correctly compared to the expected values
    console.log(gender); // logging the converted user input to the console for debugging purposes.

    
    if(gender == "male"|| gender == " Male`"){//condition to check if the user input is "male".
        alert(" You are a boy!🧑")// alerting the user who they are.or executable once condition is met.
    } else if(gender == "Female"){//condition to check if the user input is "female".
        alert("You are a girl!👧")// alerting the user who they are.
    } else{
        alert("Invalid input. Please enter 'male' or 'female'.")
    }
}

gender();// calling the function to execute the code inside it.making the function run and determine the gender of the user based on their input.


