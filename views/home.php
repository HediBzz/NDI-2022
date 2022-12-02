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

    <h1>NOM DU JEU</h1>
    <article id="btn-container">
        <button><a href="?page=map">Jouer</a></button>
        <button><a href="?page=rules">Règles</a></button>
        <button><a href="?page=almanach">Almanach</a></button>
    </article>

    <div id="bookC">
        <img src="<?= PATH_IMAGES?>book_close.png" id="book" onclick = "lancerMenu()" draggable="false"></img>
    </div>

    <script src="<?= PATH_SCRIPTS?>home.js"></script>
</body>
</html>