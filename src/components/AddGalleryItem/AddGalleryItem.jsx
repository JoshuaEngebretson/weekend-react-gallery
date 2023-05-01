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
    // Create an object based on the input fields
    const newGalleryItem = {
      path: newImageUrl,
      description: newImageDescription,
      title: newImageTitle
    };

    // Check if all fields are completed
    if (newImageUrl !== '' && newImageTitle !== '' && newImageDescription !== '') {
      // Send a POST to /gallery sending the newGalleryItem
      axios({
        method: 'POST',
        url: '/gallery',
        data: {newGalleryItem}
      }).then(response => {
        // If successful
        // Alert the user, it succeeded
        Swal.fire({
          icon: 'success',
          text: `${newImageTitle} added to gallery`,
        })
        // Clear out the input fields once created
        resetInputs()
        // Update the GalleryList which will re-render to the DOM
        props.getGalleryList()
      }).catch(error => {
        // If unsuccessful
        // Alert the user of the error
        Swal.fire({
          icon: 'warning',
          text: `Error adding ${newImageTitle} to the gallery, please try again later`
        })
        // Log the error
        console.log('Error:', error);
      })
    }
    // If the fields are not completed, alert the user of required fields
    else {
      // alert the user not all required fields were completed.
      Swal.fire({
          text: 'Please fill out the required fields'
      })
      // Call on requiredFields function which will highlight fields
      //  that need to be completed.
      requiredFields();
    }
  } // End handleSubmit

  // Function will check if any required field is empty,
  //  if it is, will update that input to show the user
  //  they need to complete that field to move forward.
  const requiredFields = () => {
    // If newImageUrl is empty, change that requirement to true
    if (newImageUrl === '') {
      setRequiredUrl(true)
    }
    // If newImageTitle is empty, change that requirement to true
    if (newImageTitle === '') {
      setRequiredTitle(true)
    }
    // If newImageDescription is empty, change that requirement to true
    if (newImageDescription === '') {
      setRequiredDescription(true)
    }
  } // End requiredFields

  const resetInputs = () => {
    // Clear out inputs
    setNewImageUrl('');
    setNewImageTitle('');
    setNewImageDescription('');
    // Reset the red border and change
    //  the placeholder text back to black
    setRequiredUrl(false);
    setRequiredTitle(false);
    setRequiredDescription(false);
  } // End resetInputs

  const required = (param) => {
    // if the parameter pass in is true
    if (param) {
      // return the css className that
      //  will show this input is required
      return 'red-background'
    }
    // Else, no className needed.
    else {
      return ''
    }
  } // End required

  // 👇 is what the AddGalleryItem looks like
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