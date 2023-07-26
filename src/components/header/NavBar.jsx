import React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Link, Toolbar, Typography } from '@mui/material';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        className='mid-header font-ten'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography class='dropdown'>
          <Box>
            <Typography>Nuts</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Nuts Link 1
            </Link>
            <Link href='#' underline='hover'>
              Nuts Link 2
            </Link>
            <Link href='#' underline='hover'>
              Nuts Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Dried Fruits</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Dried Fruits Link 1
            </Link>
            <Link href='#' underline='hover'>
              Dried Fruits Link 2
            </Link>
            <Link href='#' underline='hover'>
              Dried Fruits Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Seeds</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Seeds Link 1
            </Link>
            <Link href='#' underline='hover'>
              Seeds Link 2
            </Link>
            <Link href='#' underline='hover'>
              Seeds Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Dates</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Dates Link 1
            </Link>
            <Link href='#' underline='hover'>
              Dates Link 2
            </Link>
            <Link href='#' underline='hover'>
              Dates Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Berries</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Berries Link 1
            </Link>
            <Link href='#' underline='hover'>
              Berries Link 2
            </Link>
            <Link href='#' underline='hover'>
              Berries Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Mixes</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Mixes Link 1
            </Link>
            <Link href='#' underline='hover'>
              Mixes Link 2
            </Link>
            <Link href='#' underline='hover'>
              Mixes Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Gifting</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Gifting Link 1
            </Link>
            <Link href='#' underline='hover'>
              Gifting Link 2
            </Link>
            <Link href='#' underline='hover'>
              Gifting Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Combos</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Combos Link 1
            </Link>
            <Link href='#' underline='hover'>
              Combos Link 2
            </Link>
            <Link href='#' underline='hover'>
              Combos Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>New Launches</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              New Launches Link 1
            </Link>
            <Link href='#' underline='hover'>
              New Launches Link 2
            </Link>
            <Link href='#' underline='hover'>
              New Launches Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Stores</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Stores Link 1
            </Link>
            <Link href='#' underline='hover'>
              Stores Link 2
            </Link>
            <Link href='#' underline='hover'>
              Stores Link 3
            </Link>
          </Typography>
        </Typography>

        <Typography class='dropdown'>
          <Box>
            <Typography>Blogs</Typography>
            <KeyboardArrowDown />
          </Box>
          <Typography class='dropdown-content'>
            <Link href='#' underline='hover'>
              Blogs Link 1
            </Link>
            <Link href='#' underline='hover'>
              Blogs Link 2
            </Link>
            <Link href='#' underline='hover'>
              Blogs Link 3
            </Link>
          </Typography>
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default NavBar;
