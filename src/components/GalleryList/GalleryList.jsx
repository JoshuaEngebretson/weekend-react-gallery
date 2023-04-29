import GalleryItem from "./GalleryItem/GalleryItem";

const GalleryList = (props) => {

  return (
    <>
      <h1>Films I Love</h1>
      <div className="item-card-container">
        {
          props.galleryListArray.map((item) => {
            return (
              <GalleryItem 
                key={item.id}
                item={item}
                getGalleryList={props.getGalleryList}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default GalleryList;