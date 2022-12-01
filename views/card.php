<link rel="stylesheet" href=<?php echo PATH_CSS . "card.css" ?>>


<?php
foreach($cards as $card) {
    ?>
    
    <section id="card<?= $card["id"]?>" class="card" value=<?php echo $card['image'] ?>>
        <div class="card-header">
            <p class="card-price item"><?= $card['price'] ?></p>
            <p class="card-title"><?= $card['title'] ?></p>
        </div>
        
        <div class="card-footer">
            <p class="card-description"><?= $card['description'] ?></p>
            <div class="items-container">
                <p class="card-hp item"><?= $card['hp'] ?></p>
                <p class="card-attack item"><?= $card['attack'] ?></p>
            </div>
        </div>
    </section>

    <script>
        var card = document.querySelector('#card<?= $card["id"]?>');
        // Put the src of the background-image in the css
        card.style.backgroundImage = "url(assets/images/" + card.getAttribute('value') + ")";
    </script>
        
    <?php
}
