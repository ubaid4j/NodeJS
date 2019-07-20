import {BookInfo} from "./bookinfo";

export class MyBooks
{
    private books: Array<BookInfo>;
    
    constructor()
    {
        this.books = [];

        let book1 : BookInfo = new BookInfo(1, "OOP in Java", "Daitel and Daitel", "2011", "/assets/images/book1.jpg");
        let book2 : BookInfo = new BookInfo(2, "Data Structure in C++", "Priston", "2015", "/assets/images/book2.jpg");
        let book3 : BookInfo = new BookInfo(3, "Networking in C", "O'Really", "2016", "/assets/images/book3.jpg");
        let book4 : BookInfo = new BookInfo(4, "ML in Python", "NG Andrew", "2018", "/assets/images/book4.jpg");

        this.books.push(book1);
        this.books.push(book2);
        this.books.push(book3);
        this.books.push(book4);
    }

    public getBooks(): Array<BookInfo> {
        return this.books;
    }
    public setBooks(value: Array<BookInfo>) {
        this.books = value;
    }

}