let myLibrary = [];

function Book(title, author, numOfPages) {
  (this.title = title), (this.author = author), (this.numOfPages = numOfPages);
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let numOfPages = document.getElementById("numOfPages").value;
  const myBook = new Book(title, author, numOfPages);

  myLibrary.push(myBook);
}
function render() {
  var str = "<ul>";

  myLibrary.forEach(function (slide) {
    str += "<li>" + slide + "</li>";
  });

  str += "</ul>";
  document.getElementById("mytable").innerHTML = str;
}
console.log(myLibrary);
