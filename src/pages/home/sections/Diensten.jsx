import * as React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Section from "@components/Section";
import Reveal from "@components/Reveal";
import { SERVICES } from "@data/services";

function ReadMoreLink({ to, title }) {
  return (
    <Link
      component={RouterLink}
      to={to}
      variant="body2"
      fontWeight={600}
      aria-label={`Lees meer over ${title}`}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        color: "accent.700",
        "& > svg": { transition: "transform 150ms ease", fontSize: 18 },
        "&:hover > svg": { transform: "translateX(3px)" },
      }}
      onClick={(e) => e.stopPropagation()}
    >
      Lees meer
      <ArrowForwardRoundedIcon />
    </Link>
  );
}

export default function Diensten() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selected = SERVICES[selectedIndex];

  return (
    <Section.Container id="diensten" tone="light">
      <Reveal>
        <Section.Eyebrow>Diensten</Section.Eyebrow>
        <Section.Heading>Waar ik u mee van dienst kan zijn</Section.Heading>
        <Section.Subheading>
          Hieronder vindt u enkele van mijn gespecialiseerde diensten. Voor een
          compleet overzicht sta ik u graag persoonlijk te woord.
        </Section.Subheading>
      </Reveal>

      <Reveal
        delay={150}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 4, md: 8 },
          alignItems: "stretch",
        }}
      >
        {/* Service list */}
        <Stack sx={{ flex: 1 }} divider={<Box sx={{ borderBottom: 1, borderColor: "divider" }} />}>
          {SERVICES.map((item, i) => {
            const isActive = selectedIndex === i;

            return (
              <Box
                key={item.slug}
                onClick={() => setSelectedIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedIndex(i);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                sx={(theme) => ({
                  cursor: "pointer",
                  py: 3.5,
                  px: { xs: 2, md: 3 },
                  borderLeft: "3px solid",
                  borderLeftColor: isActive ? "accent.500" : "transparent",
                  background: isActive
                    ? `linear-gradient(90deg, ${alpha(theme.palette.accent[100], 0.6)} 0%, transparent 85%)`
                    : "transparent",
                  transition: "background 200ms ease, border-color 200ms ease",
                  "&:hover": {
                    background: `linear-gradient(90deg, ${alpha(theme.palette.accent[100], 0.6)} 0%, transparent 85%)`,
                  },
                })}
              >
                <Stack direction="row" spacing={3} alignItems="baseline">
                  <Typography
                    sx={{
                      fontFamily: '"Fraunces", Georgia, serif',
                      fontSize: "1.125rem",
                      color: isActive ? "accent.600" : "grey.400",
                      minWidth: 32,
                      transition: "color 200ms ease",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </Typography>
                  <Box>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 1.5, maxWidth: 480 }}
                    >
                      {item.shortDescription}
                    </Typography>
                    <ReadMoreLink to={`/diensten/${item.slug}`} title={item.title} />
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Stack>

        {/* Selected image */}
        <Box
          sx={{
            flex: 1,
            minHeight: { xs: 260, md: "auto" },
          }}
        >
          <Box
            component="img"
            src={selected.image}
            alt={selected.imageAlt}
            loading="lazy"
            decoding="async"
            sx={{
              width: "100%",
              height: "100%",
              maxHeight: { xs: 300, md: 560 },
              objectFit: "cover",
              borderRadius: "24px",
              display: "block",
              boxShadow: (theme) =>
                `0 24px 60px -28px ${theme.palette.ink[900]}59`,
            }}
          />
        </Box>
      </Reveal>
    </Section.Container>
  );
}
