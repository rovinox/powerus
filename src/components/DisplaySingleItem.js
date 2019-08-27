import React, {useState,useEffect} from 'react'
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(6),
      margin: 'auto',
      maxWidth: "100%",
    },
    image: {
      width: "80%",
      height: "70%",
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
  

    

    return (
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/67653225_1100441646821967_956068551785847480_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&oh=d0dbbafeada04c9d1320cd1a27b5e92a&oe=5DDB7154&ig_cache_key=MjA5NzY1MDY4Nzk0ODI0NDU4MA%3D%3D.2" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
             
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )
}
