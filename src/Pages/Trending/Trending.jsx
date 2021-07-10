import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=cee5e4ddc2c101df001e4a7f0318cec1`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <span className="pageTitle">Trending</span>

      <div className="trending">
        {content &&
          content.map((elem) => (
            <SingleContent
              key={elem.id}
              id={elem.id}
              poster={elem.poster_path}
              title={elem.title || elem.name}
              date={elem.first_air_date || elem.release_date}
              media_type={elem.media_type}
              vote_average={elem.vote_average}
              payload={elem}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending;
