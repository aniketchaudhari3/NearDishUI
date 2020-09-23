import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Rating from '@material-ui/lab/Rating';


import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({

  media: {
    height: 140,
  },
});


export default function HotelCard(props) {
    const classes = useStyles();
    // const [value, setValue] = React.useState(4);
    console.log(props)
    return (
        <>


<Card className="hotel_card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mexican-chicken-burger_1-b5cca6f.jpg?quality=90&resize=440%2C400"
          title="Contemplative Reptile"
        />
        <CardContent>
     
          <Typography gutterBottom variant="h6" component="h6">
     
     {props.HotelName}
          </Typography>
          <Typography variant="caption" gutterBottom color="textSecondary" component="p" className="hotel_type">
   
     {props.Type}
          </Typography>

          <div className="rating"  >
  
        <Rating name="read-only" value={props.rating} readOnly />
      </div>
  {/*   
      <Alert variant="filled" >
30% off | use Gajraj20
</Alert>
  */}
        </CardContent>
      </CardActionArea>
    </Card>

        </>
    )
}
