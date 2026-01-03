import * as React from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Img1 from "@assets/home1.jpeg";
import Img2 from "@assets/hero1.jpeg";
import Img3 from "@assets/home3.jpeg";
import Section from '@components/Section'

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
      "Bescherm uw huis met professionele dakdekkingsservice, ontworpen voor maximale duurzaamheid en weerbestendigheid.",
    image: Img3,
    href: "/dienst-dakdekken",
  },
];

function ReadMoreLink({ href, onClick }) {
  return (
    <Link
      // href={href}
      color="primary"
      variant="body2"
      fontWeight={700}
      underline="none"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        "& > svg": { transition: "transform 150ms ease" },
        "&:hover > svg": { transform: "translateX(2px)" },
      }}
      onClick={onClick}
    >
      <span>Lees meer</span>
      <ChevronRightRoundedIcon fontSize="small" sx={{ mt: "1px", ml: "2px" }} />
    </Link>
  );
}

export default function Diensten() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selected = SERVICE_ITEMS[selectedIndex];

  return (
    <Section.Container id="diensten" >
      <Box sx={{display: "flex", gap: "20px"}}>
        <Box sx={{flex: 1}}>
          <Section.Heading>
            Diensten
          </Section.Heading>
          <Section.Subheading>
            Hieronder vindt u enkele van onze gespecialiseerde diensten. Voor een
            compleet overzicht staan wij u graag te woord.
          </Section.Subheading>

          {/* Mobile: chips + selected card */}
          <Stack display={"flex"} flexDirection={"column"}>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            sx={{ display: { sm: "flex", md: "none" } }}
            >
{SERVICE_ITEMS.map((item, i) => {
  const isActive = selectedIndex === i;

  return (
    <Chip
      key={item.id}
      label={item.title}
      clickable
      onClick={() => setSelectedIndex(i)}
      variant={isActive ? "filled" : "outlined"}
      sx={{
        backgroundColor: isActive ? "primary.main" : "grey.200",
        borderColor: isActive ? "primary.main" : "grey.300",
        color: isActive ? "common.white" : "text.primary",
        "&:hover": {
          backgroundColor: isActive ? "primary.dark" : "grey.300",
        },
      }}
    />
  );
})}
          </Stack>

          <Card
            variant="outlined"
            sx={{ display: { sm: "block", md: "none" }, mt: 2, overflow: "hidden" }}
            >
            <Box
              component="img"
              src={selected.image}
              alt={selected.title}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                display: "block",
              }}
              />
            <Box sx={{ px: 1, py: 1 }}>
              <Typography variant="body2" fontWeight={700} color="text.primary">
                {selected.title}
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ my: "5px", fontSize: "14px" }}>
                {selected.description}
              </Typography>
              <ReadMoreLink href={selected.href} />
            </Box>
          </Card>
              </Stack>

          <Stack
            spacing={2}
            sx={{ display: { xs: "none", sm: "none", md: "flex" }, mt: { sm: 2 } }}
          >
            {SERVICE_ITEMS.map((item, i) => {
              const isActive = selectedIndex === i;

              return (
                <Card
                  key={item.id}
                  variant="outlined"
                  onClick={() => setSelectedIndex(i)}
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    width: "100%",
                    p: 2,
                    borderColor: isActive ? "primary.light" : "grey.200",
                    backgroundColor: isActive ? "action.selected" : "transparent",
                    textTransform: "none",
                  }}
                >
                  <Box>
                    <Typography variant="body2" fontWeight={700} color="text.primary">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.primary" sx={{ my: 0.5 }}>
                      {item.description}
                    </Typography>
                    <ReadMoreLink
                      href={item.href}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </Box>
                </Card>
              );
            })}
          </Stack>
        </Box>

        <Box sx={{ flex: 1, display: { xs: "none", sm: "none", md: "flex", width: "100%" } }}>
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              height: "100%",
              mt: "auto",
              mr: "auto",
              maxHeight: 500,
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <Box
              component="img"
              src={selected.image}
              alt={selected.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Card>
        </Box>
      </Box>
    </Section.Container>
  );
}
