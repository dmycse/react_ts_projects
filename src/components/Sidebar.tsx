import { Dispatch, SetStateAction } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


let menuItems = [
  {name: "Homepage", href: "#home", icon: <HomeIcon />},
  {name: "Pages", href: "#pages", icon: <ArticleIcon />},
  {name: "Groups", href: "#groups", icon: <GroupIcon />},
  {name: "Marketplace", href: "#marketplace", icon: <StorefrontIcon />},
  {name: "Friends", href: "#fiends", icon: <PersonIcon />},
  {name: "Settings", href: "#settings", icon: <SettingsIcon />},
  {name: "Profile", href: "#profile", icon: <AccountBoxIcon />},
]

type SidebarProps = {
  mode: 'light' | 'dark';
  setMode: Dispatch<SetStateAction<"light" | "dark">>
}

export default function Sidebar({mode, setMode}: SidebarProps) {

  return (
    <Box
      p={2} 
      flex={1}
      sx={{ display: { xs: 'none', sm: 'block'}}}
    >
      <Box position='fixed'>

      {menuItems.map(item => (
        <List key={item.name}>
          <ListItem disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        </List>
        ))
      }
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#mode-night">
            <ListItemIcon>
              {mode === "light" ? <ModeNightIcon /> : <WbSunnyIcon />}
            </ListItemIcon>
            <Switch onChange={() => setMode((prev: "light" | "dark")=> prev === "light" ? "dark" : "light")}/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}
