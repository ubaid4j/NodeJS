import {BookInfo} from "./bookinfo";

export class MyBooks
{
    private _books: Array<BookInfo>;
    
    constructor()
    {
        let book1 : BookInfo = new BookInfo("OOP in Java", "Daitel and Daitel", "2011", "/assets/images/book1.jpg");
        let book2 : BookInfo = new BookInfo("Data Structure in C++", "Priston", "2015", "/assets/images/book2.jpg");
        let book3 : BookInfo = new BookInfo("Networking in C", "O'Really", "2016", "/assets/images/book3.jpg");
        let book4 : BookInfo = new BookInfo("ML in Python", "NG Andrew", "2018", "/assets/images/book4.jpg");

        this.books.push(book1);
        this.books.push(book2);
        this.books.push(book3);
        this.books.push(book4);
    }

    public get books(): Array<BookInfo> {
        return this._books;
    }
    public set books(value: Array<BookInfo>) {
        this._books = value;
    }

}