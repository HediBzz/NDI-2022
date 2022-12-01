<?php

require_once(PATH_MODELS . 'Connexion.php');

function login($name, $password) {
    $bdd = Connexion::getInstance()->getBdd();
    // Get the password hash from the database
    $req = $bdd->prepare('SELECT password FROM account WHERE name = ?');
    $req->execute(array($name));
    $userInfo = $req->fetch();
    // Check if the password is correct
    if(password_verify($password, $userInfo['password'])) {
        // If the password is correct, start a session
        $_SESSION['name'] = $name;
        // Redirect to the home page
        header('Location: ?page=home');
    } else {
        // If the password is incorrect, redirect to the login page
        echo "Wrong password";
    }
}