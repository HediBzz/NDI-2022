<?php
require_once(PATH_MODELS . 'cards.php');

$cards = getAllCards();
include_once(PATH_VIEWS . 'arena.php');