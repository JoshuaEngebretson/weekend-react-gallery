import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const GalleryItem = (props) => {

  const [showText, setShowText] = useState(false)

  const ImageOrText = () => {
    if (showText){
      return <p className='square text'>{props.item.description}</p>
    }
    else {
      return <img src={props.item.path} className='square'/>
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

  const addLike = (item) => {
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

  return (
    <div className='item-card'>
      <div className='text-image' onClick={toggleText}>
        <ImageOrText />
      </div>
      <div>
        <button className="love" onClick={() => addLike(props.item)}>Love It!</button>
        <p>{props.item.likes} people have loved this image!</p>
      </div>
    </div>
  )
}

export default GalleryItem