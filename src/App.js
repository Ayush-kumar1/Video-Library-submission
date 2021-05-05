import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/Main_nav";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies"
import Series from "./Pages/Series/Series"
import Search from "./Pages/Search/Search"
import Favourite from "./Pages/Favourite/Favourite"
import Container from '@material-ui/core/Container';

function App() {
  return (

    <BrowserRouter>
    <Header/>
    <div className="App">

      <Container>

        <Switch>
          <Route path="/" component={Trending} exact/>
          <Route path="/movies" component={Movies}/>
          <Route path="/series" component={Series}/>
          <Route path="/search" component={Search}/>
          <Route path="/favourite" component={Favourite}/>
        </Switch>
      </Container>
      
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
