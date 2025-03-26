const books = [
    { title: "Book One", author: "Author A" },
    { title: "Book Two", author: "Author B" },
    { title: "Book Three", author: "Author C" },
    { title: "Book Four", author: "Author D" }
];

const bookList = document.getElementById("book-list");
const searchBar = document.getElementById("search-bar");

function displayBooks(filter = "") {
    bookList.innerHTML = "";
    books
        .filter(book => book.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(book => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `<h4>${book.title}</h4><p>by ${book.author}</p>`;
            bookList.appendChild(card);
        });
}
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const bookCards = document.querySelectorAll(".book-card");

    searchBar.addEventListener("keyup", function () {
        let searchTerm = searchBar.value.toLowerCase();

        bookCards.forEach(card => {
            let bookTitle = card.querySelector("h4").innerText.toLowerCase();
            if (bookTitle.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


displayBooks();

searchBar.addEventListener("input", (e) => {
    displayBooks(e.target.value);
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".book-card").forEach(card => {
        card.addEventListener("click", function () {
            const bookTitle = this.querySelector("h4").innerText.toLowerCase().replace(/\s+/g, '-');
            window.location.href = `books/${bookTitle}.html`;
        });
    });
});
