let bookOS = new Audio("assets/sounds/book.wav");

function lancerMenu(){
  
    document.getElementById("bookC").classList.add('bookAnim');
    bookOS.play();

    setTimeout(function() {

        var elem = document.getElementById("bookC");
        elem.style.top = '-100vh';
        document.getElementById("bookC").style.pointerEvents = "none";
        
        setTimeout(function() {
        var elem = document.getElementById("bigBookC");
        elem.classList.add('bigBookAnim');

        setTimeout(function() {
            var elem = document.getElementById("bigBookC");
            elem.style.top = '5vh';

            setTimeout(function() {
                document.getElementById("croix1C").style.display = 'flex';
                document.getElementById("croix2C").style.display = 'flex';
                document.getElementById("croix3C").style.display = 'flex';
                document.getElementById("croix4C").style.display = 'flex';
            }, 1000);

            },1000);

        },700);

    }, 200);
    }