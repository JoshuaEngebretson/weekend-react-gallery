import GalleryItem from "./GalleryItem/GalleryItem";
import Axios from 'axios';
import { useState } from "react";

const GalleryList = (props) => {
  console.log('props.GalleryList', props.GalleryList);

  return (
    <>
      <h1>My Gallery</h1>
      {
        props.galleryListArray.map((item) => {
          return <GalleryItem key={item.id} item={item} />
        })
      }
    </>
  )
}

export default GalleryList;