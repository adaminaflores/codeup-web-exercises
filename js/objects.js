
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

     var person = {
      firstName: "Johnny",
        lastName: "White"
    }
  console.log(person.firstName);
  console.log(person.lastName);





    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

   var sayHello = function () {
       alert("Hi from : " + this.person);
    }
    person.sayHello = sayHello;
   console.log(person.sayHello);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    for (var i = 0; i < shoppers.length ; i++) {

        console.log("The original total before discount : " + shoppers[i].amount);

        if (shoppers[i].amount >=200) {
            console.log("Your amount after the discount will be :" + shoppers[i].amount *.12);

        }
        else {
        console.log(" You didn't reach the amount to receive discount " );
        }
    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {bookNumber: "Book #1 : ",
             title: "The Very Hungry Caterpillar",
            author: {firstName: "Eric",
                lastName: "Carle"},},


        {bookNumber: "Book #2 : ",
            title: "Where The Wild Things Are",
            author: {firstName: "Maurice",
                lastName: "Sendak"},},

        {bookNumber: "Book #3 : ",
            title: "Goodnight Moon",
            author: {firstName: "Margaret",
                middleName: "Wise",
                lastName: "Brown"},},

            {bookNumber: "Book #4 : ",
            title: "Charlotte/s Web",
            author: {firstName: "E.B.",
                lastName: "White"},},


        {bookNumber: "Book #5 : ",
            title: "The Cat In The Hat",
            author: {firstName: "Dr.",
                lastName: "Seuss"},},



    ];

console.log(books);

console.log(books[b].title);
    console.log(books[b].author.firstName);
        console.log(books[b].author.lastName);


for(var b = 0; b < books.length; b++){
    console.log("Here is some information on each book : " + books[b].bookNumber.title.author);
}


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

var bookInfo = function() {
    alert("Here is some information on each book : " + this.bookNumber + " "+ this.title + " " + this.author);

    }
books.eachBook = bookInfo;

var bookLibrary = [books, bookInfo];

    console.log(bookLibrary);

    bookLibrary.forEach(function(book){
    book.eachBook();

    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
