import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../styles/fonts.css';
import '../styles/animations.css';
import captionclown from '../images/captionclown.png';
import css3 from '../images/css3.png';
import eCommerce from '../images/e-commercemarketplace.png';
import express from '../images/express.svg';
import fyw from '../images/fyw.jpg';
import html5 from '../images/html5.png';
import jquery from '../images/jquery-vertical.svg';
import js from '../images/js.png';
import mongodb from '../images/mongodb.png';
import mysql from '../images/mysql.png';
import node from '../images/node.svg';
import ourphoto from '../images/ourphoto.jpg';
import react from '../images/react1.png';


const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 600,
    },
    bulletedList:{
      textAlign: "left"
    },
    technologyBG: {
      color: 'white',
      background: 'linear-gradient(-90deg, #f25d52, #5284de)',
      borderRadius: '20px',
      paddingTop: '10px',
      boxShadow: '0 4px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);'
    }
  });

export default function HomePage() {
    const classes = useStyles();
  
    return (
<div>
    
    
    <div className="body">
    
        <div class="bgEffect"></div>
        <div class="bgEffect overlay1"></div>
        <div class="bgEffect overlay2"></div>
        
    

 
        <Grid container  id="home">
            <Grid item xs ={2}></Grid>
            <Grid item xs ={9}>
            <div className="title">
              <br></br>
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
        <Grid item xs ={4}>


          <div class="ourPhoto">
        <img src={ourphoto} style={{width: 300, height: 300, borderRadius: 150}}/>
          </div>

        <div style={{fontSize: 30, textAlign:"center"}}><a style={{ textDecoration: 'none'}} href="https://docs.google.com/document/d/18cafRckwsBvu507Sv8Ge1CHlm5eAjGLMuCJb7teNZVM/edit?usp=sharing">Download resume</a></div>
        </Grid>
        </Grid> 

        


        <div className="whitespace"></div>
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" id="skills">
          <Grid>
        <div class="whiteText">
        Skilled in front-end and back-end technologies:
        </div>
        </Grid>
            <Grid>
            <div className="title">
                <h6>Front End</h6>
            </div>
            </Grid>
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
            <Grid container spacing ={0} alignItems="center" justify="center" className={classes.technologyBG}>
            <Grid item xs={6} sm={4} md={2} align="center">
                <img src={js} style={{width: 140, height: 150, marginRight: 10, marginLeft: 10, borderRadius: 10}}/>
                <br></br>
                JavaScript
                </Grid>
            <Grid item xs={6} sm={4} md={2} align="center">
                <img src={react} style={{width: 140, height: 150, marginRight: 10, marginLeft: 10}}/>
                <br></br>
                React.js
                </Grid>             
            <Grid item xs={6} sm={4} md={2} align="center">
                <img src={jquery} style={{width: 150, marginRight: 10, marginLeft: 10}}/>
                <br></br>
                jQuery
                </Grid>
            <Grid item xs={6} sm={4} md={2} align="center">
                <img src={html5} style={{width: 150, marginRight: 10, marginLeft: 10}}/>
                <br></br>
                HTML
                </Grid>
            <Grid item xs={6} sm={4} md={2} align="center">
                <img src={css3} style={{width: 110, height: 150, marginRight: 10, marginLeft: 10}}/>
                <br></br>
                CSS
                </Grid>

                </Grid>


                </Grid>
            </Grid>
        </Grid>

        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Grid>
            <div className="title">
                <h6>Back End</h6>
            </div>
            </Grid>
            <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
            <Grid container spacing ={0} alignItems="center" justify="center" className={classes.technologyBG}>
            <Grid item xs={6} sm={4} md={2} align="center">
                <img src={node} style={{width: 150, marginRight: 10, marginLeft: 10}}/>
                <br></br>
                Node.js
              </Grid>
              <Grid item xs={6} sm={4} md={2} align="center">
                <img src={express} style={{width: 150, height: 100, marginRight: 10, marginLeft: 10}}/>
                <br></br>
                Express.js
                </Grid>
              <Grid item xs={6} sm={4} md={2} align="center">
                <img src={mysql} style={{width: 150, height: 100, marginRight: 10, marginLeft: 10, borderRadius: 10}}/>
                <br></br>
                SQL
                </Grid>
                <Grid item xs={6} sm={4} md={2} align="center">
                <img src={mongodb} style={{width: 200, height: 100, marginRight: 10, marginLeft: 10}}/>
                <br></br>
                MongoDB
                </Grid>
            </Grid>
          </Grid>
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

    <Grid container spacing={0} >

        <Grid item sm={12} md={6} xl={4} align="center">

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={fyw}
          title="Find Your Way"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Find Your Way!
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
          A location finder application that displays the current weather and allows users search for locations, landmarks, businesses, etc., and see nearby geography and points of interest.

          <br></br>
<br></br>
<div className={classes.bulletedList}>
<u>Created with:</u>
<ul>
<li>Javascript</li>
<li>Express.js</li>
<li>jQuery</li>
<li>AJAX</li>
<li>Bulma CSS Framework</li>
<li>HTML, CSS</li>
</ul>
</div>

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
        <a href="https://new-hill.herokuapp.com/"> 
        <Button size="small" color="primary">
            <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' />
          Check it out
        </Button>
        </a>
      </CardActions>
    </Card>
        </Grid>


    <div className="whitespace"></div>



<Grid item sm={12} md={6} xl={4} align="center">

<Card className={classes.root}>
<CardActionArea>
<CardMedia
  className={classes.media}
  image={captionclown}
  title="Caption Clown"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
    Caption Clown
  </Typography>
  <Typography variant="body1" color="textPrimary" component="p">
  Share photos with your friends and try to make the best caption. Users can create accounts and post and delete images and captions.

  <br></br>
<br></br>
<div className={classes.bulletedList}>
<u>Created with:</u>
<ul>
<li>SQL</li>
<li>Handlebars.js</li>
<li>Express.js</li>
<li>Javascript</li>
<li>Node.js</li>
<li>HTML, CSS</li>
<li>NPM</li>
</ul>
</div>
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


<div className="whitespace"></div>



<Grid item sm={12} md={6} xl={4} align="center">

<Card className={classes.root}>
<CardActionArea>
<CardMedia
  className={classes.media}
  image={eCommerce}
  title="E-Commerce Marketplace"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
    E-Commerce Marketplace
  </Typography>
  <Typography variant="body1" color="textPrimary" component="p">
  MERN application that empowers users to act as both sellers who sell and auction off products and buyers who bid on and buy items.
<br></br>
<br></br>
<div className={classes.bulletedList}>
<u>Created with:</u>
<ul>
<li>MongoDB</li>
<li>Express.js</li>
<li>React.js</li>
<li>Node.js</li>
<li>Material UI react framework</li>
<li>NPM</li>
</ul>
</div>
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

        
<div className="title" id="contact" style={{textAlign: 'center'}}>
                <h3>Contact</h3>
            </div>   

    <Grid container spacing={2} direction="column" alignItems="center" justify="center">
      <Grid>
      <div class="whiteText">
      <h3>Email address: warrengbrn@gmail.com</h3>
      </div>
      </Grid>
      <Grid>
      <div class="whiteText">
      <h3>Phone number: 301-830-1095</h3>
      </div>
      </Grid>
      </Grid>  

      <Grid container spacing={2} direction="column" alignItems="center" justify="center">
      <Grid item xs ={2}>
      <h3><a href="https://github.com/wgbcamp">
      <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      </h3>
      </Grid>
      <Grid item xs ={2}>
      <h3><a href="https://www.linkedin.com/in/warren-brown-4808b9132/">
      <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
      </h3>
      </Grid>
      </Grid>
    

</div>
    )
  }