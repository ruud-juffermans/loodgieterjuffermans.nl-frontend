import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Section from "@components/Section";
import Seo from "@components/Seo";

const HEADER_HEIGHT = 88;

export default function NotFound() {
  return (
    <Box sx={{ pt: `${HEADER_HEIGHT}px` }}>
      <Seo
        title="Pagina niet gevonden | Loodgietersbedrijf Juffermans"
        description="Deze pagina bestaat niet (meer). Ga terug naar de homepage van Loodgietersbedrijf Juffermans."
        path="/404"
        noindex
      />
      <Section.Container tone="paper">
        <Box sx={{ textAlign: "center", py: { xs: 6, md: 10 } }}>
          <Section.Eyebrow>Foutmelding 404</Section.Eyebrow>
          <Typography variant="h2" component="h1" sx={{ color: "text.primary", mb: 3 }}>
            Deze pagina bestaat niet
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: 520, mx: "auto", mb: 5 }}>
            De pagina die u zoekt is verplaatst of bestaat niet meer. Via de
            homepage vindt u alle diensten en contactgegevens.
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<ArrowBackRoundedIcon />}
          >
            Terug naar home
          </Button>
        </Box>
      </Section.Container>
    </Box>
  );
}
