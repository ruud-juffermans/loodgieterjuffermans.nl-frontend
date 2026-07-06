import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Section from "@components/Section";

import portretImage from "@assets/home2.jpeg";

const HIGHLIGHTS = [
  "Specialist in zink- en loodwerk",
  "Water, gas, CV, dakgoten en riool",
  "Snel ter plaatse in Haarlem en Heemstede",
  "Altijd één vast aanspreekpunt",
];

export default function OverMij() {
  return (
    <Section.Container id="over-mij" tone="paper">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 10 },
          alignItems: "center",
        }}
      >
        {/* Image with offset copper frame */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "42%" },
            flexShrink: 0,
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: 20,
              left: -20,
              right: 20,
              bottom: -20,
              borderRadius: "24px",
              border: "1px solid",
              borderColor: "copper.300",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            component="img"
            src={portretImage}
            alt="Loodgieter Juffermans aan het werk"
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 5",
              objectFit: "cover",
              borderRadius: "24px",
              display: "block",
              boxShadow: (theme) =>
                `0 24px 60px -24px ${theme.palette.ink[900]}66`,
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Section.Eyebrow>Over mij</Section.Eyebrow>
          <Section.Heading>
            Een ambacht dat van generatie op generatie is doorgegeven
          </Section.Heading>
          <Section.Text>
            Loodgietersbedrijf Juffermans richt zich op het oplossen van
            loodgietersproblemen in Haarlem, Heemstede en omgeving. Als ervaren
            loodgieter help ik u snel en efficiënt bij problemen met water,
            gas, CV-installaties, dakgoten, zinkwerk en rioolwerk.
          </Section.Text>
          <Section.Text>
            Ik sta bekend om mijn klantgerichte aanpak en vakwerk. Bij mij
            heeft u altijd één aanspreekpunt en kunt u vertrouwen op
            professionaliteit — van de eerste inspectie tot de laatste
            soldeernaad.
          </Section.Text>

          <Stack spacing={1.5} sx={{ mt: 4 }}>
            {HIGHLIGHTS.map((item) => (
              <Stack key={item} direction="row" spacing={1.5} alignItems="center">
                <CheckCircleOutlineRoundedIcon
                  sx={{ color: "copper.500", fontSize: 22 }}
                />
                <Typography sx={{ color: "text.primary", fontWeight: 500 }}>
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </Section.Container>
  );
}
