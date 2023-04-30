import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TextInput from "./TextInput/TextInput";
import './AddGalleryItem.css'

function AddGalleryItem(props) {

  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageTitle, setNewImageTitle] = useState('');
  const [newImageDescription, setNewImageDescription] = useState('');

  const [requiredUrl, setRequiredUrl] = useState(false);
  const [requiredTitle, setRequiredTitle] = useState(false);
  const [requiredDescription, setRequiredDescription] = useState(false);

  const handleSubmit = () => {

    const newGalleryItem = {
      path: newImageUrl,
      description: newImageDescription,
      title: newImageTitle
    };

    // Check if fields completed
    if (newImageUrl !== '' && newImageTitle !== '' && newImageDescription !== '') {
      axios({
        method: 'POST',
        url: '/gallery',
        data: {newGalleryItem}
      }).then(response => {
        // If successful, update Gallery and reset the inputs
        Swal.fire({
          icon: 'success',
          text: `${newImageTitle} added to gallery`,
        })
        resetInputs()
        props.getGalleryList()
      }).catch(error => {
        Swal.fire({
          icon: 'warning',
          text: `Error adding ${newImageTitle} to the gallery, please try again later`
        })
        console.log('Error:', error);
      })
    }
    else {
      Swal.fire({
          text: 'Please fill out the required fields'
      })
      requiredFields();
    }
  }

  const requiredFields = () => {
    if (newImageUrl === '') {
      setRequiredUrl(true)
    }
    if (newImageTitle === '') {
      setRequiredTitle(true)
    }
    if (newImageDescription === '') {
      setRequiredDescription(true)
    }
  }

  const resetInputs = () => {
    setNewImageUrl('');
    setNewImageTitle('');
    setNewImageDescription('');
    setRequiredUrl('');
    setRequiredTitle('');
    setRequiredDescription('');
  }

  const required = (param) => {
    if (param) {
      return 'red-background'
    }
    else {
      return ''
    }
  }

  return (
    <>
      <h1>Add a new photo</h1>
      <form htmlFor="Create new Gallery Item">
        <TextInput
          name='Image url'
          placeholder='http://address_here'
          item={newImageUrl}
          setItem={setNewImageUrl}
          requiredClass={required(requiredUrl)}      
        />
        <TextInput
          name='Image Title'
          placeholder='Name of image'
          item={newImageTitle}
          setItem={setNewImageTitle}
          requiredClass={required(requiredTitle)} 
        />
        <TextInput
          name='Image Description'
          placeholder='Info about image'
          item={newImageDescription}
          setItem={setNewImageDescription}
          requiredClass={required(requiredDescription)}
        />
      </form>
        <div>
          <button onClick={handleSubmit} className="green">Add to Gallery</button>
          <button onClick={resetInputs} className="red">Reset Inputs</button>
        </div>
    </>
  )
}

export default AddGalleryItem;