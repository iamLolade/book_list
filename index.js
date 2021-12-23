const books = document.querySelectorAll("#book-list li .name");

books.forEach(book => {
    console.log(book.textContent)
})