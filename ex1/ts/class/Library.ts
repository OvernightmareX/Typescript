import { Book } from "../utils/interface.js";

export class Library {
    books: Book[] = []; 

    addBook(book: Book): void{
        this.books.push(book); 
    }

    findBookByTitle(title: string): Book{
        let book: Book = this.books.find((element) => element.title == title);
        return book; 
    }

    getBooksByAuthor(authorName: string): Book[]{
        let bookList: Book[] = []; 

        this.books.forEach((book) => {
            if(book.author.name == authorName)
                bookList.push(book); 
        })
        return bookList; 
    }

    listAvailableBooks(): Book[]{
        let bookList: Book[] = []; 

        this.books.forEach((book) => {
            if(book.isAvailable)
                bookList.push(book); 
        })
        return bookList; 
    }

    removeBook(title: string): void{
        let index: number = this.books.indexOf(this.findBookByTitle(title));
        this.books.splice(index, index+1);
    }
}