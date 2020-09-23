import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import Rating from '@material-ui/lab/Rating';
import Hidden from '@material-ui/core/Hidden';

import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({

  media: {
    height: 115,
  },
});


export default function HotelCard(props) {
    const classes = useStyles();
    // const [value, setValue] = React.useState(4);
    console.log(props)
    var promote;
if(props.promote === true){
promote =   <Chip  color='primary' size='small' label='Promoted' className='promoted'/>

 }else{
   promote = null;
 }
    return (
        <>


<Card className="hotel_card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mexican-chicken-burger_1-b5cca6f.jpg?quality=90&resize=440%2C400"
          title="Contemplative Reptile"
        />
{promote}

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
