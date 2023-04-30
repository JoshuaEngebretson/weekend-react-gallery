import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const GalleryItem = (props) => {

  const [showText, setShowText] = useState(false)
  
  const item = props.item;

  const ImageOrText = () => {
    if (showText){
      return <p className='square text'>{item.description}</p>
    }
    else {
      return <img src={item.path} className='square'/>
    }
  }

  const toggleText = () => {
    if (showText) {
      setShowText(false)
    }
    else {
      setShowText(true)
    }
  }

  const addLike = () => {
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
      console.log('Error:', err);
    })
  }

  const deleteItem = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Delete Confirmation',
      text: `Are you sure you want to remove ${item.title} from the database?`,
      showCancelButton: true,
      confirmButtonText: `Delete ${item.title}.`,
      cancelButtonText: 'No, I want to cancel!',
      reverseButtons: true
    }).then((result) => {
      if(result.isConfirmed){
          axios({
            method: 'DELETE',
            url: `/gallery/${item.id}`
          }).then(res => {
            Swal.fire({
              icon: 'success',
              title: 'Delete Complete',
              text: `${item.title} has been deleted from the database.`
            })
            props.getGalleryList();
          }).catch(err => {
            Swal.fire({
              icon: 'error',
              text: `An error occured while deleting ${item.title}, please try again later.`
            })
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
  }

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