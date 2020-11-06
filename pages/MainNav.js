import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocalOffer from '@material-ui/icons/LocalOffer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:'center',
  },
}));

export default function MainNav(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" className="app_color">
        <Toolbar className="right_pad_0">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
        {props.pageName } 
          </Typography>
          <IconButton color="inherit" >
            <LocalOffer />
          </IconButton>
     </Toolbar>
      </AppBar>
  
      <Toolbar />
      </React.Fragment>

  );
}
