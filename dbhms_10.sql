-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2022 at 03:23 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbhms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(16) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` char(1) NOT NULL,
  `Address` text NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `FirstName`, `MiddleName`, `LastName`, `DOB`, `Gender`, `Address`, `Email`, `Password`) VALUES
(1, 'Abhi', NULL, 'Bhuvan', '0000-00-00', 'm', '62 Asqah Dr North Kingstown RI 02852', 'abhi213@gmail.com', 'test123');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(16) NOT NULL,
  `PatientID` int(16) UNSIGNED NOT NULL,
  `DoctorID` int(16) UNSIGNED NOT NULL,
  `Date` date NOT NULL,
  `VisitTime` time NOT NULL,
  `Status` text DEFAULT NULL,
  `Created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `PatientID`, `DoctorID`, `Date`, `VisitTime`, `Status`, `Created`) VALUES
(1, 1, 1, '2022-03-16', '00:00:00', NULL, '2022-03-14 17:58:07'),
(2, 3, 2, '2012-03-15', '00:00:00', NULL, '2022-03-17 18:07:57'),
(6, 1, 1, '2014-03-20', '00:00:00', 'test', '2022-03-25 17:37:29');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(16) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` char(1) NOT NULL,
  `Address` text NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `Department` varchar(64) NOT NULL,
  `Specialization` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `FirstName`, `MiddleName`, `LastName`, `DOB`, `Gender`, `Address`, `Email`, `Password`, `Department`, `Specialization`) VALUES
(1, 'Bob', NULL, 'pilitier', '1987-05-11', 'm', '123 street ad North KingsTown RI 02852', 'bob@myhospital.com', '123', '', 'none'),
(2, 'test', NULL, '1', '1992-07-15', 'm', 'none', 'test1', '123', '', NULL),
(3, 'asfja', NULL, 'aflajh', '2022-03-01', 'm', 'akfjka', 'asfsa@gmail.com', 'akjfkdafd', '', NULL),
(4, 'askdak', '', 'askfjlak', '2022-03-05', 'a', 'akfjlajf.a', 'akjsf@gmail.com', 'wakjdfka', '', 'none'),
(5, 'jfkdajd', 'fhadfj', 'afhajhf', '2022-03-30', 'm', 'afhkashfk', 'qw@gmail.com', 'afhahfjhajfh', '', 'none'),
(6, 'Abhi', '', 'bhuv', '2018-02-06', 'm', 'tesr', 'test@gmail.com', 'test', '', ''),
(7, 'Abhi', '', 'bhuv', '2022-03-12', 'g', 'tesr', 'test@gmail.com', '12233', '', ''),
(8, 'Abhi', '', 'bhuv', '2022-03-12', 'j', 'tesr', 'test@gmail.com', 'hhjhj', '', ''),
(9, 'Abhi', '', 'bhuv', '2022-03-12', 'j', 'tesr', 'test@gmail.com', 'kjkjkj', '', ''),
(10, 'fjksd', '', 'dafal', '2022-03-04', 'm', 'kwjkfksj', 'a@gmail.com', 'kdfjdck', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(16) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` char(1) NOT NULL,
  `Address` text NOT NULL,
  `Email` varchar(64) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `MedicationHistory` text DEFAULT NULL,
  `Medication` text DEFAULT NULL,
  `Conditions` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `FirstName`, `MiddleName`, `LastName`, `DOB`, `Gender`, `Address`, `Email`, `Password`, `MedicationHistory`, `Medication`, `Conditions`) VALUES
(1, 'test', NULL, 'test', '2012-03-01', 'm', 'test', 'test@gmail.com', 'test123', NULL, NULL, ''),
(2, 'afka', NULL, 'aekfjkla', '2022-03-21', 'm', 'fakjklfj', 'ttt@fkk', '123', 'fadfkja', NULL, ''),
(3, 'abhishek', '', 'Bhuvanendran', '2022-03-09', 'm', '61 Asqah Dr', 'g@gmail.com', '123', '', '', ''),
(4, 'abhishek', '', 'Bhuvanendran', '2022-03-09', 'm', '61 Asqah Dr', 'g@gmail.com', '123', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
