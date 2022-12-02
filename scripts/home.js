let bookOS = new Audio("assets/sounds/book.wav");

function lancerMenu(){
  
    var elem = document.getElementById("book");
    elem.setAttribute("src", "assets/images/book_open.png");
    bookOS.play();
    
    }