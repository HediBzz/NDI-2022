<?php


require_once(PATH_MODELS . 'Connexion.php');

function getAllCards() {
    $bdd = Connexion::getInstance()->getBdd();
    $req = $bdd->prepare('SELECT * FROM card');
    $req->execute();
    $cards = $req->fetchAll();
    return $cards;
}

function getAllEnemies() {
    $bdd = Connexion::getInstance()->getBdd();
    $req = $bdd->prepare('SELECT * FROM card WHERE isEnemy = 1');
    $req->execute();
    $enemies = $req->fetchAll();
    return $enemies;
}

function getAllFriends() {
    $bdd = Connexion::getInstance()->getBdd();
    $req = $bdd->prepare('SELECT * FROM card WHERE isEnemy = 0');
    $req->execute();
    $friends = $req->fetchAll();
    return $friends;
}