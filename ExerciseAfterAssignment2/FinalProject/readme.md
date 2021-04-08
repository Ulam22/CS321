##Exercises after Assignment 2##

- [X] In an "Owning it" exercice in the book you created an onclick event handler which popped up a confirm box prior to executing the link.   (If you didn't do the book exercise, do it now).  
You are now going to put  that code in a function and use the on() method to attach it to every anchor tag which has a class checkFirst.
- [] Using the Table of Contents for this course at http://web.simmons.edu/~menzin/CS321/CS321_TOC.html add the checkFirst class to none of the Unit links but to all the chapter links (Hint: they are in a nested ul.)
- [] Then in your $(document).ready() function add the super annoyting code for the confirm box to all the appropriate links.
- [] Test your code, making sure that the confirming code doesn't bubble up.


The Unit links are all immediate children of <body>.  
- [] Add a class unit to them.
- [] You are going to add "collapse all" and "expand all" buttons to the page by 
attaching a delegated handler for the elements with the unit class that changes all their descendents' display to 'block' or 'none'.  (Of course, you could use show() and hide(), but since the page is already using the display attribute, let's stick to that.)


- [X] Choose a small, cute icon and prepend it to the name of each Unit.
- [] Style the page so that the Unit headings are in a larager font than the chapter headings.  You have a choice – discuss which is easier before you implement it: You can have a general style for the whole page and override it for the Unit headings or you can have a general style for the whole page and override it for the Chapter headings.  Think about inheritance before you make your choice.


- [] Make sure you understand all the code in Chapter 6.   If you haven't gone thru it all and the associated pages carefully, now is the time to do so.


In the Form Validation project you had several types of elements which you had to validate.
Now that you know more about jQuery, and considering also the information at https://webaim.org/techniques/formvalidation/#form  and https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute is there anything you could do to simplify adding/removing error messages.   
- [] Is there anything you could do to simplify your page set-up?

##NOTES:## 
- webaim recommends alerts as an arai-compliant way to point out errors.
- The MDN page compiles a (possibly long) alert message with all the errors.
- Discuss in your group how many items it is reasonable to include in one error message – how much the user will be able to retain.
- When an alert identifies only one item as invalid, it is common to return the focus to that item. Read about the focus() method both as a DOM method https://www.w3schools.com/jsref/met_html_focus.asp and using jQuery https://www.w3schools.com/jquery/event_focus.asp Of course, if your validating function has already identified the element in question, it will be easy to write the selector.

