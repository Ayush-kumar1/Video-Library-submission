import React, { useEffect, useState } from "react";
import "./Favourite.css";
import { useCart } from "../../CartContext";
import Playlist from "../../components/Playlist/Playlist";
import axios from "axios";
import { useVideo } from "../../VideoContext";
import { img_300, unavailable } from "../../Config/Config";

const Favourite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/mywishlist", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.mywishlist);
        console.log(result.mywishlist);
      });
  }, []);

  function deleteData(id) {
    fetch("http://localhost:5000/removewishlist", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wishlistid: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  return (
    <div>
      <span className="pageTitle">Favourites</span>
      <div className="trending">
        {data &&
          data.map((elem) => (
            <Playlist
              deletion_id={elem._id}
              id={elem.id}
              poster={elem.poster}
              title={elem.title || elem.name}
              date={elem.first_air_date || elem.release_date}
              media_type={elem.media_type}
              vote_average={elem.vote_average}
              deleteData
            />
          ))}
      </div>
    </div>
  );
};

export default Favourite;
