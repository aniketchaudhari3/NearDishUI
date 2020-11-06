import React from 'react'
import BottomNav from './bottom_nav';
import Nav from './MainNav.js';
import Container from '@material-ui/core/Container';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  logout : {
    width:'100%'
  },
  root2: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: 80,
    height: 80,
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginTop:25,
  },
  name:{
    position: 'relative',
    top: '-15px'
  }
}));

export default function Profile() {
  
  const classes = useStyles();

  return (
        <div>
        <Nav pageName="Profile" />
        
        <Container>

        <div className={classes.root2}>
      
      <Avatar className={classes.large}>TC</Avatar>
   
<div className="right">
      <h1>Tejas Chaudhari </h1>
      <p className={classes.name}>Edit Your Profile </p>
</div>

</div>


      <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>

<p> Online Ordering</p>


<List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>

<p> Support</p>


<List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
   
    </List>
    <br/>
  <Divider  />
    
    <Button variant="contained" color="secondary"  className={classes.logout}>
 Log out
</Button>
<br/><br/>
<br/><br/>
<br/><br/>
</Container>
      <BottomNav currentValue={3} />
        </div>
    )
}
