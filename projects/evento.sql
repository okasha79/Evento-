-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2024 at 01:29 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evento`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@gmail.com', '$2b$10$QA/17utY0De.0uYHNCqhmOrqUe7WZOJcAQ5bCKWUyilvYRikbHo2W', 1, '2024-05-21 22:20:30', '2024-05-21 22:20:30');

-- --------------------------------------------------------

--
-- Table structure for table `basket`
--

CREATE TABLE `basket` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `itemId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` float DEFAULT 0,
  `image` text DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `sellings` float DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `title`, `description`, `price`, `image`, `category`, `createdAt`, `updatedAt`, `sellings`) VALUES
(23, 'Katb ketab', 'Savor the magic of our catering', 3000, 'catering_1.jpeg', 'catering', '2024-05-22 00:58:19', '2024-05-23 21:28:45', 2),
(24, 'Engagement', 'Elevating Events with a Touch of Elegance', 3000, 'catering_2.jpeg', 'catering', '2024-05-22 00:58:19', '2024-05-24 01:22:35', 2),
(25, 'Birthday', 'Taste the excellence of our catering', 3100, 'catering_3.jpeg', 'catering', '2024-05-22 00:58:19', '2024-05-23 21:18:08', 1),
(26, 'Antika', 'personal Photographer', 4500, 'photography_1.jpeg', 'photography', '2024-05-22 01:03:03', '2024-05-23 21:29:13', 3),
(27, 'Hassan desouky', 'product Photographer', 3000, 'photography_2.jpeg', 'photography', '2024-05-22 01:03:03', '2024-05-22 01:03:03', 0),
(28, 'Mohamed Khaled', 'bussines Photographer', 4000, 'photography_3.jpeg', 'photography', '2024-05-22 01:03:03', '2024-05-24 01:20:14', 1),
(29, 'Metro Boomin', 'Metro Boomin is taking his show on the road of Egypt at the Great Pyramids complex in Giza, Egypt', 5000, 'concert_1.webp', 'concert', '2024-05-22 01:09:25', '2024-05-22 01:09:25', 0),
(30, 'keinemusik', 'Keinemusik at The Giza Pyramids', 7000, 'concert_2.jpeg', 'concert', '2024-05-22 01:09:25', '2024-05-22 01:09:25', 0),
(31, 'Hakim', 'Hakim In Wadi Degla Club', 450, 'image-1716497153598-877454318', 'concert', '2024-05-22 01:09:25', '2024-05-24 00:32:28', 1),
(32, 'GrEEK Campus', 'Explore a variety of venues, from the Blue Room that accommodates up to 70 people to spaces like the Outdoor Area that accommodates up to 3,000 people—and everything in between.', 6000, 'workshop_1.jpg', 'workshop', '2024-05-22 01:13:06', '2024-05-22 01:13:06', 0),
(33, 'Founders Spaces', 'Want to work at Founders Spaces? We’re on the lookout for passionate individuals for a community associate role', 7000, 'workshop_2.jpeg', 'workshop', '2024-05-22 01:13:06', '2024-05-22 01:13:06', 0),
(34, 'Cube Space', 'Cube Space is Always offering a variety of options to meet your needs... take a look at our new meeting room', 4500, 'workshop_3.jpeg', 'workshop', '2024-05-22 01:13:06', '2024-05-22 01:13:06', 0),
(35, 'Marriott Mena House', 'They offer Aida Ballroom which can accommodate 900 guests and it’s the best venue for lavish wedding receptions. The hotel’s rooftop is from where you and your guests can enjoy the Nile’s view.', 500000, 'place_1.avif', 'place', '2024-05-22 01:17:32', '2024-05-22 01:17:32', 0),
(36, 'Four Seasons Hotel', 'Nile Ballroom is ideal for small to medium-sized events with a panoramic view of the river. Plaza Pre-function Area which can host up to 400 guests for the wedding reception. Kasr Al Nil, Corniche, Citadel, and Gezira are small venues that can accommodate up to 100 guests.', 650000, 'place_2.jpg', 'place', '2024-05-22 01:17:32', '2024-05-22 01:17:32', 0),
(37, 'Fairmont Nile Towers', 'Whether you wish to have a beautiful intimate wedding or an elaborate wedding, Grand Nile Tower has got you covered it keeps an eye on every small detail and you can enjoy your hassle-free wedding.', 450000, 'place_3.jpeg', 'place', '2024-05-22 01:17:32', '2024-05-24 01:18:08', 1),
(42, 'Baby Shower decoration', 'Baby boy/girl decoration', 2000, 'decoration_1.jpg', 'decoration', '2024-05-22 01:56:10', '2024-05-24 01:11:03', 1),
(43, 'Baby Shower decoration', 'Baby boy decoration', 1500, 'decoration_2.jpg', 'decoration', '2024-05-22 01:56:10', '2024-05-24 00:36:36', 3),
(44, 'Baby Shower decoration', 'Baby girl decoration', 3000, 'image-1716337278819-398122651', 'decoration', '2024-05-22 01:56:10', '2024-05-24 00:57:46', 2),
(47, 'Decoration For Boy Birthday', 'dsasa', 2500, 'image-1716494156495-800552599', 'decoration', '2024-05-23 21:55:56', '2024-05-23 22:27:49', 0),
(48, 'Decoration For Boy Birthday', 'ddddddddd', 4999, 'image-1716496112833-479845522', 'decoration', '2024-05-23 22:28:32', '2024-05-24 00:57:46', 1),
(49, 'Engagement', 'engagementssss', 8000, 'image-1716496287510-789407311', 'decoration', '2024-05-23 22:31:27', '2024-05-23 22:33:33', 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `eventDate` datetime DEFAULT NULL,
  `eventTime` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `price` float DEFAULT 0,
  `orderId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `itemId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230821142618-create-admin.js'),
('20230821142632-create-user.js'),
('20240521200735-create-item.js'),
('20240521220650-create-basket.js'),
('20240523190052-add_sellings_in_items.js'),
('20240523212533-create-order.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isActive` tinyint(1) DEFAULT 0,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'user', 'user@gmail.com', '$2b$10$8KH/6B0YVUpQftm5FubfH.YAp1i0aITHZWDhT4J2gll9p3u5oiCei', 1, '2024-05-21 22:20:30', '2024-05-21 22:20:30'),
(2, 'user', 'user2@gmail.com', '$2b$10$8fABgkzPvzDW5BStfOB5H.UaqrpXrubVF1o/U6PUzKpvGAYKTwNIG', 0, '2024-05-22 00:02:42', '2024-05-22 00:02:42'),
(3, 'user', 'user3@gmail.com', '$2b$10$/siNFVNd16ei3yEw5LSotuD9yOD1vSCjR5vGqA1cAhH9xyRZ63dGe', 1, '2024-05-22 00:03:02', '2024-05-22 00:03:02'),
(4, 'Mostafa', 'mostafa@gmail.com', '$2b$10$L/BQcMyAe/tHl1iuAIeLw.xRTGrilupuQHStIG8Nxtj09g8URQMti', 1, '2024-05-22 12:11:51', '2024-05-22 12:11:51'),
(5, 'Test', 'test@gmail.com', '$2b$10$L/BQcMyAe/tHl1iuAIeLw.xRTGrilupuQHStIG8Nxtj09g8URQMti', 1, '2024-05-22 12:12:48', '2024-05-22 12:12:48'),
(6, 'test3', 'test3@gmail.com', '$2b$10$L/BQcMyAe/tHl1iuAIeLw.xRTGrilupuQHStIG8Nxtj09g8URQMti', 1, '2024-05-22 12:13:52', '2024-05-22 12:13:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `basket`
--
ALTER TABLE `basket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `basket_ibfk_2` FOREIGN KEY (`itemId`) REFERENCES `items` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`itemId`) REFERENCES `items` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
