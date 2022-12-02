<?php
require_once(PATH_MODELS . 'cards.php');

$enemies = getAllEnemies();
$boss = getRandomBoss();
$enemies = getEnemyFromBoss($boss['id']);

$friends = getAllFriends();

include_once(PATH_VIEWS . 'arena.php');