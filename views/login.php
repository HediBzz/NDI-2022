<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href=<?php echo PATH_CSS . "main.css" ?>>
    <link rel="stylesheet" href=<?php echo PATH_CSS . "login.css" ?>>
    <title>Accueil</title>
</head>
<body>

    <h1>NOM DU JEU</h1>
    <article id="form-container">
        <form id="login-form" action="?page=login" method="post">
            <label for="username">Nom d'utilisateur</label>
            <input type="text" name="username" id="username">
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password">
            <button type="submit" name="login">Se connecter</button>
        </form>
        <form id="register-form" action="?page=login" method="post">
            <label for="username">Nom d'utilisateur</label>
            <input type="text" name="username" id="username">
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password">
            <label for="password">Confirmer le mot de passe</label>
            <input type="password" name="passwordConfirm" id="passwordConfirm">
            <button type="submit" name="register">S'inscrire</button>
        </form>
    </article>

    
</body>
</html>