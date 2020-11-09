import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Send from '@material-ui/icons/Send';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    // background:'red',
    justifyContent: 'space-between',
      top: 'auto',
      bottom: 0,
      width:"100%",
      position: "fixed",
      boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    
  },
  button: {
    margin:'7px',
    paddingLeft: '30px',
    paddingRight: '30px',

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
