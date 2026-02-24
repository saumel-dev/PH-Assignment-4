1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
    getElementById: "getElementById" is a Javascript method used to retrive a specific HTML element from the DOM by a unique id Attribute.

    GetElementsByCLassName: "getElementsByClassName" is a Javascript method used to retrive a bunch of HTML element from the DOM by a class Attribute.

    querySelector: "querySelector" is a Javascript method used to retrive a specific HTML element or parent element matches a specified CSS selector or group of selectors.

    querySelectorAll: "querySelectorAll" is a Javascript method used to retrive all matches same a CSS selector or group of selectors.

2. How do you create and insert a new element into the DOM?
Answer: 
    The way of creating a new element into the DOM is:
        const newElement = document.createAttribute('div');
    
    The way of inserting an element into the DOM is:
    step 1: find the parent element
        const list = document.querySelector('#shopping-list');
    step 2: create the new element
        const newItem = document.createElement('li');
        newItem.innerText = 'Oat Milk'
    step 3: inserting the element
        list.append(newItem);

3. What is Event Bubbling? And how does it work?
Answer: 
    Event bubbling is the JavaScript behavior where an event triggered on a child element and it goes upward through its parants element in the DOM tree. It works by first firing the event on the target element, then its parent, then grandparent, and so on.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
    Event delegation is a design pattern in JavaScript where a single event listener is attached to a parent element to manage events for all its descendant elements, rather than attaching a separate listener to each child.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
    event.preventDefault() stops the browser's default action for an event, while event.stopPropagation() stops the event from moving further up or down the DOM hierarchy