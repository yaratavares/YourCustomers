import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

export default function App(): JSX.Element {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#673ab7",
      },
      secondary: {
        main: "#ffb300",
      },
    },
    typography: {
      fontFamily: "PT Sans, sans-serif",
      fontWeightLight: "400",
      h2: {
        fontFamily: "Indie Flower, cursive",
      },
      h6: {
        fontSize: "20px",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
         fontFamily: "PT Sans, sans-serif";
        }`,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
