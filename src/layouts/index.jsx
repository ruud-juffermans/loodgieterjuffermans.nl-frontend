import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                aria-hidden="true"
                sx={{
                    position: "relative",
                    minHeight: "100vh",
                }}
            >
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
