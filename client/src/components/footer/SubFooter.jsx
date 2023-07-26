import React from 'react';

import { Box, Toolbar, Typography } from '@mui/material';
import { FOOTER_TEXT } from '../../shared/constant';
// import GanttChart from '../gantt/Gantt';
const data = {
  Russia: {
    'Admin dossier': [
      {
        category_id: 1,
        country: 2,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2023-11-12T12:14:59.000Z',
        country_name: 'Russia',
        category_name: 'Admin dossier',
        base_timeline: 6,
      },
    ],
    'Quality dossier': [
      {
        category_id: 2,
        country: 2,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2023-11-12T12:14:59.000Z',
        country_name: 'Russia',
        category_name: 'Quality dossier',
        base_timeline: 6,
      },
    ],
    'Clinical dossier': [
      {
        category_id: 3,
        country: 2,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2024-02-12T12:14:59.000Z',
        country_name: 'Russia',
        category_name: 'Clinical dossier',
        base_timeline: 9,
      },
    ],
    'Health Authority Dossier Review': [
      {
        category_id: 4,
        country: 2,
        startDate: '2024-02-12T12:14:59.000Z',
        endDate: '2025-02-12T12:14:59.000Z',
        country_name: 'Russia',
        category_name: 'Health Authority Dossier Review',
        base_timeline: 24,
      },
    ],
    'Lead time': [
      {
        category_id: 7,
        country: 2,
        startDate: '2025-02-13T12:14:59.000Z',
        endDate: '2025-06-13T12:14:59.000Z',
        country_name: 'Russia',
        category_name: 'Lead time',
        base_timeline: 4,
      },
    ],
  },
  Turkey: {
    'Admin dossier': [
      {
        category_id: 1,
        country: 3,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2023-11-12T12:14:59.000Z',
        country_name: 'Turkey',
        category_name: 'Admin dossier',
        base_timeline: 6,
      },
    ],
    'Quality dossier': [
      {
        category_id: 2,
        country: 3,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2023-11-12T12:14:59.000Z',
        country_name: 'Turkey',
        category_name: 'Quality dossier',
        base_timeline: 6,
      },
    ],
    'Clinical dossier': [
      {
        category_id: 3,
        country: 3,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2024-02-12T12:14:59.000Z',
        country_name: 'Turkey',
        category_name: 'Clinical dossier',
        base_timeline: 9,
      },
    ],
    'Health Authority Dossier Review': [
      {
        category_id: 4,
        country: 3,
        startDate: '2024-02-12T12:14:59.000Z',
        endDate: '2025-02-12T12:14:59.000Z',
        country_name: 'Turkey',
        category_name: 'Health Authority Dossier Review',
        base_timeline: 24,
      },
    ],
    'Lead time': [
      {
        category_id: 7,
        country: 3,
        startDate: '2025-02-13T12:14:59.000Z',
        endDate: '2025-06-13T12:14:59.000Z',
        country_name: 'Turkey',
        category_name: 'Lead time',
        base_timeline: 4,
      },
    ],
  },
  'Saudi Arabia': {
    'Admin dossier': [
      {
        category_id: 1,
        country: 5,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2023-11-12T12:14:59.000Z',
        country_name: 'Saudi Arabia',
        category_name: 'Admin dossier',
        base_timeline: 6,
      },
    ],
    'Quality dossier': [
      {
        category_id: 2,
        country: 5,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2023-11-12T12:14:59.000Z',
        country_name: 'Saudi Arabia',
        category_name: 'Quality dossier',
        base_timeline: 6,
      },
    ],
    'Clinical dossier': [
      {
        category_id: 3,
        country: 5,
        startDate: '2023-05-12T12:14:59.000Z',
        endDate: '2024-02-12T12:14:59.000Z',
        country_name: 'Saudi Arabia',
        category_name: 'Clinical dossier',
        base_timeline: 9,
      },
    ],
    'Health Authority Dossier Review': [
      {
        category_id: 4,
        country: 5,
        startDate: '2024-02-12T12:14:59.000Z',
        endDate: '2026-02-12T12:14:59.000Z',
        country_name: 'Saudi Arabia',
        category_name: 'Health Authority Dossier Review',
        base_timeline: 24,
      },
    ],
    'Lead time': [
      {
        category_id: 7,
        country: 5,
        startDate: '2026-02-13T12:14:59.000Z',
        endDate: '2026-06-13T12:14:59.000Z',
        country_name: 'Saudi Arabia',
        category_name: 'Lead time',
        base_timeline: 4,
      },
    ],
  },
};
function SubFooter() {
  return (
    <Box sx={{ width: '97%', margin: 'auto' }}>
      <Box>
        <img alt='' src='/111.png' style={{ width: '100%' }} />
      </Box>
      <Toolbar
        className='bg-green'
        sx={{ minHeight: '38px !important', width: '100%' }}
      >
        <Typography className='text-center'>
          {FOOTER_TEXT.COPYRIGHT_MESSAGE}
        </Typography>
       
      </Toolbar>
      {/* <GanttChart data={data} /> */}
    </Box>
  );
}

export default SubFooter;
