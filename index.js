//In order to add eventlistener to our all buttons, we should use a for loop. Also, we can know how many elements having drum class by using querySelectorAll(".drum").length.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i =0; i<numberOfDrumButtons; i++) {

 // Detecting Button Press
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML= this.innerHTML; // "this" helps us to understand which button is triggered.
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); // In the buttonAnimation, the parameter "currentKey" is equal to "buttonInnerHTML" when this function is called in this line. 
  
  } );

}
// Detecting Keyboard Press
document.addEventListener("keydown" , function(event) {
  makeSound(event.key);
  buttonAnimation(event.key); // In the buttonAnimation, the parameter "currentKey" is equal to "event.key" when this function is called in this line. 
});

function makeSound(key) {
  switch (key) {  //Switch helps us to match  the correct sound and button.
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;   // when there is a break, case is done. Therefore, we specify new case for other buttons.              
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log(buttonInnerHTML) //defualt plays a role as else, if switch has different button than cases, then this line will work.
      break;
  }
}

function buttonAnimation(currentKey){ // Thanks to this buttonAnimation function, we can apply a bacground for buttons pressed.
  var activeButton=document.querySelector("."+ currentKey); // In this line, we select our button object
  activeButton.classList.add("pressed"); // We can add "pressed" class to our button object
  setTimeout( function(){ // Since background of the buttons is permenant, we have to add a delay to obtain original button view. In order to do that, we apply a setTimeout method. This method containts two parameter. First is function, second is delay time.
    activeButton.classList.remove("pressed")
  },100);
}
    
/*
document.querySelector("button").addEventListener("click",handleClick); //If we add paranthesis to our handleClick function, there will be a problem. When we refresh the page, "I got clicked " message will be there immediately (If we add paranthesis to our function, this means that we are calling our function, so it will be triggered without clicking.) that we do not want. Therefore, we shouldn't add paranthesis to our function in eventlistener.

  We can also use an anonymous function in there. document.querySelector("button").addEventListener("click", function() {
   alert("I got clicked!");

   // write whatever you want from your function when click detected.
 } ); 

function handleClick() {
  alert("I got clicked!");
} 
*/


