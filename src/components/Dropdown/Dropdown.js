import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SystemTypography from '../Typography/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function AppDropdown(props) {
  const {optionsArray, dropdownTitle} = props;
  const options = optionsArray;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Shop"
          aria-expanded={open ? 'true' : undefined}
          onMouseEnter={handleClickListItem}
          onClick={handleClickListItem}
        >
         <SystemTypography variant={'h6'} text={dropdownTitle}/><KeyboardArrowDownIcon/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}