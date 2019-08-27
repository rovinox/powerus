import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Items(props) {
  
  const classes = useStyles();
  
 
  
  return (
   
    

    <Card className={classes.card}>
      <CardHeader
        title={props.amp.title}
        
      />
      <CardMedia
        className={classes.media}
        image={props.amp.image}
        
      />
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="h2">
          ${props.amp.price}
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link style={{textDecoration:"none"}} to={`/amp/${props.amp.amp_id}`}>
          <Button variant="contained" color="primary" className={classes.button}>
              BUY NOW
          </Button>
        </Link>
        </CardActions>
        <CardContent>
          <Typography paragraph>{props.amp.details}</Typography>
        </CardContent>
    </Card>
   
  );
}