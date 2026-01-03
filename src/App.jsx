import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getTheme from "@theme";
import Router from "@router";
import GlobalStyles from "@theme/GlobalStyles";

const App = () => {
  const theme = createTheme(getTheme("light"));
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

export default App;