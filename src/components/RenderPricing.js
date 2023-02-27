import React,  { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Template from '../images/placeholder.jpg'

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  border: '2px solid black'
}


export default function renderPricing() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isInProgress, setIsInProgress] = useState(true)

    return (
      <div>
        <Button sx={buttonStyle} onClick={handleOpen}>See pricing</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={boxStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div>Want to get this insane ROI?</div>
              <div>Here are the price packages we offer.</div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 5 }}>
              <img src={Template} width={450} height={500}/>
            </Typography>
          </Box>
        </Modal>
    </div>
    )
}
