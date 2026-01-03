import * as React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Section from '@components/Section'

export default function OverMij() {

  return (
    <Section.Container
      id="over-mij"
    >
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
        }}
      >
        <Section.Heading>
          Over mij
        </Section.Heading>
        <Section.Text>
          Ik ben gespecialiseerd in alles wat met zink- en loodwerk te maken
          heeft.
          </Section.Text>
          <Section.Text>
          Loodgietersbedrijf MB is actief in Zwaag, Hoorn en omgeving en richt zich
          op het oplossen van uiteenlopende loodgietersproblemen. Met jarenlange
          ervaring sta ik klaar voor werkzaamheden aan water- en gasleidingen,
          cv-installaties, dakgoten, zinkwerk en rioolwerk.
          </Section.Text>
          <Section.Text>
          Ik werk klantgericht en efficiënt, met één vast aanspreekpunt en een
          sterke focus op kwaliteit en betrouwbaarheid.
          </Section.Text>

      </Box>
    </Section.Container>
  );
}
