
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {useRouter} from 'next/router';
import Head from 'next/head';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width:'100%',
      height:'auto',
    },
  },
}));

export default function index() {
    const classes = useStyles();
    const router = useRouter();
console.log(router.query)

    return (
        <>

<Head>
    <title> {router.query.index} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className="container">

<div className={classes.root}>
      <Paper>
<h1>Tejas</h1>

          </Paper>
    </div>


</div>


        </>
    )
}
