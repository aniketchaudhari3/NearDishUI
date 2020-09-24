import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BottomNav from './bottom_nav.js';

import HotelCard from "./HotelCard.js";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

export default function Home() {
 
  const Hotels = [
    { id:1,
      name: "Gajraj Park",
      Type: "Indian Pure Veg",
      promote:true,
      rating:5,
    },
    {
      id:2,
      name: "Hera Garden",
      Type: "Mughlai, Biryani, Punjabi, Chinese",
      promote:false,
      rating:2,
    },
    {
      id:3,
      name: "Hotel Garjana",
      Type: "North Indian, Thalis",
      promote:true,
      rating:5,
    },
    {
      id:4,
      name: "Hera",
      Type: "Fast Food, Maharashtrian, North Indian",
      promote:false,
      rating:4,
    },
    {
      id:5,
      name: "Kaka ka Dabha",
      Type: "Indian, Chinese",
      promote:false,
      rating:3,
    },
    {
      id:6,
      name: "Hotel Raj",
      Type: "Indian, Chinese",
      promote:true,
      rating:2,
    }
  ];




 
  return (
  <>
  <Head>
        <title>Foodex | Hungry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          Welcome to <a href="#">Foodex</a>
        </h1>

<br />
<center> Comming Soon in Nandurbar</center>
<Container maxWidth="sm" className="bottom_20">

<Grid item 
           container
           direction="row"
           spacing={1}
           className="scroll">

{
Hotels.map((Hotel, index) => (
<Grid  key={index} item xs >
         
<HotelCard key={Hotel.id} HotelName={Hotel.name} rating={Hotel.rating} Type={Hotel.Type} promote={Hotel.promote} />

</Grid> 


))}
    </Grid> 

  </Container>

<BottomNav currentValue={0} />

</>
  )
}