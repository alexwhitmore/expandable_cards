'use strict';

/*
The variable panels is using the querySelectorAll because there are more than one panel, and within the parenthesis of the selector, we input the class name
*/
const panels = document.querySelectorAll('.panel');

/*
--> forEach is a higher order array method, executes a provided function for each array element. forEach methods take in a function as an argument whether its function() or an arrow function like, () =>

--> In the parenthesis of the forEach method, we pass in a parameter, in this case we use the singular panel

--> Then we add in an event listener which essentially listens for an action and in this case we want it to listen for a CLICK

--> Then after we listen for the click, we want to pass in another function which will actually perform something. panel.classList will give us a list of all the classes within the panel... then we will use a built in method called .add to add in the 'active' class

--> So we loop over the array of panels (cards), and perform a function on each item. This function is the event listener which is waiting to be clicked. Once the panel is clicked, it will add the 'active' class to that panel. This will make it so the active panel is the card opened up for viewing and the text within the card is showing up
*/
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

/*
--> In the first function, once you clicked a card, it remained open because it added the class active to every panel, so we needed to add the removeActiveClasses(); function

--> So after the function is added in, it's just waiting to be called in order to actually perform a task. Below we call the function, use another forEach method and use the panel class name as the parameter again

--> After, we get another list of all the class names in the panel array using panel.classList and use another built in function called .remove

--> The events go: loop through the array and wait for the click, once clicked all panels get the active class removed, and the clicked panel gains the active class. 
*/

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
