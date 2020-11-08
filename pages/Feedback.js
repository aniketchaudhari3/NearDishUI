import React from 'react'

import SubNav from './SubNav.js';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    root2: {
        flexGrow: 1,
      },
      width100:{
          width:'98%',
      }
  }));

export default function Feedback() {
    
    const classes = useStyles();

    
    return (
        <>
              <SubNav pageName="Feedback" />
              
<Container>

<h2>FeedBack </h2>

              <form className={classes.root2} noValidate autoComplete="off">
              <Grid container spacing={3}>
        <Grid item xs={12}>

      <TextField id="filled-basic" label="Name" variant="outlined" className={classes.width100} />
      </Grid>

      <Grid item xs={12}>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="number"  className={classes.width100}/>
      </Grid>

    <Grid item xs={12}>
      <TextField
          id="filled-multiline-static"
          label="Messages"
          multiline
          rows={6}
          variant="outlined"
          className={classes.width100}
        />
      </Grid>

    <Grid item xs={12} className="center">
    <Button variant="contained" color="primary" size="large" >
       Sent Feedback
      </Button>
      </Grid>

      

      </Grid>
    </form>
    
    </Container>

        </>
    )
}
