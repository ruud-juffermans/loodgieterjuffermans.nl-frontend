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
            backgroundColor: alpha(theme.palette.accent[300], 0.45),
          },
          img: {
            maxWidth: "100%",
          },
          "@keyframes fadeUp": {
            from: { opacity: 0, transform: "translateY(28px)" },
            to: { opacity: 1, transform: "none" },
          },
          "@keyframes heroZoom": {
            from: { transform: "scale(1)" },
            to: { transform: "scale(1.08)" },
          },
          "@keyframes glowDrift": {
            "0%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(6%, -4%)" },
            "100%": { transform: "translate(0, 0)" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            "*, *::before, *::after": {
              animationDuration: "0.01ms !important",
              animationIterationCount: "1 !important",
              transitionDuration: "0.01ms !important",
            },
            html: {
              scrollBehavior: "auto",
            },
          },
        })}
      />
    </>
  );
};

export default GlobalStyles;
