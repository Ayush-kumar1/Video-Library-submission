import React, { useEffect, useState } from "react";
import "./Favourite.css";
import { useCart } from "../../CartContext";
import Playlist from "../../components/Playlist/Playlist";
import axios from "axios";
import { useVideo } from "../../VideoContext";
import { img_300, unavailable } from "../../Config/Config";
import { Link } from "react-router-dom";

const Favourite = () => {
  const [data, setData] = useState([]);
  const [video, setVideo] = useState();

  useEffect(() => {
    fetch("https://matrix-watch-5.herokuapp.com/mywishlist", {
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
    fetch("https://matrix-watch-5.herokuapp.com/removewishlist", {
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
        console.log(result.result._id);
        const newData = data.filter((item) => {
          return item._id !== result.result._id;
        });

        setData(newData);
      });
  }

  return (
    // {
    //   data?
    // }
    <div>
      <span className="pageTitle">Favourites</span>

      {data.length !== 0 ? (
        <div className="favourite-container">
          {data &&
            data.map((elem) => (
              <div className="container-fav">
                <div className="media">
                  <img
                    className="poster"
                    src={
                      elem.poster ? `${img_300}/${elem.poster}` : unavailable
                    }
                    alt="Poster"
                  />
                  <b className="title">{elem.title}</b>
                  <span className="subTitle">
                    {elem.media_type === "tv" ? "Tv Series" : "Movie"}
                    <span className="subTitle">{elem.date}</span>
                  </span>

                  {/* <button className="btn-primary" onClick={()=> setWishlist((items)=> [...items,payload])}>Wishlist</button> */}
                  <button className="btn-primary">
                    <Link
                      to={"/details/:" + elem.media_type + "/" + elem.title}
                    >
                      View Details
                    </Link>
                  </button>
                  <button
                    className="btn-primary"
                    onClick={() => deleteData(elem._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <h1 style={{ padding: "2rem" }}>
            You have not marked anything as favourite
          </h1>
        </div>
      )}
    </div>
  );
};

export default Favourite;
