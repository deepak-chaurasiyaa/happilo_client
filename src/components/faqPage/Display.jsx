import { useState } from "react";
import { Box, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InputBase from "@mui/material/InputBase";


const Display = ({ questions }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const buttonHandler = (index) => () => {    // ? For handling the auto close accordian
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <Box sx={{ width: '60%', mx: 'auto', my: 2 }}>
      <Box sx={{mb:6, textAlign: 'center'}}>
      <Typography variant="h2" fontWeight='bold'>Frequently Ask Questions</Typography>
      </Box>
      {questions.map((question, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box
            sx={{
              border: '1px solid black',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
          >
            <InputBase
              fullWidth
              readOnly
              value={question.title}
              endAdornment={(
                <IconButton size='small' onClick={buttonHandler(index)}
                >
                  {expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              )}
            />
          </Box>
          <Box
            sx={{
              padding: '10px',
              borderRadius: '5px',
              display: expandedIndex === index ? 'block' : 'none',
              // fontWeight: expandedIndex === index ? 'small' : 'normal', // Update the fontWeight here
            }}
          >
            <Typography variant="h6" sx={{whiteSpace: 'pre-line', fontWeight: 'normal'}}>{question.info}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Display;