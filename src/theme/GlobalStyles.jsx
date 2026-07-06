import { CssBaseline, GlobalStyles as MuiGlobalStyles } from "@mui/material";
import { alpha } from "@mui/material/styles";

const GlobalStyles = () => {
  return (
    <>
      <CssBaseline />
      <MuiGlobalStyles
        styles={(theme) => ({
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
          "::selection": {
            backgroundColor: alpha(theme.palette.copper[300], 0.45),
          },
          img: {
            maxWidth: "100%",
          },
        })}
      />
    </>
  );
};

export default GlobalStyles;
