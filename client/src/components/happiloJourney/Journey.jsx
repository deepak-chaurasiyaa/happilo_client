import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Paper, Box} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // margin: theme.spacing(15),
  },
  videoContainer: {
    // width: "50%",
    // height: "200%",
    // marginRight: theme.spacing(2),
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    //   marginRight: 0,
    //   marginBottom: theme.spacing(2),
    // },
  },
  video: {
    // width: "100%",
    // height: "100%",
  },
  textContainer: {
  //   border: '2rem black',
  //   width: "50%",
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //   },
  },
}
));

const JourneyPage = () => {
  const classes = useStyles();

  return (
    <Box sx={{ width: '97%', margin: '1rem auto', backgroundColor: '#f0e7f6', paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
      <Box>
      <Typography variant="h4" align="center" className="journey">HAPPILO’S JOURNEY</Typography>
      </Box>
    <Paper className={classes.root} elevation={3}>
      <Box className={classes.videoContainer}>
        <iframe
          className={classes.video}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Box className={classes.textContainer} style={{ border: '1px solid #3e3d3d6b' }}>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          lobortis velit, eu pulvinar erat. Nam auctor elit vel sapien varius
          cursus. Morbi in lacus metus. Praesent a mi nunc. Morbi non libero
          lectus. Suspendisse faucibus aliquam mauris, id congue magna mollis
          vitae. Morbi vel nulla volutpat, malesuada mi nec, sagittis orci.
        </Typography>
      </Box>
    </Paper>
    </Box>
  );
};

export default JourneyPage;
