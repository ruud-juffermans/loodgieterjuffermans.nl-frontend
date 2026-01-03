import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Rating } from '@mui/material';
import Section from '@components/Section';

const userTestimonials = [
  {
    avatar: <Avatar alt="A, Heemskerk" src="/static/images/avatar/1.jpg" />,
    name: 'A, Heemskerk',
    occupation: <Rating  size="small" name="read-only" value={5} readOnly />,
    testimonial: "Aardige man, komt afspraken na, werkt goed door, nieuwe dakgoot zit er goed in, net werk. Kon snel komen. Kortom: wat ik hoopte."
  },
  {
    avatar: <Avatar alt="Marieke van Deldenr" src="/static/images/avatar/2.jpg" />,
    name: 'Marieke van Delden',
    occupation: <Rating  size="small" name="read-only" value={5} readOnly />,
    testimonial:"Betrouwbare en zeer goede vakman. Kan hem iedereen aanraden. Prima werk geleverd en meerwerk in goed overleg en adhv foto’s." 
  },
  {
    avatar: <Avatar alt="Ludwig Fauser" src="/static/images/avatar/3.jpg" />,
    name: 'Ludwig Fauser',
    occupation: <Rating  size="small" name="read-only" value={5} readOnly />,
    testimonial:"Goede communicatie en alles kerig op tijd en volgens afspraak ."
  },
];

export default function Reviews() {
  return (
    <Section.Container
      id="reviews"
    >
      <Box
        sx={{
          width: { sm: '100%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Section.Heading>
          Wat klanten over mij zeggen
        </Section.Heading>
        <Section.Subheading>
        Bij mij spreken resultaten. Lees wat klanten te zeggen hebben over hun ervaring met Loodgietersbedrijf Juffermans.
        </Section.Subheading>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
            <Card
            key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: "100%",
                flex: {sm: "unset", md: 1}
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
        ))}
      </Grid>
    </Section.Container>
  );
}