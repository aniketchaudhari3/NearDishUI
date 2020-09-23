import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Search from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import AccountBox from '@material-ui/icons/AccountBox';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  bottomBar: {
    top: 'auto',
    bottom: 0,
    width:"100%",
    position: "fixed"
  },
});

export default function bottom_nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.bottomBar}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Search" icon={<Search />} />
      <BottomNavigationAction label="Cart" icon={<ShoppingBasket />} />
      <BottomNavigationAction label="Profile" icon={<AccountBox />} />
    </BottomNavigation>
  );
}
