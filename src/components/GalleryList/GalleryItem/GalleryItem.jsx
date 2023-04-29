import './GalleryItem.css';
import { useState } from 'react';

const GalleryItem = (props) => {

  const [showText, setShowText] = useState(false)

  const ImageOrText = () => {
    if (showText){
      return <p>{props.item.description}</p>
    }
    else {
      return <img src={props.item.path} className='square-img'/>
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

  return (
    <div className='item-card'>
      <div className='text-image' onClick={toggleText}>
        <ImageOrText />
      </div>
      <div>
        <button className="love">Love It!</button>
        <p>{props.item.likes} people have loved this image!</p>
      </div>
    </div>
  )
}

export default GalleryItem