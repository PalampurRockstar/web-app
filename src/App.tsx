import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/common.css";
import Landing from "pages/landing";
import { ConfigProvider } from "antd";
import { AppTheme } from "style/theme";
const App = () => {
  return (
    <div className="App">
      <ConfigProvider theme={AppTheme}>
        <Landing />
      </ConfigProvider>
    </div>
  );
};

export default App;
