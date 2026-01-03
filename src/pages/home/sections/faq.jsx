import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  Link,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Section from "../../../components/Section/INDEX.JSX";

const FAQ_ITEMS = [
  {
    id: "afspraak",
    question: "Hoe kan ik een afspraak maken?",
    answer:
      "U kunt telefonisch direct contact opnemen. U kunt mij ook gerust een e-mail sturen.",
    links: [
      { type: "tel", label: "0614149298", href: "tel:0614149298" },
      {
        type: "email",
        label: "info@loodgieterjuffermans.nl",
        href: "mailto:info@loodgieterjuffermans.nl",
      },
    ],
  },
  {
    id: "offerte",
    question: "Kan ik een offerte krijgen voordat de werkzaamheden beginnen?",
    answer:
      "Absoluut. Ik bied gratis offertes aan na een initiële inspectie van de benodigde werkzaamheden.",
  },
  {
    id: "waarom",
    question: "Waarom kiezen voor Loodgietersbedrijf Juffermans?",
    answer:
      "Met meer dan zeven decennia ervaring biedt elk project een garantie voor kwaliteit en duurzaamheid.",
  },
  {
    id: "gebied",
    question: "In welke gebieden werk ik?",
    answer:
      "Ik rijd door heel Noord-Holland voor speciale projecten, inclusief Haarlem, Heemstede, Bennebroek en Amsterdam.",
  },
];

export default function FAQ() {
  const theme = useTheme()
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panelId) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panelId : null);
  };

  return (
    <Section.Container
      id="faq"
      backgroundColor={theme.palette.primary.main}
    >
      <Section.Heading color={"white"}>
        Vaak gestelde vragen
      </Section.Heading>

      <Box sx={{ width: "100%" }}>
        {FAQ_ITEMS.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
            >
              <Typography component="h3" variant="subtitle2">
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography
                variant="body2"
                
                sx={{ my: 2, maxWidth: { sm: "100%", md: "70%" } }}
              >
                {item.answer}
              </Typography>

              {item.links?.length ? (
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                  {item.links.map((l) => (
                    <Box component="li" key={l.href}>
                      <Link href={l.href} underline="hover">
                        {l.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              ) : null}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Section.Container>
  );
}
