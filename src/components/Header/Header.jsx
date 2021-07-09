import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import {Link} from "react-router-dom";
import { useVideo } from "../../VideoContext";
import { useNavigate } from "react-router";

const Header = () => {

  const{state,dispatch}=useVideo();
  let navigate=useNavigate();
  return (
    <div className="header">
        <Link to={state?"/":"/login"}>
      <h2 className="brand-logo">Matrix</h2>
      </Link>
      <span style={{ fontSize: "5vw" }} onClick={() => window.scroll(0, 0)}>
        📹 Video Library ⏯️
      </span>

      <div style={{paddingTop:"2rem"}}>

      <IconButton>
           <Link to="/login">
            <PersonIcon/>
            </Link>
        </IconButton>

        <Button onClick={()=>{
          localStorage.clear();

          dispatch({ type: "CLEAR" });
          navigate("/login")

        }} variant="contained" color="secondary">
          Logout
        </Button>

      </div>
    </div>
  );
};

export default Header;
