import axios from 'axios'
import React from 'react'
import {useState,useEffect} from "react";
import SingleContent from "../../components/SingleContent/SingleContent"

const Movies = () => {
    const [content,setContent]=useState([])

    const fetchMovies=async ()=>{

        const {data}= await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=cee5e4ddc2c101df001e4a7f0318cec1");

        // console.log(data.results);
        setContent(data.results);
    }

    useEffect(()=>{
          
        fetchMovies();
        return()=>{
            setContent([])
        };   
    },[])

    // useEffect(() => {
    //     fetchMovies();
    //     return () => {
    //        setContent([])
    //     }
    // }, [])

    return (
        <div>
            <span className="pageTitle">Movies</span>
            <div className="trending">
                {content && content.map((elem)=>
                
               
                    <SingleContent
                    key={elem.id}
                     id={elem.id}
                     poster={elem.poster_path}
                     title={elem.title || elem.name}
                    date={elem.first_air_date || elem.release_date}
                    media_type={elem.media_type}
                    vote_average={elem.vote_average}
                    payload={elem}/>

                    
                )}

                {
                   content && content.map(elem=> console.log(elem.media_type+ "for movies"))
                }

            </div>
        </div>
    )
}

export default Movies
