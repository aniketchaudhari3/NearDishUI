import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { useRouter } from "next/router";
import Head from "next/head";
import SubNav from "../SubNav.js";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CartNav from './CartNav.js';




const useStyles = makeStyles((theme) => ({
  root2: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "auto",
      padding: "10px",
    },

    dishroot: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    

  },
}));

export default function index() {
  const classes = useStyles();
  const router = useRouter();

  const [state, setState] = React.useState({
    checkedA: true,  
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  console.log(router.query.index);

  return (
    <>
      <Head>
        <title> {router.query.index} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SubNav pageName={router.query.index} />

<div className="container">
      <Typography variant="h3" component="h3" gutterBottom>
Chai Tapri
      </Typography>
    <p>
      Best Punjabi Food
    </p>
    <small>
      Nandurbar Locality 
    </small>
</div>

      <div className={classes.root2}>

        <Paper>
        
        <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Veg Only"
      />
         
        </Paper>


<div>

<p className="dish_cat"><b>Ice Creams</b></p> 
      <div className="dish">
        
        <div className="veg_border">
        <div className="veg"></div>
        </div>
        
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              Fish Rost
            </Typography>
          </Grid>
          <Grid item>
          <Button variant="contained" color="secondary">
  Add
</Button>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
        $90
          </Typography>

      </div>

      <Divider />       
      <div className="dish">
        
      <div className="nonveg_border">
        <div className="nonveg"></div>
        </div>
        
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              Fish Rost
            </Typography>
          </Grid>
          <Grid item>
          <Button variant="contained" color="secondary">
  Add
</Button>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
        $90
          </Typography>

      </div>

      <Divider />       


    </div>

<p className="center">LIC No : 21519077000158 </p>

      </div>

<CartNav />

    </>
  );
}
