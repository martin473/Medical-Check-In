-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2022 at 02:39 AM
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
-- Database: `new`
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
(1, 'test rrr', 'zzzz', 'yy', '1999-01-06', 'F', 'qwewrre', 'abcd', '1234'),
(10, 'SPACES', 'SPACES', 'SPACES', '2022-04-03', 'f', 'SPACES AAA', 'aaa', '123'),
(11, 'plp', 'pllp', 'pllp', '2022-03-28', 'p', 'plp', 'vvv', '123');

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
(16, 4, 1, '2022-04-18', '12:58:00', '333', '2022-04-14 21:58:29'),
(20, 4, 1, '2022-04-11', '19:44:00', '000', '2022-04-22 19:41:08'),
(21, 4, 1, '2022-04-18', '19:47:00', 'fdgd', '2022-04-22 19:43:26'),
(23, 4, 5, '2022-04-11', '22:23:00', 'hjhj', '2022-04-25 20:23:57'),
(33, 9, 1, '2022-04-30', '07:39:00', 'asasa', '2022-04-26 01:32:06'),
(34, 10, 17, '2022-04-09', '19:37:00', 'oooo', '2022-04-26 19:33:37'),
(35, 10, 1, '2022-04-16', '19:38:00', 'vvxxcx2', '2022-04-26 19:34:40');

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
(1, 'kayle', 'kayle', 'kayle', '0000-00-00', 'k', 'kayle', 'q', '1', 'kayle', 'kayle'),
(2, 'test', NULL, '1', '1992-07-15', 'm', 'none', 'test1', '123', '', NULL),
(4, 'askdak', '', 'askfjlak', '2022-03-05', 'a', 'akfjlajf.a', 'akjsf@gmail.com', 'wakjdfka', '', 'none'),
(7, 'Abhi', '', 'bhuv', '2022-03-12', 'g', 'tesr', 'test@gmail.com', '12233', '', ''),
(8, 'Abhi', '', 'bhuv', '2022-03-12', 'j', 'tesr', 'test@gmail.com', 'hhjhj', '', ''),
(10, 'fjksd', '', 'dafal', '2022-03-04', 'm', 'kwjkfksj', 'a@gmail.com', 'kdfjdck', '', ''),
(12, 'zazaz', 'zazaza', 'zazaz', '2006-10-02', 'z', 'zaazaza', 'QWE', '123', 'zazaza', 'zazazaz'),
(15, '', '', '', '2012-02-01', '', '', '', '', '', ''),
(17, 'bbb', 'bbb', 'bbb', '2022-04-06', 'b', 'bbb', 'bbb', '123', 'bbb', 'bbb');

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
(4, 'abhishek', '', 'Bhuvanendran', '2022-03-09', 'm', '61 Asqah Dr', 'g@gmail.com', '123', 'no life', 'a life', 'livin g'),
(9, 'EE', 'EE', 'EE', '2021-10-01', 'E', 'EEE', 'EEE', '123', 'xzxz', 'xzxz', 'zxzxz'),
(10, 'mm', 'mm', 'mm', '2022-04-02', 'm', 'mm', 'mmm', '123', 'mm', 'mm', 'mm');

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
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
