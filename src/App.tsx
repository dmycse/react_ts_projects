import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {

  let [mode, setMode] = useState<"light" | "dark">("light");

  let darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack 
          direction="row"
          justifyContent="space-between" 
          spacing={2} 
          component="main"
        >
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App;
