import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid black`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(({ theme }) => ({
  border: `1px solid black`,
  borderRadius: '5px',
  marginBottom: '25px',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {},
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
export default function Display({ questions }) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: '60%', mx: 'auto' }}>
      <Typography
        variant='h4'
        sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}
      >
        Frequently Ask Questions
      </Typography>
      {questions.map((question, index) => {
        return (
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              aria-controls='panel1d-content'
              id='panel1d-header'
            >
              {question.title}
            </AccordionSummary>
            <AccordionDetails sx={{ whiteSpace: 'pre-line',margin :'-10px 0px 0px 0px' }}>
              {question.info}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
