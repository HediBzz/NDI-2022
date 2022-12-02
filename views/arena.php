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
    <img src="<?php PATH_ASSETS?>images/logo.png" alt="" id="logo">
        <article class="deck">
        <div class="hero-infos">
                <div class="hero enemy" value="<?= $boss['image'] ?>">
                    <h2 class="player-HP">PV : <?= $boss['hp'] ?></h2>
                </div>
                <h2><?= $boss['name'] ?></h2>
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
            <div class="hero-infos">
                <div class="hero friend" value="player.png">
                    <h2 class="player-HP">PV : 100</h2>
                </div>
                <h2><?= $_SESSION['name'] ?></h2>
            </div>




<?php
foreach($friends as $card) {
    ?>
    
    <section id="card<?=$i?>" class="card<?= $card["id"]?> card friend" value=<?php echo $card['image'] ?>>
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
<section style="display: none" id="card-1" class="card<?= $capote["id"]?> card friend" value=<?php echo $capote['image'] ?>>
    <div class="card-header">
        <p class="card-price item"><?= $capote['price'] ?></p>
        <p class="card-title"><?= $capote['title'] ?></p>
    </div>
    
    <div class="card-footer">
        <p class="card-description"><?= $capote['description'] ?></p>
        <div class="items-container">
            <?php
            if($capote['isEntity']) {
                ?>
                <p class="card-HP item"><?= $capote['hp'] ?></p>
                <?php
            }
            ?>
            <p class="card-attack item"><?= $capote['attack'] ?></p>
        </div>
    </div>
</section>
        <div class="mana">
            </div>
        <article>

</body>

</html>