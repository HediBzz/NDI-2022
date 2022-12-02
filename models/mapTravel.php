<?php

require_once(PATH_MODELS . 'Connexion.php');

function saveAllLines($level, $lines) {
  $lines = explode(",", $lines);

  $bdd = Connexion::getInstance()->getBdd();
  // Get the password hash from the database
  $req = $bdd->prepare('INSERT INTO lines_map(level, left_case, center_case, right_case) VALUES (?, ?, ?, ?)');
  $req->execute(array($level, $lines[0], $lines[1], $lines[2]));

  $req2 = $bdd->prepare('INSERT INTO lien_map(id_map, id_line) VALUES (?, ?)');

  return $lines;
}
