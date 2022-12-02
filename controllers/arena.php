<?php
require_once(PATH_MODELS . 'cards.php');

$enemies = getAllEnemies();
$friends = getAllFriends();
include_once(PATH_VIEWS . 'arena.php');