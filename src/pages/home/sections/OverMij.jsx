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
          Loodgietersbedrijf Juffermans is een bedrijf dat zich richt op het oplossen van loodgietersproblemen in Haarlem, Hemstede en omgeving. 
          Ik als ervare loodgieter heb jarenlange ervaring en kan u snel en efficiënt van dienst zijn bij problemen met water, gas, CV-installaties, dakgoten, zinkwerk en rioolwerk. 
          </Section.Text>
          <Section.Text>
          Ik sta bekend om mijn klantgerichte aanpak en vakwerk. 
          Bij mijn heeft u altijd één aanspreekpunt en kunt u vertrouwen op onze professionaliteit.
          </Section.Text>

      </Box>
    </Section.Container>
  );
}
