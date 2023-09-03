import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/common.css";
import Landing from "pages/landing";
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from '@mui/material/styles';
import { AppTheme } from "style/theme";
const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <Landing />
        </ThemeProvider>
    </div>
  );
};

export default App;
