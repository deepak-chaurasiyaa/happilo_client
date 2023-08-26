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
  border: `1px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
  borderRadius: '5px',
  marginBottom: '25px',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {},
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

export default function ReasonToBuy({ reason_details:descriptions }) {
  console.log({descriptions})
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <Box sx={{ width: '100%', mx: 'auto' }}>
      <Typography
        // variant='h4'
        sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}
      >
        Product Descriptions
      </Typography>
      {Object.keys(descriptions).map((type, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {type === 'description'
                ? 'Description'
                : type === 'ingredients'
                ? 'Ingredients'
                : type === 'additionalInformation'
                ? 'Additional Information'
                : ''}
            </AccordionSummary>
            <AccordionDetails sx={{ whiteSpace: 'pre-line', margin: '-10px 0px 0px 0px' }}>
              {descriptions[type].map((item, subIndex) => (
                <Box key={subIndex}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.name ? item.name + ' : ':''}
                  <Typography fontWeight='normal' variant='span'>{item.details}</Typography>
                  </Typography>
                  <span>
                  </span>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
