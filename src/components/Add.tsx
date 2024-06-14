import { useState } from 'react';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';


export default function Add() {

  let [open, setOpen] = useState(false);

  let tooltipStyles = {
    position: "fixed",
    bottom: 20,
    left: {xs: "calc(50% - 25px)", sm: 30}
  };

  let CustomModal = styled(Modal)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }));

  let UserBox = styled(Box)(() => ({
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }));

  return (
    <>
      <Tooltip 
        title="Add post"
        sx={tooltipStyles}
        onClick={() => setOpen(true)}
      >
        <Fab
          aria-label="add post" 
          color="primary" 
          size="medium"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography 
            id="modal-modal-title" 
            variant="h6" 
            component="h2"
            textAlign="center" 
            color="gray"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar 
              alt="Travis Howard" 
              src="https://material-ui.com/static/images/avatar/2.jpg"
              sx={{width: 30, height: 30}} 
            />
            <Typography
              variant="body1"
              component="span"
              fontWeight={500}
            >
              Travis Howard
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What's on your mind?"
            variant="standard"
            sx={{width: "100%"}}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary"/>
            <VideoCameraBackIcon color="success"/>
            <PersonAddIcon color="error"/>
          </Stack>
          <ButtonGroup 
            aria-label="Basic button group"
            variant="contained" 
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{width: "100px"}}><DateRangeIcon /></Button>
        </ButtonGroup>
        </Box>
      </CustomModal>
    </>
  )
}
