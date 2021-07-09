import axios from "axios";
import React, { useState, useEffect } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

const Search = () => {
  const [content, setContent] = useState([]);
  const [val, setVal] = useState("");
  const [option, setOption] = useState("");

  const searchMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=cee5e4ddc2c101df001e4a7f0318cec1&language=en-US&page=1&query=${val}&include_adult=false`
    );

    console.log(data.results);
    setContent(data.results);
  };

  const searchShow = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=cee5e4ddc2c101df001e4a7f0318cec1&language=en-US&page=1&query=${val}&include_adult=false`
    );

    console.log(data.results);
    setContent(data.results);
  };

  return (
    <div>
      <h1 style={{ marginLeft: "1rem" }}>Search</h1>

      <input
        type="text"
        style={{
          marginLeft: "1rem",
          padding: "5px",
          width: "30vw",
          borderRadius: "2px",
          outline: "None",
        }}
        onChange={(event) => setVal(event.target.value)}
      />

      <IconButton
        onClick={option === "movie" ? () => searchMovie() : () => searchShow()}
      >
        <SearchIcon />
      </IconButton>

      <div id="dropdown_header">
        <button class="btn-primary">Dropdown</button>
        <div class="dropdown-content">
          <button
            style={{ marginLeft: "1rem" }}
            onClick={() => setOption("movie")}
          >
            Movie
          </button>
          <button
            style={{ marginLeft: "1rem" }}
            onClick={() => setOption("tv")}
          >
            Tv Series
          </button>
        </div>
      </div>

      <div className="trending-search">
        {content &&
          content.map((elem) => (
            <SingleContent
              key={elem.id}
              id={elem.id}
              poster={elem.poster_path}
              title={elem.title || elem.name}
              date={elem.first_air_date || elem.release_date}
              media_type={option === "tv" ? "tv" : "movie"}
              vote_average={elem.vote_average}
              payload={elem}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
