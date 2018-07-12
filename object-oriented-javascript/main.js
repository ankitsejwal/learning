class Book{
    constructor(name, author, pages){
        this.name = name;
        this.author = author;
        this.pages = pages;
    }

    read(){
        console.log(`This book has ${this.pages} pages`);
    }
}

const book = new Book('Robot Dreams', 'Isaac Asimov', 120);
console.log(book.read());