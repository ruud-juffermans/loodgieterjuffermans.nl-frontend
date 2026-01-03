import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const SectionHeading = ({ children, color }) => {
    return (
        <Typography
            component="h1"
            color={color || "text.primary"}
            sx={{
                fontWeight: 500,
                mb: {xs: "20px", sm: "40px"},
                fontSize: {xs: "28px", sm: "36px"},
                lineHeight: {xs: 1.2, sm: 1.4},
            }}
        >
            {children}
        </Typography>
    );
};

const SectionSubheading = ({ children }) => {
    return (
        <Typography
            sx={{
                fontWeight: 300,
                mb: {xs: "20px", sm: "40px"},
                mt: {xs: "-10px", sm: "-20px"},
                fontSize: {xs: "14px", sm: "16px"},
            }}
        >
            {children}
        </Typography>
    );
};

const SectionText = ({ children }) => {
    return (
        <Typography
            sx={{
                fontWeight: 300,
                mb: {xs: "10px", sm: "20px"},
                fontSize: "16px",
            }}
        >
            {children}
        </Typography>
    );
};

const Section = ({ children, id }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box
         id={id}
            sx={{
                width: "100%",
                padding: "60px 0px 80px",
            }}
        >
            {children}
        </Box>
    );
};

const SectionContainer = ({ children, backgroundColor, id }) => {
    const theme = useTheme();

    return (
        <Box
        id={id}
            sx={{
                alignItems: "center",
                width: "100vw",
                minHeight: { xs: "calc(100vh - 100px)", sm: "UNSET" },
                p: { xs: "30px 10px 60px", sm: "60px 15px 120px" },
                backgroundColor: {backgroundColor}
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    margin: "auto",
                    flexDirection: "column",
                    maxWidth: "1200px",
                }}>

                {children}
            </Box>
        </Box>
    );
};

Section.Container = SectionContainer;
Section.Heading = SectionHeading;
Section.Subheading = SectionSubheading;
Section.Text = SectionText;

export default Section