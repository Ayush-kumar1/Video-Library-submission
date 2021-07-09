import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import "./Details.css";
import axios from "axios";
import { img_300, unavailable } from '../../Config/Config';

function Details() {

    const {name}=useParams();
    const{media}=useParams();
    const[data,setData]=useState([]);
    const[video,setVideo]=useState();

    var temp=media.replace(":","");

    
   

   

    const media_type=temp==="tv"?"tv":"movie";
   

    const getData=async ()=>{
        const temp=await axios.get(
            `https://api.themoviedb.org/3/search/${media_type}?api_key=cee5e4ddc2c101df001e4a7f0318cec1&language=en-US&page=1&query=${name}&include_adult=false`
        )

        
        setData(temp.data.results[0]);
    }

   


  

   const fetchVideo=async ()=>{
       
        const  temp_2  = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${data.id}/videos?api_key=cee5e4ddc2c101df001e4a7f0318cec1&language=en-US`
          );

          
          setVideo(temp_2.data.results[0]?.key)
       }

       useEffect(()=>{
        getData();
        
    },[])

     
      if(data.id!== undefined){
       fetchVideo();
      }

   
    return (
        <div>
           
             <h1>{data.title}</h1>

             <div className="container">
            <img className="detail-image" src={data.poster_path?`${img_300}/${data.poster_path}`:unavailable} alt="" />

            <div className="details-container">
            <h2 className="overview">{data.overview}</h2>
            <h3>Release date- {data.release_date}</h3> 
            <h3>Rating- {data.vote_average}</h3>
            <button className="btn-primary-details" ><a target="_blank" href={`https://www.youtube.com/watch_popup?v=${video}`} alt='Broken Link'>Watch</a></button> 
            </div>
            </div>

            
           
           
        </div>
    )
}

export default Details
