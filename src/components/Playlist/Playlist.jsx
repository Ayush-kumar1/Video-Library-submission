import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../../Config/Config";
import "./Playlist.css";
import ContentModal from "../ContentModal/ContentModal";
import { useCart } from "../../CartContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Playlist = ({
  deletion_id,
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  deleteData
}) => {
  
  let navigate = useNavigate();
 
  const [video, setVideo] = useState();

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${
        media_type || "movie"
      }/${id}/videos?api_key=cee5e4ddc2c101df001e4a7f0318cec1&language=en-US`
    );
    //   console.log(data)

    setVideo(data.results[0]?.key);
  };

   function deleteData(id) {
    
    window.location.reload();
    

    fetch("http://localhost:5000/removewishlist" ,{
      method:"put",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        wishlistid:id
      })
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      
      // navigate("/favourite");

      
    })   
  }

  useEffect(() => {
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="media">
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt="Poster"
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "Tv Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>

        {/* <button className="btn-primary" onClick={()=> setWishlist((items)=> [...items,payload])}>Wishlist</button> */}
        <button className="btn-primary">
          <a
            target="_blank"
            href={`https://www.youtube.com/watch_popup?v=${video}`}
            alt="Broken Link"
          >
            Watch 👀
          </a>
        </button>
        <button className="btn-primary" onClick={() => deleteData(deletion_id)}>
          Remove
        </button>
      </div>
    </>
  );
};

export default Playlist;
