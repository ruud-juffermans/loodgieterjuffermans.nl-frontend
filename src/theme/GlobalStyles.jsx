import { CssBaseline, GlobalStyles as MuiGlobalStyles } from "@mui/material";

const GlobalStyles = () => {
  return (
    <>
      <CssBaseline />
      <MuiGlobalStyles
        styles={(theme) => ({
          html: {
            scrollBehavior: "smooth",
            color: "#4C5967"
          },
          
        })}
      />
    </>
  );
};

export default GlobalStyles;
