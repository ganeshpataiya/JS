// Chapter 6 - prqctice set 
// ques:1- Write a program using prompt function to take inpuit of age as a value from the user and use alert to tell him if he can drive!

// let age = prompt("Enter your age : "); 
// age =Number.parseInt(age);

// using ternary operator
// const drive = age >= 18 ? "you can Drive" : "you can't Drive";
// alert(drive +"\n"+ typeof age);

// using if...else

// if ( age>=18) {
//   alert("you can drive");
// }
//  alert("you can't drive"); 

// ques:2- In Q1 user confirm to ask the user if he wants to see the prompt again

// let runAgain = true;

// const canDrive= (age) =>{
//   return age >= 18 ? true:false
// }

// while(runAgain) {
//   let age = prompt("enter your age");
//   age = Number.parseInt(age);
//   if(canDrive(age)) {
//     alert(" you can drive");    
//   }
//   else{
//     alert(" you can't drive");  
//   }

//   runAgain = confirm("do you wants to play again?")
// }

// Excercise 2 - Snake Water Gun
// prob: use Javascript to create a game of snake water and gun. The game sould ask you to enter S, W, or G. The computer shoud be able to randomly generate, S, W or G and declare Win or Loss using aler. use confirm and prompt wherever it requireds.


const characters = "swg"

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let rendomString = generateString(1).trim();
alert(rendomString)

let userString = prompt("enter s, w, or g", "s") 
userString = userString.trim()

const result = rendomString == "s" && userString == "s" || rendomString == "g" && userString == "g" || rendomString == "w" && userString == "w" || rendomString == "w" && userString == "g" || rendomString == "g" && userString == "w" ? "you loosed!" : "you won !"

alert (result)




