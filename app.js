const form = document.querySelector('.js-search-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    // prevent page from reloading when form is submitted
    event.preventDefault();
    // get the value of the input field
  const inputValue = document.querySelector('.js-search-input').value;
  // remove whitespace from the input
  const searchQuery = inputValue.trim();
  // print `searchQuery` to the console
  console.log(searchQuery);
  }