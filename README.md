
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The getElementById method is used to select a particular element by id.However, the getElementsByClassName method is used to select all elements that share the same class name.On  the other hand,querySelector selects the 1st element that matches CSS selector and querySelectorAll selects all matching elements.

2. How do you create and insert a new element into the DOM?

Ans: To create a new element into DOM we use document.createElement().Then we add content using innerHTML and insert it into document using methods like append() or appendChild().

3. What is Event Bubbling? And how does it work?

Ans:Event Bubbling is a process in JavaScript where an event starts from the target element and then propagates upward to its parent elements in the DOM tree.
For example, if a button inside a div is clicked, the click event first runs on the button, then on the div, then on the body and continues upward until it reaches the document. This happens automatically unless the propagation is stopped.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element.
It is useful because it improves performance abd reduce code duplication.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: The  preventDefault() method is used to stops the browser's default behavior.On the other hand,the stopPropagation() method stops event from bubbling to parent.