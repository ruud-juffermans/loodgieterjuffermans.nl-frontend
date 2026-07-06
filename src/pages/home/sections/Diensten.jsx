import * as React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Section from "@components/Section";

import Img1 from "@assets/home1.jpeg";
import Img2 from "@assets/hero1.jpeg";
import Img3 from "@assets/home3.jpeg";

const SERVICE_ITEMS = [
  {
    id: "zinkwerk",
    title: "Zinkwerk",
    description:
      "Met precisie en vakmanschap brengen we duurzaamheid en schoonheid samen in elk zinkwerkproject.",
    image: Img1,
    href: "/dienst-lood-zink",
  },
  {
    id: "loodwerk",
    title: "Loodwerk",
    description:
      "Vertrouw op onze deskundigheid voor nauwkeurig en betrouwbaar loodwerk dat de tand des tijds doorstaat.",
    image: Img2,
    href: "/dienst-lood-zink",
  },
  {
    id: "dakdekken",
    title: "Dakdekken",
    description:
      "Bescherm uw huis met professionele dakdekking, ontworpen voor maximale duurzaamheid en weerbestendigheid.",
    image: Img3,
    href: "/dienst-dakdekken",
  },
];

function ReadMoreLink({ onClick }) {
  return (
    <Link
      variant="body2"
      fontWeight={600}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        color: "copper.600",
        "& > svg": { transition: "transform 150ms ease", fontSize: 18 },
        "&:hover > svg": { transform: "translateX(3px)" },
      }}
      onClick={onClick}
    >
      Lees meer
      <ArrowForwardRoundedIcon />
    </Link>
  );
}

export default function Diensten() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selected = SERVICE_ITEMS[selectedIndex];

  return (
    <Section.Container id="diensten" tone="light">
      <Section.Eyebrow>Diensten</Section.Eyebrow>
      <Section.Heading>Waar ik u mee van dienst kan zijn</Section.Heading>
      <Section.Subheading>
        Hieronder vindt u enkele van mijn gespecialiseerde diensten. Voor een
        compleet overzicht sta ik u graag persoonlijk te woord.
      </Section.Subheading>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 4, md: 8 },
          alignItems: "stretch",
        }}
      >
        {/* Service list */}
        <Stack sx={{ flex: 1 }} divider={<Box sx={{ borderBottom: 1, borderColor: "divider" }} />}>
          {SERVICE_ITEMS.map((item, i) => {
            const isActive = selectedIndex === i;

            return (
              <Box
                key={item.id}
                onClick={() => setSelectedIndex(i)}
                sx={(theme) => ({
                  cursor: "pointer",
                  py: 3.5,
                  px: { xs: 2, md: 3 },
                  borderLeft: "3px solid",
                  borderLeftColor: isActive ? "copper.500" : "transparent",
                  backgroundColor: isActive
                    ? alpha(theme.palette.copper[100], 0.35)
                    : "transparent",
                  transition: "background-color 200ms ease, border-color 200ms ease",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.copper[100], 0.35),
                  },
                })}
              >
                <Stack direction="row" spacing={3} alignItems="baseline">
                  <Typography
                    sx={{
                      fontFamily: '"Fraunces", Georgia, serif',
                      fontSize: "1.125rem",
                      color: isActive ? "copper.600" : "grey.400",
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
                      {item.description}
                    </Typography>
                    <ReadMoreLink onClick={(e) => e.stopPropagation()} />
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
            alt={selected.title}
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
      </Box>
    </Section.Container>
  );
}
