import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/fonts.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 600,
    },
  });

export default function HomePage() {
    const classes = useStyles();
  
    return (
<div>
    <div className="whitespace"></div>
    
    <div className="body">
        
        <Grid container  id="home">
            <Grid item xs ={2}></Grid>
            <Grid item xs ={9}>
            <div className="title">
                <h1>Warren Brown</h1>
            </div>
            </Grid>
            <Grid item xs ={2}></Grid>
            <Grid item xs ={9}>
        A full-stack web developer based in Bowie, Maryland. 
            </Grid>
        </Grid>

        <div className="whitespace"></div>
        <Grid container>
            <Grid item xs ={8}></Grid>
        
        <img src="ourphoto.jpg" style={{width: 300, height: 300, borderRadius: 150}}/>
        </Grid> 


        <div className="whitespace"></div>
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" id="skills">
            <Grid>
            <div className="title">
                <h6>Front End</h6>
            </div>
            </Grid>
            <Grid>
                <img src="html5.png" style={{width: 150, marginRight: 10, marginLeft: 10}}/>
                <img src="css3.png" style={{width: 110, height: 150, marginRight: 10, marginLeft: 10}}/>
                <img src="js.png" style={{width: 140, height: 150, marginRight: 10, marginLeft: 10, borderRadius: 10}}/>
                <img src="jquery.png" style={{width: 150, marginRight: 10, marginLeft: 10}}/>
                <img src="react.png" style={{width: 230, height: 170, marginRight: 10, marginLeft: 10}}/>
            </Grid>
        </Grid>

        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Grid>
            <div className="title">
                <h6>Back End</h6>
            </div>
            </Grid>
            <Grid>
                <img src="node.svg" style={{width: 150, marginRight: 10, marginLeft: 10}}/>
                <img src="express.svg" style={{width: 150, height: 100, marginRight: 10, marginLeft: 10}}/>
                <img src="mysql.png" style={{width: 150, height: 100, marginRight: 10, marginLeft: 10, borderRadius: 10}}/>
                <img src="mongodb.png" style={{width: 200, height: 65, marginRight: 10, marginLeft: 10}}/>
                {/* <img src="git.png" style={{width: 160, height: 60, marginRight: 10, marginLeft: 10}}/>
                <img src="bash.png" style={{width: 144, height: 65, marginRight: 10, marginLeft: 10}}/> */}
            </Grid>
        </Grid>

    </div>

    <div className="whitespace"></div>

    <Grid container id="portfolio">
            <Grid item xs ={4}></Grid>
            <Grid item xs ={4}>
            <div className="title" style={{textAlign: 'center'}}>
                <h3>Portfolio</h3>
            </div>
            </Grid>
            <Grid item xs ={4}></Grid>

        </Grid>

    <Grid container spacing={0} direction="column" alignItems="center" justify="center">

        <Grid>

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="fyw.jpg"
          title="Find Your Way"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Find Your Way!
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
          A location finder application that displays the current weather and allows users search for locations, landmarks, businesses, etc., and see nearby geography and points of interest.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="https://github.com/wgbcamp/Project1/tree/Warren">
        <Button size="small" color="primary">
        <FontAwesomeIcon icon={faGithub} size='2x' />
          Find on Github
        </Button>
        </a>
        <Button size="small" color="primary">
            <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' />
          Check it out
        </Button>
      </CardActions>
    </Card>
        </Grid>
    </Grid>

    <div className="whitespace"></div>

    <Grid container spacing={0} direction="column" alignItems="center" justify="center">

<Grid>

<Card className={classes.root}>
<CardActionArea>
<CardMedia
  className={classes.media}
  image="captionclown.png"
  title="Caption Clown"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
    Caption Clown
  </Typography>
  <Typography variant="body1" color="textPrimary" component="p">
  Share photos with your friends and try to make the best caption. Users can create accounts and post and delete images and captions.
  </Typography>
</CardContent>
</CardActionArea>
<CardActions>
  <a href="https://github.com/wgbcamp/Project2">
<Button size="small" color="primary">
<FontAwesomeIcon icon={faGithub} size='2x' />
  Find on Github
</Button>
</a>
  <a href="https://polar-harbor-60783.herokuapp.com/">
<Button size="small" color="primary">
    <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' />
  Check it out
</Button>
</a>
</CardActions>
</Card>
</Grid>
</Grid>

<div className="whitespace"></div>

<Grid container spacing={0} direction="column" alignItems="center" justify="center">

<Grid>

<Card className={classes.root}>
<CardActionArea>
<CardMedia
  className={classes.media}
  image="e-commercemarketplace.png"
  title="E-Commerce Marketplace"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
    E-Commerce Marketplace
  </Typography>
  <Typography variant="body1" color="textPrimary" component="p">
  Web application that empowers users to act as both sellers who sell and auction off products and buyers who bid on and buy items.
  </Typography>
</CardContent>
</CardActionArea>
<CardActions>
<a href="https://github.com/wgbcamp/Project3">
<Button size="small" color="primary">
<FontAwesomeIcon icon={faGithub} size='2x' />
  Find on Github
</Button>
</a>
<a href="https://powerful-fortress-23349.herokuapp.com/">
<Button size="small" color="primary">
    <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' />
  Check it out
</Button>
</a>
</CardActions>
</Card>
</Grid>
</Grid>

<div className="whitespace"></div>

        
            
</div>
    )
  }