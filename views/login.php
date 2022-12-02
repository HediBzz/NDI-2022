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
    <script src="views/animations.js" defer></script>
    <title>Accueil</title>
</head>

<body>
    <div id="container-login">
        <h1>NOM DU JEU</h1>
        <article id="form-container">
            <div id="knight">
            <img src="assets/images/knight/walking1.png" alt="" draggable="false">
            </div>
            <form id="login-form" action="?page=login" method="post">
                <div class="login-item">
                    <label for="usernameC">Nom d'utilisateur</label>
                    <input type="text" name="usernameC" id="usernameC">
                </div>
                <div class="login-item">
                    <label for="passwordC">Mot de passe</label>
                    <input type="passwordC" name="passwordC" id="passwordC-login">
                    <span class="form-item-icon-left material-symbols-outlined" id="password-visibility-login" onclick="visibility('passwordLogin')">visibility_off</span>
                </div>
                <div class="login-item">
                    <button type="submit" name="login">Se connecter</button>
                </div>
            </form>
            <form id="register-form" action="?page=login" method="post">
                <div class="login-item">
                    <label for="usernameI">Nom d'utilisateur</label>
                    <input type="text" name="usernameI" id="usernameI">
                </div>
                <div class="login-item">
                    <label for="passwordI">Mot de passe</label>
                    <input type="passwordI" name="passwordI" id="passwordI">
                    <span class="form-item-icon-left material-symbols-outlined" id="password-visibility" onclick="visibility('password')">visibility_off</span>
                </div>
                <div class="login-item">
                    <label for="passwordConfirm">Confirmer le mot de passe</label>
                    <input type="passwordI" name="passwordConfirm" id="passwordConfirm">
                    <span class="form-item-icon-left material-symbols-outlined" id="password-confirm-visibility" onclick="visibility('confirmPassword')">visibility_off</span>
                </div>
                <div class="login-item">
                    <button type="submit" name="register">S'inscrire</button>
                </div>
            </form>
        </article>
    </div>

</body>

</html>