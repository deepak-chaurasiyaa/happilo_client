import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Paper, Box} from "@mui/material";
import { JOURNEY_TEXT } from "../../shared/constant";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // margin: theme.spacing(15),
  },
  // videoContainer: {
  //   width: "50%",
  //   height: "200%",
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //     marginRight: 0,
  //     marginBottom: theme.spacing(2),
  //   },
  // },
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
  
  return (
    <Box sx={{ width: '97%', margin: '1rem auto', backgroundColor: '#f0e7f6', paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
      <Box>
      <Typography variant="h4" align="center" className="journey">HAPPILO’S JOURNEY</Typography>
      </Box>
    <Paper className='journey-mid'>
      <Box className='journey-videoContainer'>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          height='350rem'
          width='100%'
        ></iframe>
      </Box>
      <Box className='journey-textContainer' style={{ border: '1px solid #3e3d3d6b' }}>
        <Typography variant="body1" className="journey-text">{JOURNEY_TEXT.JOURNEY_MESSAGE}</Typography>
        <button className="journey-button">SHOP NOW</button>
      </Box>
    </Paper>
    </Box>
  );
};

export default JourneyPage;
