<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href=<?php echo PATH_CSS . "main.css" ?>>
    <link rel="stylesheet" href=<?php echo PATH_CSS . "home.css" ?>>
    <title>Accueil</title>
</head>
<body>
    <div id="bookC">
        <img src="<?= PATH_IMAGES?>book_close.png" id="book" onclick = "lancerMenu()" draggable="false"></img>
    </div>

    <div id=bigBookC>
        <img src="<?= PATH_IMAGES?>bigBook.png" id="bigBook" draggable="false"></img>
    </div>

    <div id=croix1C>
        <img src="<?= PATH_IMAGES?>croix.png" id="croix1" draggable="false"></img>
    </div>
    <div id=croix2C>
        <img src="<?= PATH_IMAGES?>croix.png" id="croix2" draggable="false"></img>
    </div>
    <div id=croix3C>
        <img src="<?= PATH_IMAGES?>croix.png" id="croix3" draggable="false"></img>
    </div>
    <div id=croix4C>
        <img src="<?= PATH_IMAGES?>croix.png" id="croix4" draggable="false"></img>
    </div>

    <script src="<?= PATH_SCRIPTS?>home.js"></script>
</body>
</html>