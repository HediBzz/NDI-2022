<?php

require_once(PATH_MODELS . 'Connexion.php');

function register($username, $password) {
    $bdd = Connexion::getInstance()->getBdd();
    // Verifiy if the username is already taken
    $req = $bdd->prepare('SELECT id FROM account WHERE name = :name');
    $req->execute(array(
        'name' => $username
    ));
    $userInfo = $req->fetch();
    if($userInfo) {
        // If the username is already taken, redirect to the register page
        echo "Username already taken";
    } else {
        // If the username is not taken, hash the password and insert the user in the database
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $req = $bdd->prepare('INSERT INTO account(name, password) VALUES(:name, :password)');
        $req->execute(array(
            'name' => $username,
            'password' => $hash
        ));
        // Redirect to the login page*
        echo "User created";
    }
}