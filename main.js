//Global variables
const slideOutAd = document.getElementById('slideout-ad');


// Slide out after 3

setTimeout(() => {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
}, 3000);

//******************************************************************************
// Function Declaration
// setTimeout(showSlideOutAd, 3000); /// Use this with the next item below and it works as well

// Slide out with animation- removing hide class/ adding show class
//Arrow
// function showSlideOutAd() {
//   slideOutAd.classList.remove('hide');
//   slideOutAd.classList.add('show');
// };

//******************************************************************************


//Other option
// function slideOutAd() {
//   slideOutAd.classList.remove('hide');
//   slideOutAd.classList.add('show');
// }
//
// setTimeout(slideOutAd, 3000);
//
//


/* //Vanilla Javascript funciton expression
var showSlideOutAd = function() {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
}

//vanilla js/ES6 function declaration
function showSlideOutAd() {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
}
*/
