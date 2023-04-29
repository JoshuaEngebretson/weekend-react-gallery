-- Name of the database should be react_gallery

-- Starting SQL table
CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(255),
	description TEXT,
	likes SMALLINT DEFAULT 0,
	title VARCHAR(255)
);

-- Here is the initial data
INSERT INTO gallery 
	(path, description, likes, title)
	VALUES
	('images/Howls_Moving_Castle.jpg', 'Movie poster for the Studio Ghibli film "Howls Moving Castle".', 7, 'Howls Moving Castle'),
	('images/Nausicaa_of_the_Valley_of_the_Wind.jpeg', 'Movie poster for the Studio Ghibli film "Nausicaa of the Valley of the Wind".', 2, 'Nausicaa'),
	('images/Ponyo.jpeg', 'Movie poster for the Studio Ghibli film "Ponyo".', 1, 'Ponyo'),
	('images/Princess_Mononoke.jpeg', 'Movie poster for the Studio Ghibli film "Princess Mononoke".', 10, 'Princess Mononoke'),
	('images/Spirited_Away.jpeg', 'Movie poster for the Studio Ghibli film "Spirited Away".', 9, 'Spirited Away'),
	('images/My_Neighbor_Totoro.jpg', 'Movie poster for the Studio Ghibli film "My Neighbor Totoro".', 9, 'Totoro'),
	('images/The_Secret_World_of_Arrietty.jpg', 'Movie poster for the Studio Ghibli film "The Secret World of Arrietty".', 1, 'Arrietty'),
	('images/Kikis_Delivery_Service.jpg', 'Movie poster for the Studio Ghibli film "Kikis Delivery Service".', 6, 'Kiki'),
	('images/Porco_Rosso.jpeg', 'Movie poster for the Studio Ghibli film "Porco Rosso".', 1, 'Porco Rosso'),
	('images/The_Wind_Rises.jpg','Movie poster for the Studio Ghibli film "The Wind Rises".', 2, 'The Wind Rises'),
	('images/The_Fellowship_of_the_Ring.jpg', 'Movie poster for the Lord of the Rings film "The Fellowship of the Ring".', 6, 'Fellowship of the Ring'),
	('images/Return_of_the_King.jpg', 'Movie poster for the Lord of the Rings film "Return of the King".', 5, 'Return of the King'),
	('images/Luca.jpg', 'Movie poster for the Disney and Pixar film "Luca".', 8, 'Luca'),
	('images/Ratatouille.jpeg', 'Movie poster for the Disney and Pixar film "Ratatouille".', 7, 'Ratatouille'),
	('images/Encanto.jpeg', 'Movie poster for the Disney film "Encanto".', 5, 'Encanto'),
	('images/The_Mummy.jpg', 'Movie poster for the film "The Mummy".', 3, 'The Mummy'),
	('images/Bram_Stokers_Dracula.jpg', 'Movie poster for the film "Bram Stokers Dracula".', 1, 'Dracula'),
	('images/The_Mask_of_Zorro.jpg', 'Movie poster for the film "The Mask of Zorro".', 0, 'Zorro');

