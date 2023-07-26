import { CircularProgress, Autocomplete, TextField } from '@mui/material';

import React, { useState, useEffect } from 'react';

import { styled, alpha } from '@mui/material/styles';

import { sleep } from '../../shared/common';
import { topFilms } from '../../shared/constant';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(Autocomplete)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '10rem !important',
      '&:focus': {
        width: '68ch !important',
      },
    },
  },
}));

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  const [selectedOption, setSelectedOption] = useState(null); // add state variable to store selected value

  const handleSelect = (event, option) => {
    setSelectedOption(option);
    console.log({ selectedOption });
  };
  return (
    <Search sx={{ background: 'none !important' }}>
      <StyledInputBase
        sx={{ marginTop: ' -10px' }}
        id='disable-close-on-select'
        disableCloseOnSelect
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={handleSelect}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            variant='standard'
            placeholder='Search Product...'
            aria-label='Search'
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress
                      color='inherit'
                      sx={{ textAlign: 'center' }}
                      size={20}
                    />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </Search>
  );
};
