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
    $req = $bdd->prepare('SELECT * FROM card WHERE isEnemy = 1 and isEntity = 1');
    $req->execute();
    $enemies = $req->fetchAll();
    return $enemies;
}

function getEnemyFromBoss($idBoss) {
    $bdd = Connexion::getInstance()->getBdd();
    $req = $bdd->prepare('SELECT * FROM card WHERE isEnemy = 1 and isEntity = 1 and boss_id = :boss_id');
    $req->execute(array(
        'boss_id' => $idBoss
    ));
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

function getRandomBoss() {
    $bdd = Connexion::getInstance()->getBdd();
    $req = $bdd->prepare('SELECT * FROM boss ORDER BY RAND() LIMIT 1');
    $req->execute();
    $boss = $req->fetch();
    return $boss;
}