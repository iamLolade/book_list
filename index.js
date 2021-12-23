const btns = document.querySelectorAll("#book-list .delete");

Array.from(btns).forEach(btn => {
    btn.addEventListener("click", (e) => {

        const li = e.target.parentElement;

        li.parentNode.removeChild(li);

    })
})
