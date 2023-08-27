import React, { useState, useEffect, useRef } from 'react';
import { CircularProgress, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Clear } from '@mui/icons-material';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { searchProductAsync } from '../../redux/actions/product.action';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'; // Import useTheme

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    transition: 'width 0.5s ease-in-out',
  },
}));

export const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme(); // Use useTheme here
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchBarWidth, setSearchBarWidth] = useState(30);
  const [hasContent, setHasContent] = useState(false);

  const dropdownRef = useRef(null);

  const fetchData = async (searchValue) => {
    setLoading(true);
   setTimeout(async ()=>{
    const action =  await dispatch(searchProductAsync(searchValue));
    const { payload, error } = action;
    if (Array.isArray(payload)) {
      setOptions([...payload]);
      setShowList(true);
    }
    setLoading(false);
   },1000)
  };

  const debouncedFetchData = debounce(fetchData, 500);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSearchBarWidth(60);
    debouncedFetchData(value);
    setHasContent(value.length > 0);
  };

  const handleClearClick = () => {
    setInputValue('');
    setHasContent(false);
    setShowList(false);
    setSearchBarWidth(30);
  };

  const handleOptionClick = (option) => {
    setShowList(false);
    navigate(`/product/${option.product_id}`);
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowList(false);
      setSearchBarWidth(30);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Search ref={dropdownRef}>
      <TextField
        sx={{ fontSize: '1rem' }}
        variant="standard"
        placeholder="Search Product..."
        value={inputValue}
        autoComplete='off'
        onChange={handleInputChange}
        InputProps={{
          style: {
            width: `${searchBarWidth}ch`,
            paddingRight: loading ? 8 : undefined,
            transition: 'width 0.5s ease-in-out',
            textAlign: 'center',
          },
          endAdornment: (
            <>
              {loading &&  (
                <CircularProgress
                  sx={{color:'#00523b'}}
                  size={20}
                  style={{ marginRight: 8 }}
                />
              )}
              {!loading && hasContent && (
                <IconButton size="small" onClick={handleClearClick}>
                  <Clear  />
                </IconButton>
              )}
            </>
          ),
        }}
      />
     { console.log(options.length, showList )}
      {options.length > 0 && showList && (
        <List
          component="nav"
          sx={{
            padding: 0,
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: theme.palette.background.paper,
            boxShadow: `0px 4px 10px ${alpha(theme.palette.common.black, 0.1)}`,
            borderRadius: '4px',
            zIndex: 1,
            maxHeight: '20rem',
            overflowY: 'auto',
          }}
        >
          {options.map((option) => (
            <ListItem
              key={option.product_id}
              button
              sx={{
                width: `${searchBarWidth}ch`,
                '&:hover': {
                  backgroundColor: theme => alpha(theme.palette.background.paper, 0.7),
                },
              }}
              onClick={() => handleOptionClick(option)}
            >
              <ListItemText primary={option.product_name} />
            </ListItem>
          ))}
        </List>
      )}
    </Search>
  );
};
