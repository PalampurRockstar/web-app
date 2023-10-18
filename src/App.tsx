import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/common.css";
import Landing from "pages/router";
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AppTheme } from "style/theme";
const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Landing />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
