# React Picture Gallery (W10)
## Description
Duration: Weekend Project (04/28/23 - 04/30/23)

Created a Picture Gallery to view photos of movies that I love, and add the ability to "like" the picture.

This was created using React.js, hosting the server via nodemon, and utilizing a PostgreSQL database to keep track of all the data.

-----
## Prerequisites

- [Node.js](https://nodejs.org/en/)
    - This is for hosting the server and communicating with the database.
- [PostgreSQL](https://www.postgresql.org/)
    - This is used for hosting the database.
- [Postico](https://eggerapps.at/postico/v1.php)
    - This is used to set up your initial test database.

-----
## Installation

1. Node Module - sweetalert2, axios, nodemon, and react.
    1. Once Node is installed, you will need to perform the following command within your terminal `npm install`.
        - This will install the node_modules folder the dependencies for the app.

2. Set up your database
    1. Using Postico, create a database titled `react_gallery`.
    2. Use the database.sql file to enter your initial starting data into your database.


3. You will need two terminals to operate the app properly.
    1. The first you will run the command `npm run server`
        - This will host the server on [localhost:5000](http://localhost:5000/)
    2. The second you will run the command `npm run client`
        - This should open up your browser on [localhost:3000](http://localhost:3000/)
----

## Usage
###  Once the page is open, you are able to view the images within the gallery. ###
1. To view a description of what each image represents, you can click on the image itself.
    - This will swap the image for the description.
    - To swap back to the image, just click on the description text and the image will return.
2. If you like or love a the film represented by each image, you can click on the `Love It!` button within that films card.
    - This will increase the count of message below that button.
3. If you want to remove an image from the database, you can click on the `Delete it!` button within that films card.
    - This will prompt you to confirm if you want to delete that image.
    - If confirmed, this image will be removed from that database.

###  To add an image to the gallery ###
1. Fill out the inputs at the top of the page
    - In "Image url" you should place the absolute path for your image (this can be a website, or an absolute path on your computer)
    - In "Image Title" you should enter a name/title for the image
    - In "Image Description" you should enter a brief description about the image.
2. Once you are ready to add the image, click the `Add to Gallery` button
    1. When this button is clicked, it will confirm that the above fields have been filled in.
        - If any of the above information was missed, an alert will pop up requesting that you "Please fill out the required fields"
        - If a field was missed, it will be highlighted in a red border, and the place holder text will turn red to indicate it is a required field.
    2. If the image was successfully added to the gallery an alert will pop up stating that "ImageTitleHere added to gallery"
        - Then the input fields will be cleared out and you can add a new image if you would like.
    3. If there was an error adding the image to the gallery
        - An alert will let you know that the image was not added due to an error and ask that you try again later.
        - The input fields will remain filled in until either;
            - You clear them out
            - You click the `Reset Inputs` button
            - Or you refresh the browser
3. If while you are entering information you desire to reset what you have written, you can click on the `Reset Inputs` button
    - This button will clear out all the information that was entered into the input fields.

-----
## Built With

- Node.js
- React.js
- PostgreSQL
- Postico

-----
## Acknowledgement

  - Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

  - Thanks to my Partner for giving me pointers on styling, and putting up with me while I built this application.

-----
## Support
If you have suggestions or issues, please email me [here](mailto:joshua.engebretson@gmail.com).