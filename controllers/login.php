<?php

require_once(PATH_MODELS . 'login.php');
require_once(PATH_MODELS . 'register.php');

if(isset($_POST['login'])) {
    $username = htmlspecialchars($_POST['usernameC']);
    $password = htmlspecialchars($_POST['passwordC']);
    login($username, $password);
}
else if(isset($_POST['register'])) {
    $username = htmlspecialchars($_POST['usernameI']);
    $password = htmlspecialchars($_POST['passwordI']);
    $passwordConfirm = htmlspecialchars($_POST['passwordConfirm']);
    if($password == $passwordConfirm) {
        register($username, $password);
    } else {
        echo "Passwords don't match";
    }
}


require_once(PATH_VIEWS . 'login.php');