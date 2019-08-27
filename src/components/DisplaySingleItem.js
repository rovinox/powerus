import React, {useState,useEffect} from 'react'
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(3),
      margin: 'auto',
      maxWidth: "100%",
    },
    image: {
      width: "50%",
      height: "50%",
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

export default function DisplaySingleItem(props) {

    const classes = useStyles();
  
  console.log(props.details);
    

    return (
      <div>
        <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
        <img style={{maxHeight:"800px",}} src={props.image}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography>
          {props.title}
        </Typography>
       <Typography>
          {props.details}
        </Typography>
        <Typography>
          {props.price}
        </Typography>
        </Grid>
        </Grid>
      </div>
    )
}
