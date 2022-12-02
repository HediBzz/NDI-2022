<?php

const DEBUG = true; // production : false; dev : true

// Accès base de données
const BD_HOST = 'localhost';
//const BD_HOST = 'localhost';
const BD_DBNAME = 'nuit_info';
const BD_USER = 'root';
<<<<<<< HEAD
//const BD_PWD = '';
const BD_PWD = 'root';

=======
const BD_PWD = '';
>>>>>>> 6a45c4fbddd4d0561fa1fd61cbc23e86e8fbc6c8
// Langue du site
const LANG = 'FR-fr';

//dossiers racines du site
define('PATH_CONTROLLERS', './controllers/');
define('PATH_ENTITY', './entities/');
define('PATH_ASSETS', './assets/');
define('PATH_LIB', './lib/');
define('PATH_MODELS', './models/');
define('PATH_VIEWS', './views/');
define('PATH_TEXTES', './languages/');

//sous dossiers
define('PATH_CSS', PATH_ASSETS . 'css/');
define('PATH_IMAGES', PATH_ASSETS . 'images/');
define('PATH_SCRIPTS', './scripts/');

//fichiers
define('PATH_LOGO', PATH_IMAGES . 'logo.png');
define('PATH_MENU', PATH_VIEWS . 'menu.php');
