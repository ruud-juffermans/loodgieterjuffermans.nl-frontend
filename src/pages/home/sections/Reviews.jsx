import * as React from "react";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import Section from "@components/Section";
import Reveal from "@components/Reveal";

const TESTIMONIALS = [
  {
    name: "A. Heemskerk",
    testimonial:
      "Aardige man, komt afspraken na, werkt goed door, nieuwe dakgoot zit er goed in, net werk. Kon snel komen. Kortom: wat ik hoopte.",
  },
  {
    name: "Marieke van Delden",
    testimonial:
      "Betrouwbare en zeer goede vakman. Kan hem iedereen aanraden. Prima werk geleverd en meerwerk in goed overleg en aan de hand van foto's.",
  },
  {
    name: "Ludwig Fauser",
    testimonial:
      "Goede communicatie en alles keurig op tijd en volgens afspraak.",
  },
];

export default function Reviews() {
  return (
    <Section.Container id="reviews" tone="dark">
      <Reveal sx={{ textAlign: "center" }}>
        <Section.Eyebrow onDark>Reviews</Section.Eyebrow>
        <Section.Heading onDark align="center">
          Wat klanten over mij zeggen
        </Section.Heading>
        <Section.Subheading onDark align="center">
          Bij mij spreken de resultaten. Lees wat klanten te zeggen hebben over
          hun ervaring met Loodgietersbedrijf Juffermans.
        </Section.Subheading>
      </Reveal>

      <Reveal
        delay={150}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {TESTIMONIALS.map((t) => (
          <Stack
            key={t.name}
            justifyContent="space-between"
            sx={(theme) => ({
              p: 4,
              borderRadius: "20px",
              backgroundColor: alpha("#FFFFFF", 0.04),
              border: `1px solid ${alpha("#FFFFFF", 0.1)}`,
              backdropFilter: "blur(6px)",
              transition: "border-color 200ms ease, transform 200ms ease",
              "&:hover": {
                borderColor: alpha(theme.palette.accent[300], 0.5),
                transform: "translateY(-4px)",
              },
            })}
          >
            <Box>
              <FormatQuoteRoundedIcon
                sx={{ fontSize: 40, color: "accent.300", mb: 1 }}
              />
              <Typography
                sx={{
                  color: "ink.100",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                }}
              >
                {t.testimonial}
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 4 }}>
              <Avatar
                sx={{
                  bgcolor: "accent.500",
                  color: "common.white",
                  fontWeight: 600,
                }}
              >
                {t.name.charAt(0)}
              </Avatar>
              <Box>
                <Typography
                  sx={{ color: "common.white", fontWeight: 600, fontSize: "0.9375rem" }}
                >
                  {t.name}
                </Typography>
                <Rating value={5} readOnly size="small" />
              </Box>
            </Stack>
          </Stack>
        ))}
      </Reveal>
    </Section.Container>
  );
}
