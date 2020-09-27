
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import BottomNav from './bottom_nav.js'
import SearchCard from './Search_card.js';


const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '91%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width:'100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },



}));

export default function Search() {
  const classes = useStyles();

  
  
  const Search = [
    { id:1,
      name: "Dish",
      item_name: "Man Churian",

    },
    {
      id:2,
      name: "Dish",
      item_name: "Shev Bhaji",

    },
    {
      id:3,
      name: "Resutaurant",
      item_name: "Hotel Garjana",

    },
    {
      id:4,
      name: "Restaurant",
      item_name: "Raj Hotel",

    },
    {
      id:5,
      name: "Dish",
      item_name: "Chicken Chali",
    },
    {
      id:6,
      name: "Disk",
      item_name: "Peneer Chali",

    }
  ];




  return (
  <>
  <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
 <div class="container bottom_20">

 {
Search.map((search, index) => (
         

<SearchCard name={search.name} item_name={search.item_name}/>


))}



</div>

 <BottomNav  currentValue={1}/>

</> 
 );
}