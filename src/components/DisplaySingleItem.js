import React, {useState,useEffect} from 'react'
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import StripeCheckout from "react-stripe-checkout";



export default function DisplaySingleItem(props) {

    
  
  console.log(props.details);
    

    return (
      <div style={{background:"black"}}>
        <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
        <Carousel >
                    <div>
                        <img src={props.image} />
                        <p className="legend">Legend 1</p>
                    </div>
                    
                    </Carousel>
        </Grid>
        <Grid item xs={12} sm={6} direction="column" color="primary" style={{marginTop:"40px"}}>
        <Typography variant="h3" color="primary" style={{marginTop:"40px"}} >
          {props.title }
        </Typography  >
       <Typography style={{marginTop:"40px", color:"white"}} >
          {props.details}
        </Typography>
        <Typography variant="h3" style={{marginTop:"40px", color:"white"}}>
          ${props.price}
        </Typography>
        <Typography>
          <StripeCheckout
          billingAddress
          shippingAddress
          style={{marginTop:"40px"}} 
          />
        </Typography>
        
        </Grid>
        </Grid>
        
      </div>
    )
}
