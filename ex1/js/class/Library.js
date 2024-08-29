export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    findBookByTitle(title) {
        let book = this.books.find((element) => element.title == title);
        return book;
    }
    getBooksByAuthor(authorName) {
        let bookList = [];
        this.books.forEach((book) => {
            if (book.author.name == authorName)
                bookList.push(book);
        });
        return bookList;
    }
    listAvailableBooks() {
        let bookList = [];
        this.books.forEach((book) => {
            if (book.isAvailable)
                bookList.push(book);
        });
        return bookList;
    }
    removeBook(title) {
        let index = this.books.indexOf(this.findBookByTitle(title));
        this.books.splice(index, index + 1);
    }
}
