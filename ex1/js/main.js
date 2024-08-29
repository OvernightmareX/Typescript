import { Library } from "./class/Library.js";
function createBook(title, author, pages, isAvailable = true) {
    let newBook = { title: title, author: author, pages: pages, isAvailable: isAvailable };
    return newBook;
}
function toggleAvailability(book) {
    book.isAvailable = !book.isAvailable;
}
let author = [
    { name: "Geralt", birthYear: 1200, genres: ["fantasie", "horreur"] },
    { name: "Triss", birthYear: 1128, genres: ["magie", "politique"] },
    { name: "Jasquier", birthYear: 1350, genres: ["romance", "comédie"] },
];
let livres = [
    { title: "Tuer une ghoule avec un trombone", author: author[0], pages: 100, isAvailable: true },
    { title: "Les portails et moi", author: author[0], pages: 200, isAvailable: false },
    { title: "La magie pour les nuls", author: author[1], pages: 300, isAvailable: false },
    { title: "Les aventures de Dandelion", author: author[2], pages: 4000, isAvailable: true },
];
let library = new Library();
console.log("Ajout de 4 livres :");
library.addBook(createBook("Tuer une ghoule avec un trombone", author[0], 100, true));
library.addBook(createBook("Les portails et moi", author[0], 200, false));
library.addBook(createBook("La magie pour les nuls", author[1], 300, false));
library.addBook(createBook("Les aventures de Dandelion", author[2], 4000, true));
console.table(library.books);
console.log("GetBook avec l'auteur 'Geralt' :");
console.log(library.getBooksByAuthor("Geralt"));
console.log("FindBook avec le titre 'La magie pour les nuls' : ");
console.log(library.findBookByTitle("La magie pour les nuls"));
console.log("Affichage des livres disponible : ");
console.table(library.listAvailableBooks());
console.log("Affichage des livres disponible après avoir rendu le premier livre indisponible : ");
toggleAvailability(library.books[0]);
console.table(library.listAvailableBooks());
console.log("Suppression du 4e livre : ");
library.removeBook(library.books[3].title);
console.table(library.books);
