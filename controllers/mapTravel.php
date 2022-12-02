<?php
require_once(PATH_MODELS . 'mapTravel.php');

if (isset($_GET['0'])) {
  $l0 = htmlspecialchars($_GET['0']);
  $l1 = htmlspecialchars($_GET['1']);
  $l2 = htmlspecialchars($_GET['2']);
  $l3 = htmlspecialchars($_GET['3']);
  $l4 = htmlspecialchars($_GET['4']);
  $l5 = htmlspecialchars($_GET['5']);
  $l6 = htmlspecialchars($_GET['6']);
  $l7 = htmlspecialchars($_GET['7']);
  $l8 = htmlspecialchars($_GET['8']);
  $l9 = htmlspecialchars($_GET['9']);
  $l10 = htmlspecialchars($_GET['10']);
  $l11 = htmlspecialchars($_GET['11']);
  $l12 = htmlspecialchars($_GET['12']);
  $l13 = htmlspecialchars($_GET['13']);
  $l14 = htmlspecialchars($_GET['14']);

  saveAllLines($l0);
}

require_once(PATH_VIEWS . 'mapTravel.php');
