import React, { useState } from "react";
import "./Login.css";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import { useVideo } from "../../VideoContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{state,dispatch}=useVideo();
 
  let navigate = useNavigate();

  const postData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return M.toast({ html: "Invalid email" });
    } else {
      fetch("http://localhost:5000/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message!=="Login succesful") {
            M.toast({ html: data.message, classes: "#c62828 red darken-3" });
          } else {
            localStorage.setItem("jwt",data.token);
            localStorage.setItem("user",JSON.stringify(data.user))
            dispatch({type:"USER", payload:data.user})
            M.toast({ html: "Login sucessful" });
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      <div className="media_card">
        <h1 className="brand-logo" style={{ margin: "0 auto" }}>
        Matrix
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Input
          style={{color:"white"}}
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
          style={{color:"white"}}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "2rem", margin: "0px auto" }}
            onClick={() => postData()}
          >
            Login
          </Button>

          <div className="signup-redirect">
            <Link to="/signup">
              {" "}
              <h5 className="signup-redirect" style={{ color: "white",fontSize:"1.2rem" }}>
                Don't have an account??
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
