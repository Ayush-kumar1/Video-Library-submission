import axios from 'axios';
import React, {useState,useEffect} from 'react'
import SingleContent from "../../components/SingleContent/SingleContent"

const Search = () => {

    const [content, setContent] = useState([]);
    const[val,setVal]=useState("");
    const [option,setOption]=useState("");

    const searchMovie= async ()=>{
       
         const {data}= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cee5e4ddc2c101df001e4a7f0318cec1&language=en-US&page=1&query=${val}&include_adult=false`)
        
         console.log(data.results)
         setContent(data.results);
    }

    const searchShow= async ()=>{
       
         const {data}= await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=cee5e4ddc2c101df001e4a7f0318cec1&language=en-US&page=1&query=${val}&include_adult=false`)
        
        console.log(data.results)
         setContent(data.results);
    }

    return (
        <div>
            <h1>Search</h1>

            <input type="text" style={{margin:"2px",padding:"5px",width:"30vw",borderRadius:"2px",outline:"None"}}
            onChange={(event)=> setVal(event.target.value)}/>
            <button style={{height:"1.8rem",width:"1.5rem"}}
            onClick={option==="movie"?()=> searchMovie():()=> searchShow()}>🔍</button>

            <fieldset style={{width:"30vw",margin:"0.5rem",padding:"1rem",fontSize:"1rem",display:"flex",justifyContent:"center"}}>
                <legend>Search By</legend>
                <label>
                    <input type="radio" name="search" onChange={()=> setOption("movie")} />
                    Movies
                </label>

                <label>
                    <input type="radio" name="search" onChange={()=> setOption("tv")} />
                    TV Shows
                </label>
            </fieldset>


            <div className="trending">
                {content && content.map((elem)=>
                    <SingleContent
                    key={elem.id}
                     id={elem.id}
                     poster={elem.poster_path}
                     title={elem.title || elem.name}
                    date={elem.first_air_date || elem.release_date}
                    media_type= {option==="tv"?"tv": "movie"}
                    vote_average={elem.vote_average}
                    payload={elem}/>
                )}
            </div>


            
        </div>
    )
}

export default Search
