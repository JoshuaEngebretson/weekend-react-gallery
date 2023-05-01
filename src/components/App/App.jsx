import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AddGalleryItem from '../AddGalleryItem/AddGalleryItem';

function App() {

  const [galleryListArray, setGalleryListArray] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, []);

  const getGalleryList = () => {
    // GET the galleryList from /gallery
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      // If successful, setGalleryListArray
      //  equal to the data received.
      setGalleryListArray(response.data);
    }).catch(err => {
      // If there is an error, alert the user of the error
      Swal.fire({
        text: 'There was an error getting the Gallery, try again later.'
      })
      console.log('Error:', err);
    })
  } // End getGalleryList

  // 👇 is what an App looks like.
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <AddGalleryItem 
        getGalleryList={getGalleryList}
      />
      <GalleryList
        galleryListArray={galleryListArray}
        getGalleryList={getGalleryList}
      />
    </div>
  );
}

export default App;