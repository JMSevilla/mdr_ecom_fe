import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from "@mui/material/Link";
import SystemTypography from '../Typography/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { appRouter } from '../../routes/router';
import { useHistory } from 'react-router-dom';

export default function AppDropdown(props) {
  const {optionsArray, dropdownTitle} = props;
  const options = optionsArray;

  const history = useHistory();
  const navigateToViewAll = () => {
    history.push(appRouter.Shop.path);
    window.location.reload();
  }
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
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',onMouseLeave: handleClose,
        }}
      >
        {options.map((option, index) => (
          <Link 
          className='link'
          onClick={eval(option.link)}
          key={index}
          color={"inherit"}
          underline={"none"}
          style={{cursor: 'pointer'}}>
          <MenuItem
            key={option}
            disabled={index === 0}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.title}
          </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}