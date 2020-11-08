import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Send from '@material-ui/icons/Send';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    // background:'red',
    justifyContent: 'space-between'
  },
  button: {
    margin:'7px',
  },
  price:{

fontSize: '20px',
paddingLeft: '15px',
  }
});

export default function CartNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      >

<p className={classes.price}>$210</p>

         <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Send />}
        
      >
        Continue
        

      </Button>     

    </BottomNavigation>
  );
}
