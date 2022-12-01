<?php

// Initialisation de la session
session_start();
// Initialisation des paramètres du site
require_once("config/configuration.php");

// Vérification de la page demandée 
if (isset($_GET['page'])) {
    $page = htmlspecialchars($_GET['page']); // http://.../index.php?page=toto
    if (!is_file(PATH_CONTROLLERS . $_GET['page'] . ".php")) {
        $page = '404'; // Page demandée inexistante
    }
} else
    $page = 'home'; // Page d'accueil du site - http://.../index.php
  
// Appel du controller
require_once(PATH_CONTROLLERS . $page . '.php');