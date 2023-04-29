import GalleryItem from "./GalleryItem/GalleryItem";
import Axios from 'axios';
import { useState } from "react";

const GalleryList = (props) => {

  return (
    <>
      <h1>My Gallery</h1>
      <div className="item-card-container">
        {
          props.galleryListArray.map((item) => {
            return <GalleryItem key={item.id} item={item} />
          })
        }
      </div>
    </>
  )
}

export default GalleryList;