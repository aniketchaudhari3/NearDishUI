import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '5px',
    marginTop:'10px',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width:'35%',
  },
  
}));

export default function Search_card(props) {
  const classes = useStyles();
 

  return (
    <Card className={classes.root}>
   
        <CardContent className={classes.content}>
        
          <Typography variant="subtitle1" color="textSecondary">
  <b>{props.item_name}</b> <br/>
          <i>{props.name}</i>
          </Typography>
        </CardContent>
    

      <CardMedia
        className={classes.cover}
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mexican-chicken-burger_1-b5cca6f.jpg?quality=90&resize=440%2C400"
        title="Live from space album cover"
      />
    </Card>
  );
}