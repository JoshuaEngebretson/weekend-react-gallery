import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TextInput from "./TextInput/TextInput";

function AddGalleryItem(props) {

  const addToGallery = (event) => {
    event.preventDefault();
    console.log('Add to Gallery clicked');
  }

  return (
    <>
      <h1>Add a new photo</h1>
      <form htmlFor="Create new Gallery Item">
        <TextInput
          name='Image url'
          placeholder='http://address_here'
        />
        <TextInput
          name='Image Title'
          placeholder='Name of image'
        />
        <TextInput
          name='Image Description'
          placeholder='Info about image'
        />
        <button onClick={addToGallery}>Add to Gallery</button>
      </form>
    </>
  )
}

export default AddGalleryItem;