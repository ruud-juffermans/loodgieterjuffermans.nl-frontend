import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const PHONE_NUMBER = "0614149298";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #67c7ff, #ffffff)",
        backgroundSize: "100% 16%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 25, sm: 30, md: 40 },
          pb: { xs: 30, sm: 20 },
        }}
      >
        <Stack spacing={2} sx={{ width: { xs: "100%"} }}>
          <Typography
            variant="h1"
            color="primary.main"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "clamp(4vw, 10vw, 5rem)",
              lineHeight: 1.05,
              color: "black"
            }}
          >
            Loodgietersbedrijf{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Juffermans
            </Box>
          </Typography>

          <Typography
            textAlign="center"
            color="text.primary"
            fontWeight={300}
          >
            Waterdicht de beste
          </Typography>

          <Stack direction="row" justifyContent="center">
            <Button
              component="a"
              href={`tel:${PHONE_NUMBER}`}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 999,
                px: 3,
                py: 1.25,
              }}
            >
              <Typography
                sx={{
                  fontSize: "clamp(1rem, 4vw, 1.25rem)",
                  fontWeight: 600,
                  letterSpacing: 0.3,
                }}
              >
                Tel. {PHONE_NUMBER}
              </Typography>
            </Button>
          </Stack>
          <Typography
            textAlign="center"
            color="text.primary"
            fontWeight={300}
          >
             Of stuur mij gerust een <a href="mailto:info@loodgieterjuffermans.nl"> mail</a>.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
