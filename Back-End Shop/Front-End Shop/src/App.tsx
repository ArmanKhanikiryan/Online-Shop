import React, {useState} from 'react';
import './App.css';
import {Button, TextField} from '@mui/material'
import ResponsiveAppBar from "./AppBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const theme = createTheme({
    palette: {
        primary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});



const  App = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false)


    const darkTheme = createTheme({
        palette: {
            mode: `${darkMode ? 'dark' : 'light'}`,
        },
    });
    const [flag, setFlag] = useState<boolean>(false)


  return (
    <div className="App">
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</button>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <main>This app is using the dark mode</main>
        </ThemeProvider>
        <ResponsiveAppBar/>
      <Button color='primary' variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
        <TextField color={'primary'} id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />

=======
<h1>
  Albert
</h1>
    </div>
  );
}

export default App;
