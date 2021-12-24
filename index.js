const list = document.querySelector("#book-list ul");

list.addEventListener("click", (e) => {

    if(e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li)
    }

})

//Add book
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;

    //Create element
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //add content
    bookName.textContent = value;
    deleteBtn.textContent = "-";

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li)
})
