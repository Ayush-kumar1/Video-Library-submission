import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";

const Series = () => {
  const [content, setContent] = useState([]);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/tv?api_key=cee5e4ddc2c101df001e4a7f0318cec1"
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <div>
      <span className="pageTitle">Series</span>
      <div className="trending">
        {content &&
          content.map((elem) => (
            <SingleContent
              key={elem.id}
              id={elem.id}
              poster={elem.poster_path}
              title={elem.title || elem.name}
              date={elem.first_air_date || elem.release_date}
              media_type="tv"
              vote_average={elem.vote_average}
              payload={elem}
            />
          ))}
      </div>
    </div>
  );
};

export default Series;
