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

  saveAllLines(0,$l0);
  saveAllLines(1,$l1);
  saveAllLines(2,$l2);
  saveAllLines(3,$l3);
  saveAllLines(4,$l4);
  saveAllLines(5,$l5);
  saveAllLines(6,$l6);
  saveAllLines(7,$l7);
  saveAllLines(8,$l8);
  saveAllLines(9,$l9);
  saveAllLines(10,$l10);
  saveAllLines(11,$l11);
  saveAllLines(12,$l12);
  saveAllLines(13,$l13);
  saveAllLines(14,$l14);


}

require_once(PATH_VIEWS . 'mapTravel.php');
