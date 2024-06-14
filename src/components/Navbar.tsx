import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

let CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

let Search = styled("div")(({ theme }) => ({
  padding: "0 10px",
  width: "30%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
}));

let Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

let MobileIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));


export default function Navbar() {

  let [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar 
      position="sticky"
      sx={{
        marginBottom: '3px', 
        backgroundColor: "#236181"
      }}
    >
      <CustomToolbar>
        <Typography 
          variant="h6"
          sx={{ display: {xs: 'none', sm: 'block'}}}
        >
          DMY DEV
        </Typography>
        <DeveloperBoardIcon fontSize="large"  sx={{ display: {xs: 'block', sm: 'none'}}}/>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar 
            alt="John Sharp" 
            src={"/src/assets/avatar.jpg"} 
            sx={{width: "30", height: "30", cursor: "pointer"}}
            onClick={() => setOpenMenu(prev => !prev)}
          />
        </Icons>
        <MobileIcons>
          <Avatar 
            alt="John Sharp" 
            src={"/src/assets/avatar.jpg"} 
            sx={{width: "30", height: "30", cursor: "pointer"}}
            onClick={() => setOpenMenu(prev => !prev)}
          />
          <Typography variant="body1">John</Typography>
        </MobileIcons>
      </CustomToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 60,
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 140,
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
