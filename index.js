// Define your Book class here:
class Book {
  constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded){
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numberOfPages = numberOfPages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded
  }

  checkout(uses=1){
    this.timesCheckedOut += uses
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded){
    super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded)
  }

  disposal(year){
    if(year > (this.copyrightDate + 5)){
      this.discarded = 'Yes'
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
class Novel extends Book {
  constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded){
  super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded)
  }

  disposal(){
    if(this.timesCheckedOut > 100){
      this.discarded = 'Yes'
    }
  }
}

// Code exercises 4 & 5 here:
let pridePrejudice = new Novel('Pride and Prejudice', 'Jane Auston', 1813, '1111111111111', 432, 32, 'No');

let shuttleManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

shuttleManual.disposal(2020);
pridePrejudice.checkout(5);

console.log(pridePrejudice);
console.log(shuttleManual);
