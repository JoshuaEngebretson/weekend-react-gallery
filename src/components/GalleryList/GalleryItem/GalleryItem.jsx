import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const GalleryItem = (props) => {

  const [showText, setShowText] = useState(false)
  
  const item = props.item;

  // Function to check if showText is true or false,
  //  Conditionally renders either;
  //    the description 
  //    OR
  //    the image based on that state
  const ImageOrText = () => {
    // If text showText is true, render the text
    if (showText){
      return <p className='square text'>{item.description}</p>
    }
    // Else, render the image
    else {
      return <img src={item.path} className='square'/>
    }
  } // End ImageOrText

  // Function to change showText from true > false
  //  and from false > true
  const toggleText = () => {
    // If showText is currently true, toggle to false
    if (showText) {
      setShowText(false)
    }
    // Else, toggle to true
    else {
      setShowText(true)
    }
  } // End toggleText

  // Function to addLike to the item where the data is stored
  const addLike = () => {
    // Send PUT request to /gallery/like/:id
    axios({
      method: 'PUT',
      url: `/gallery/like/${item.id}`
    }).then(res => {
      // If successful, update the GalleryList
      props.getGalleryList();
    }).catch(err => {
      // Provide an alert to the user that there was an error
      Swal.fire({
        text: `There was an error updating the like status for the image of ${item.title}.`
      })
      // and log that error
      console.log('Error:', err);
    })
  } // End addLike

  // Function to delete the item where the data is stored
  const deleteItem = () => {
    // Pop up alert to confirm if the user wants to delete the item
    Swal.fire({
      icon: 'warning',
      title: 'Delete Confirmation',
      text: `Are you sure you want to remove ${item.title} from the database?`,
      showCancelButton: true,
      confirmButtonText: `Delete ${item.title}.`,
      cancelButtonText: 'No, I want to cancel!',
      reverseButtons: true
    }).then((result) => {
      // If confirmed, delete the item and alert the user about success or failure
      if(result.isConfirmed){
        axios({
          method: 'DELETE',
          url: `/gallery/${item.id}`
        }).then(res => {
          // If successful, alert the user
          Swal.fire({
            icon: 'success',
            title: 'Delete Complete',
            text: `${item.title} has been deleted from the database.`
          })
          // and pull the Gallery List from the database again
          props.getGalleryList();
        }).catch(err => {
          // If unsuccessful, alert the user there was an error
          Swal.fire({
            icon: 'error',
            text: `An error occured while deleting ${item.title}, please try again later.`
          })
          // and log the error
          console.log('Delete Error:', err);
        })
      }
      else if (result.dismiss === Swal.DismissReason.cancel){
        // If cancelled, alert the user that this item was not deleted
        Swal.fire({
          icon: 'error',
          title: 'Phew!',
          text: `That was close, ${item.title} is still in the database`
        })
      }
    })
  } // End deleteItem

  // 👇 Is what a GalleryItem looks like
  return (
    <div className='item-card'>
      <div className='text-image' onClick={toggleText}>
        <ImageOrText />
      </div>
      <div>
        <div>
          <button className="love" onClick={addLike}>Love It!</button>
          <button className="red" onClick={deleteItem}>Delete it!</button>
        </div>
        <p>{item.likes} people have loved this image!</p>
      </div>
    </div>
  )
}

export default GalleryItem