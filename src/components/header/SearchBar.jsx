import React, { useState, useEffect } from 'react';
import { CircularProgress, Autocomplete, TextField } from '@mui/material';
import { sleep } from '../../shared/common';
import { topFilms } from '../../shared/constant';
import { styled, alpha } from '@mui/material/styles';

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
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (!loading) {
      return;
    }

    const fetchData = async () => {
      await sleep(1000);
      setOptions([...topFilms]);
      setLoading(false);
    };

    fetchData();
  }, [loading]);

  const handleOpen = () => {
    setLoading(true);
  };

  const handleClose = () => {
    setOptions([]);
  };

  const handleSelect = (_, option) => {
    setSelectedOption(option);
    console.log({ selectedOption });
  };

  return (
    <Search sx={{ background: 'none !important' }}>
      <StyledInputBase
        sx={{ marginTop: '-10px' }}
        id="disable-close-on-select"
        disableCloseOnSelect
        open={options.length > 0}
        onOpen={handleOpen}
        onClose={handleClose}
        onChange={handleSelect}
        isOptionEqualToValue={(option, value) => option.title === value?.title}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Search Product..."
            InputProps={{
              ...params.InputProps,
              style: {
                paddingRight: loading ? 32 : undefined,
                textAlign: 'center',
              },
              endAdornment: (
                <>
                  {loading && (
                    <CircularProgress
                      color="inherit"
                      size={20}
                      style={{ marginRight: 8 }}
                    />
                  )}
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
