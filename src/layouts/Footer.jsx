import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Logo from "@assets/logo.svg"

const logoStyle = {
  width: '100px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://www.loodgieterjuffermans.nl/">Loodgietersbedrijf Juffermans&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column'},
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 3, sm: 8 },
        textAlign: { sm: 'left'},
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '40px', md: '0px' },
          paddingLeft: "10px",
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', md: '50%' },
          }}
        >
        <Box>
            <Box >
            <img
                src={Logo}
                style={logoStyle}
                alt="logo of sitemark"
              />
            <Typography variant="body2" color="text.primary" mt={2} fontWeight={300}>
                Loodgietersbedrijf Juffermans
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} useFlexGap>
            <ul>
                <li><a style={{color: "#0e5d8b"}} href="tel:0614149298">0614149298</a></li>
                <li><a style={{color: "#0e5d8b"}} href="mailto:info@loodgieterjuffermans.nl">info@loodgieterjuffermans.nl</a></li>
              </ul>
            </Stack>
          </Box>
        </Box>
        <Box sx={{
            width: { xs: '100%', md: '50%' },
            }}>
        <Box
          sx={{
            display: { xs: 'inline-flex' },
            flexDirection: 'column',
            width: "50%",
            gap: 0.5,
          }}
          >
          <Typography variant="body2" fontWeight={500}>
            Secties
          </Typography>
          <Link onClick={() => scrollToSection('over-mij')} color="text.secondary" >
            Over mij
          </Link>
          <Link onClick={() => scrollToSection('diensten')}  color="text.secondary">
            Diensten
          </Link>
          <Link color="text.secondary" onClick={() => scrollToSection('reviews')} >
            Reviews
          </Link>
          <Link color="text.secondary" onClick={() => scrollToSection('faq')} >
            FAQ
          </Link>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: { xs: 'inline-flex' },
            flexDirection: 'column',
            gap: 0.5,
          }}
          >
          <Typography variant="body2" fontWeight={600}>
            Paginas
          </Typography>
          <Link color="text.secondary" >
            Fotogalerij
          </Link>
          <Link color="text.secondary" >
            Diensten
          </Link>
          <Link color="text.secondary" >
            Regios
          </Link>
        </Box>
          </Box>

      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 2},
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>

          <Copyright />
        </div>
      </Box>
    </Container>
  );
}