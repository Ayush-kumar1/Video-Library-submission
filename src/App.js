import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/Main_nav/Main_nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Favourite from "./Pages/Favourite/Favourite";
import Container from "@material-ui/core/Container";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { useVideo } from "./VideoContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Details from "./Pages/Details/Details";

function App() {
  let navigate = useNavigate();
  const { state, dispatch } = useVideo();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      // navigate("/")
      dispatch({ type: "USER", payload: user });
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:media/:name" element={<Details />} />
        </Routes>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
