-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 02 déc. 2022 à 00:32
-- Version du serveur :  5.7.24
-- Version de PHP : 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nuit_info`
--

-- --------------------------------------------------------

--
-- Structure de la table `card`
--

CREATE TABLE `card` (
  `id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `description` varchar(256) NOT NULL,
  `hp` int(11) NOT NULL,
  `attack` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) NOT NULL,
  `isEntity` tinyint(4) NOT NULL,
  `isEnemy` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `card`
--

INSERT INTO `card` (`id`, `title`, `description`, `hp`, `attack`, `price`, `image`, `isEntity`, `isEnemy`) VALUES
(1, 'Toux', 'Inflâme votre gorge, provoque des éruptions cutanées', 10, 4, 5, 'toux.png', 1, 1),
(2, 'Vomissement', 'Rejet vagale provoqué par une irritation du système digestif', 6, 3, 4, 'vomissement.png', 1, 1),
(3, 'Tumeur', 'Production tissulaire pouvant finir par bloquer des fonctions vitales', 15, 7, 10, 'tumeur.png', 1, 1),
(4, 'Trithérapie', 'association de trois molécules contre le VIH afin de renforcer la puissance du traitement', 10, 6, 6, 'tritherapie.png', 1, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `card`
--
ALTER TABLE `card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
