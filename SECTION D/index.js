// Get references to the DOM elements
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const bucketList = document.getElementById('bucketList');

// Function to add an item to the bucket list
function addItem() {
  const itemText = itemInput.value.trim();  // Get the input text

  if (itemText === '') {
    alert('Please enter an item');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = itemText;

  // Create a delete button for the item
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  deleteBtn.onclick = function () {
    li.remove();  // Remove the list item when clicked
  };

  // Append the delete button to the list item
  li.appendChild(deleteBtn);

  // Append the list item to the bucket list
  bucketList.appendChild(li);

  // Clear the input field after adding
  itemInput.value = '';
}

// Add event listener for the "Add Item" button
addItemBtn.addEventListener('click', addItem);

// Allow pressing "Enter" to add an item
itemInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addItem();
  }
});
