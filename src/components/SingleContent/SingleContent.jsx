import React, {useState, useEffect}from 'react'
import {img_300, unavailable} from "../../Config/Config"
import "./SingleContent.css"
import {useCart} from "../../CartContext"
import axios from "axios"

const SingleContent = ({id,poster,title,date,media_type,vote_average,payload}) => {

    const {setWishlist}=useCart()

    const [video,setVideo]=useState()

   const fetchVideo=async ()=>{
       
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type || "movie"}/${id}/videos?api_key=cee5e4ddc2c101df001e4a7f0318cec1&language=en-US`
      );
    //   console.log(data)
  
      setVideo(data.results[0]?.key);
   }

   useEffect(() => {
   
    fetchVideo();
    // eslint-disable-next-line
  }, []);



    return (

        <div className="media_card">
             
             <img className="poster" src={poster?`${img_300}/${poster}`:unavailable} alt="Poster" />
              <b className="title">{title}</b>
             <span className="subTitle">
                 {media_type==="tv"? "Tv Series":"Movie"}
                 <span className="subTitle">{date}</span>
             </span> 

             <button className="btn-primary" onClick={()=> setWishlist((items)=> [...items,payload])}>Wishlist</button>
             <button className="btn-primary"><a target="_blank" href={`https://www.youtube.com/watch?v=${video}`} alt='Broken Link'>Watch 👀</a></button>
        </div>

            
        
    )
}

export default SingleContent
