const library = [];



function Book(title, author, year, pages, isRead) {
    if (!new.target) {
        throw new Error("Book constructor must be called with 'new'");
    }

    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();

    this.info = function() {
        const readStatus = this.isRead ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.year}, ${this.pages} pages, ${readStatus}`;
    };
}

function addBookToLibrary(book) {
    library.push(book);
}

function getAllBooks(library) {
    table_builder = "<table><tr><th>Title</th><th>Author</th><th>Year</th><th>Pages</th><th>Read Status</th></tr>";
    library.forEach(element => {
        table_builder += `<tr><td>${element.title}</td><td>${element.author}</td><td>${element.year}</td><td>${element.pages}</td><td>${element.isRead ? "read" : "not read yet"}</td></tr>`;
    });
    table_builder += "</table>";
    return table_builder;
}

Book.prototype.output = function(){
    console.log(this.info());
}
