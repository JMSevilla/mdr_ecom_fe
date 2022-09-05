import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Logo from '../../assets/images/logo/modernresolve.png';

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '5px',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AppModal(props) {
  const {buttonName, buttonStyle, buttonColor, title, description, logo} = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={buttonColor}>
      <Button onClick={handleOpen}  variant={'contained'} color={'inherit'} size={'large'} style={buttonStyle}>{buttonName}</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='md:w-[450px] w-[350px]'> 
          {logo && (<><img src={Logo} alt='logo' className='absolute top-0 md:w-[18%] w-[22%] mt-[-50px] bg-white rounded-full'/></>)}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}