<?php


require_once(PATH_MODELS . 'Connexion.php');

function getAllCards() {
    $bdd = Connexion::getInstance()->getBdd();
    $req = $bdd->prepare('SELECT * FROM card');
    $req->execute();
    $cards = $req->fetchAll();
    return $cards;
}