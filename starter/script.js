'use strict';

// Modal Review //

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closedModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closedModal();
  }
});
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
//when we use .querySelector with multiple elments with the same selector, only the first one will be selected.
// const btnsOpenModal = document.querySelector('.show-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

//can click on all 3 buttons.
//hidden class on modal and overlay are taken away.
//function (closeModal) allows you to click on 'X' to exit or press on the overlay itself to exit.
//Function expressions of 'openModal' and 'closeModal' hold the code to not violate DRY and keep things in order. DO NOT CALL THE FUCNTION.//

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

//Esc Key and keyboard events//
//keyup is when we let go of the key, key press will fire continously as we keep our finger on a certain key. key down is when you click the button down.//
//listening to events everywhere. In order to know what button specifically was pressed we need to capture the object. That is doen by giving the function a parameter (event). *It can be named anything*.//
//As the even occurs, JS will call this function wi the event object as an argument. This works because we are not calling this function ourselves, but rather we are defining it here. So JS call this function when a key down event occurs please pass the event object as an argument.
// document.addEventListener('keydown', function (event) {
//   console.log('A Key Was Pressed');
//   console.log(event.key);
//We only want close the modal is visible. How can we tell if the modal is invisible? If modal contains the class 'hidden'.
/*if (event.key === 'Escape') {
    //check if the modal has the 'hidden' class selected//
    //It reads: 'if the modal DOES NOT(!) contain the 'hidden' class, then close the modal.
    if (!modal.classList.contains('hidden')) {
      //we do need to call the function this time because when the functino is executing something needs to happen as it reaches the end of the line. and what needs to happen is the code in the closeModal function expression.
      closeModal();
    }
  }*/

//Aggregated code//
//Reads as: if the pressed key is 'Escape' and the modal does not contain the hidden class, then execute the closeModal function.

//   if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

/*Pre-Code
//the for loop loops over the note list (an array holding all of the buttons).
//.addEventListener method will respond to a click event. and the function will contain code that should be executed when clicked.//

for (let i = 0; i < btnsOpenModal.length; i++)
  //btnsOpenModal[i] at position i is the current button element at each iteration
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');

    //displaying the modal: the modal is in the HTML but is hidden with the 'hidden' class. We have a variable already made (modal) that houses the class that we want. multiple things can be selected in the .remove as well, ('hidden', 'xxx' the '.hidden' will not work here, and only works for the querySelector.//

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    //hiding the modal:
    btnCloseModal.addEventListener('click', function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    });
  });

//How to close the modal and overlay without pressing the X button//
//this code should look familiar and violates DRY. so we can put it into a function expression called const closeModal. We can then get rid of the code in the places that use the same code and have it call the function expression (see top code). The same thing can be done with the btnsOpenModal code. Maek a function expression with the const openModal. //
//we must keep the function anonymous (not parentheses) because then it will be called as soon as it is loaded. Instead we want the function only to be called when the click even occurs. 

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

//
});*/
