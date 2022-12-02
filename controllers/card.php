<?php
/* Display all erros */
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once(PATH_MODELS . 'cards.php');

$cards = getAllCards();

require_once(PATH_VIEWS . 'card.php');