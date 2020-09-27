import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Search from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import AccountBox from '@material-ui/icons/AccountBox';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

import Link from 'next/link'
import { useRouter } from 'next/router'


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

export default function bottom_nav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.currentValue);
  const router = useRouter()


  const BottomLink = React.forwardRef((props, ref) =>
   
 
   <Link href={props.href} as={props.href} >
      <a className={props.className}>
        {props.children}
      </a>
    </Link>

 )
  

  return (
    <>

    <BottomNavigation
      value={value}
    
      onChange={(event, newValue) => {
      setValue(newValue);
        
    }}
      
 
      showLabels
      className={classes.bottomBar}
    >

    
 <BottomNavigationAction label="Home" icon={ <Home />}  component={BottomLink} href={'/'} /> 
       <BottomNavigationAction   label="Search" icon={<Search />}  component={BottomLink} href="/Search" />
       <BottomNavigationAction   label="Cart" icon={<ShoppingBasket />} component={BottomLink} href={'/Cart'} />
      <BottomNavigationAction  label="Profile" icon={<AccountBox />}  component={BottomLink} href={'/Profile'} />
    </BottomNavigation>





</> 
 );
}
