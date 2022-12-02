<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href=<?php echo PATH_CSS . "main.css" ?>>
    <link rel="stylesheet" href=<?php echo PATH_CSS . "login.css" ?>>
    <link rel="stylesheet" href="knight.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <script src="<?= PATH_SCRIPTS ?>login/login.js" defer></script>
    <script src="<?= PATH_SCRIPTS ?>login/animations.js" defer></script>
    <script src="views/animations.js" defer></script>
    <title>Accueil</title>
</head>

<body>
    <div id="container-login">
        <h1>NOM DU JEU</h1>
        <article id="form-container">
            <div id="knight">
                <img id="knight-img" src="assets/images/knight/walking1.png" draggable="false">
            </div>
            <form id="login-form" action="?page=login" method="post">
                <div class="login-item">
                    <label for="username">Nom d'utilisateur</label>
                    <input type="text" name="username" id="username">
                </div>
                <div class="login-item">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password1">
                    <span class="form-item-icon-left material-symbols-outlined" id="password-visibility1" onclick="visibility('password', 1)">visibility_off</span>
                </div>
                <div class="login-item">
                    <button type="submit" name="login">Se connecter</button>
                </div>
            </form>
            <form id="register-form" action="?page=login" method="post">
                <div class="login-item">
                    <label for="username">Nom d'utilisateur</label>
                    <input type="text" name="username" id="username2">
                </div>
                <div class="login-item">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password2">
                    <span class="form-item-icon-left material-symbols-outlined" id="password-visibility2" onclick="visibility('password', 2)">visibility_off</span>
                </div>
                <div class="login-item">
                    <label for="passwordConfirm">Confirmer le mot de passe</label>
                    <input type="password" name="password" id="password3">
                    <span class="form-item-icon-left material-symbols-outlined" id="password-confirm3" onclick="visibility('password', 3)">visibility_off</span>
                </div>
                <div class="login-item">
                    <button id="register" type="submit" name="register">S'inscrire</button>
                </div>
            </form>
        </article>
    </div>

</body>

</html>