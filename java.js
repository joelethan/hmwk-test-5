
var myName = prompt("Hello there! What is your name?");
console.log(myName);

var answer1 = prompt("Hi " + myName + "! Christmas is coming... On a scale of 1 to 10, how prepared are you for this Holiday?", "answer from 1 (not at all) to 10 (totally ready)");

function prepared() {

    if (answer1 < 4) {
        alert ("OMG! Okay, let's not stress... Plan out the remaining days until Christmas with a to-do list. Good luck!"
        );
    } else if (answer1 >= 4, answer1 <= 7) {
        
        alert ("Not too shabby... Make a to-do list for the remaining tasks. Merry Christmas!"
        );
        } else {
            
            alert( "Wow, super impressive... Now just sit back and relax! Happy Holidays!");

            }
        }
    

var message1 = prepared ();
console.log(message1);

