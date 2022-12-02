<?php
require_once(PATH_MODELS . 'cards.php');

$enemies = getAllEnemies();
$boss = getRandomBoss();
$enemies = getEnemyFromBoss($boss['id']);

$capote = getCapote();

$friends = getAllFriends();

include_once(PATH_VIEWS . 'arena.php');