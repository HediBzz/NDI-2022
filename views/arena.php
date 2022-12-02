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
    <script src="<?= PATH_SCRIPTS ?>App.js" defer type="module"></script>
    <title>Accueil</title>
</head>

<body>

        <article class="deck">
        <div class="hero" value="sida.png">
            <h2>PV : 100</h2>
            </div>


<?php
$i = 0;
foreach($enemies as $card) {
    ?>
    
    <section id="card<?=$i?>" class="card<?= $card["id"]?> card enemy" value=<?php echo $card['image'] ?>>
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
                    <p class="card-HP item"><?= $card['hp'] ?></p>
                    <?php
                }
                ?>
                <p class="card-attack item"><?= $card['attack'] ?></p>
            </div>
        </div>
    </section>

    
        
    <?php
    $i++;
}
?>
        </article>

        <article class="deck">
            <div class="hero" value="player.png">
                <h2>PV : 100</h2>
            </div>



<?php
foreach($friends as $card) {
    ?>
    
    <section id="card<?=$i?>" class="card<?= $card["id"]?> card can-play friend" value=<?php echo $card['image'] ?>>
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
                    <p class="card-HP item"><?= $card['hp'] ?></p>
                    <?php
                }
                ?>
                <p class="card-attack item"><?= $card['attack'] ?></p>
            </div>
        </div>
    </section>

        
    <?php
    $i++;
}
?>
            <div class="mana">
            </div>
        <article>

</body>

</html>