export class BookInfo
{
    private name : String;
    private author : String;
    private yearPublished : String;
    private picture : String;
    private id : number;

    constructor(id: number, name : String, author : String, yearPublished : String, picture : String)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.yearPublished = yearPublished;
        this.picture = picture;
    }

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getAuthor(): String {
        return this.author;
    }

    public setAuthor(author: String): void {
        this.author = author;
    }

    public getYearPublished(): String {
        return this.yearPublished;
    }

    public setYearPublished(yearPublished: String): void {
        this.yearPublished = yearPublished;
    }

    public getPicture(): String {
        return this.picture;
    }

    public setPicture(picture: String): void {
        this.picture = picture;
    }

    public getId() : number 
    {
        return this.id;
    }

    public setId(id : number) : void
    {
        this.id = id;
    }
    
}