// declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button using addEventListener
button.addEventListener('click', () => {
    // check to make sure the input is not blank
    if (input.value.trim() !== '') {
        // create a li element
        const li = document.createElement('li');

        // create a delete button
        const deleteButton = document.createElement('button');
        
        // populate the li elements textContent or innerHTML with the input value
        li.textContent = input.value.trim();

        // populate the button textContent with a ❌
        deleteButton.textContent = '❌';

        // append the li element with the delete button
        li.appendChild(deleteButton);

        // append the li element to the unordered list in your HTML
        list.appendChild(li);

        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // send the focus to the input element
        input.focus();

        // change the input value to nothing or the empty string to clean up the interface for the user
        input.value = '';
    } else {
        // If the input is blank,return the focus to the input field
        input.focus();
    }
});
