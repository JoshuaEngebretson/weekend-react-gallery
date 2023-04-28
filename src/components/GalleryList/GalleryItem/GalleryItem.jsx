import './GalleryItem.css';


const GalleryItem = (props) => {

  return (
    <div>
      <img src={props.item.path} className='square-img'/>
      <div>
        <button className="love">Love It!</button>
        <p>{props.item.likes} people have loved this image!</p>
      </div>
    </div>
  )
}

export default GalleryItem