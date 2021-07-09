import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex:100
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history=useNavigate();

  useEffect(()=>{
    if(value===0)history("./");
    else if(value===1)history("./movies")
    else if(value===2)history("./series")
    else if(value===3)history("./search")
    else if(value===4)history("./favourite")
  }, [value,history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Favourites" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
}