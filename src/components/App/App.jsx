import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function App() {

  const [galleryListArray, setGalleryListArray] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, []);

  const getGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      setGalleryListArray(response.data);
    }).catch(err => {
      Swal.fire({
        text: 'There was an error getting the Gallery, try again later.'
      })
      console.log('Error:', err);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        galleryListArray={galleryListArray}
        getGalleryList={getGalleryList}
      />
    </div>
  );
}

export default App;
