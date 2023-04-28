import './GalleryItem.css';


const GalleryItem = (props) => {

  return (
    <div>
      <img src={props.path}/>
      <button className="love">Love It!</button>
      <p>{props.likes} people have loved this image!</p>
    </div>
  )
}

export default GalleryItem