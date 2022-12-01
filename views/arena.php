<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href=<?php echo PATH_CSS . "main.css" ?>>
    <link rel="stylesheet" href=<?php echo PATH_CSS . "login.css" ?>>
    <link rel="stylesheet" href=<?php echo PATH_CSS . "card.css" ?>>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <script src="<?= PATH_SCRIPTS ?>login/login.js" defer></script>
    <title>Accueil</title>
</head>

<body>
    <div>

    
    <h1>Enemie :</h1>
        <article class="deck">


<?php
foreach($cards as $card) {
    ?>
    
    <section id="card<?= $card["id"]?>e" class="card" value=<?php echo $card['image'] ?>>
        <div class="card-header">
            <p class="card-price item"><?= $card['price'] ?></p>
            <p class="card-title"><?= $card['title'] ?></p>
        </div>
        
        <div class="card-footer">
            <p class="card-description"><?= $card['description'] ?></p>
            <div class="items-container">
                <?php
                if($card['isEntity']) {
                    ?>
                    <p class="card-HP item"><?= $card['isEntity'] ?></p>
                    <?php
                }
                ?>
                <p class="card-attack item"><?= $card['attack'] ?></p>
            </div>
        </div>
    </section>

    <script>
        var card = document.querySelector('#card<?= $card["id"]?>e');
        // Put the src of the background-image in the css
        card.style.backgroundImage = "url(assets/images/" + card.getAttribute('value') + ")";
        card.addEventListener('click', function() {
            // Put the src of the background-image in the css
            card.style.backgroundImage = "url(assets/images/" + card.getAttribute('value') + ")";
        });
    </script>
        
    <?php
}
?>
        </article>

        <h1>Deck :</h1>
        <article class="deck">


<?php
foreach($cards as $card) {
    ?>
    
    <section id="card<?= $card["id"]?>j" class="card" value=<?php echo $card['image'] ?>>
        <div class="card-header">
            <p class="card-price item"><?= $card['price'] ?></p>
            <p class="card-title"><?= $card['title'] ?></p>
        </div>
        
        <div class="card-footer">
            <p class="card-description"><?= $card['description'] ?></p>
            <div class="items-container">
                <?php
                if($card['isEntity']) {
                    ?>
                    <p class="card-HP item"><?= $card['isEntity'] ?></p>
                    <?php
                }
                ?>
                <p class="card-attack item"><?= $card['attack'] ?></p>
            </div>
        </div>
    </section>

    <script>
        var card = document.querySelector('#card<?= $card["id"]?>j');
        // Put the src of the background-image in the css
        card.style.backgroundImage = "url(assets/images/" + card.getAttribute('value') + ")";

        card.addEventListener('click', function() {
            card.classList.toggle('selected');
            console.log(card);
        });
    </script>
        
    <?php
}
?>
        <article>
    </div>

</body>

</html>