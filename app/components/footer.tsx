import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { Instagram } from '@mui/icons-material';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.7, mt: 1 }}>
      {'Copyright © '}
      <Link color="#FFFFFF" sx={{ opacity: 0.9 }} href="/">
        Reach.DGT
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'left',
          gap: 3
        }}
      >

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#FFFFFF' }}>
            Service
          </Typography>
          <Link
            color="rgba(255,255,255,0.8)"
            variant="body2"
            href="#products"
            sx={{ '&:hover': { color: '#FFFFFF' } }}
          >
            Products
          </Link>
          <Link
            color="rgba(255,255,255,0.8)"
            variant="body2"
            href="#campaigns"
            sx={{ '&:hover': { color: '#FFFFFF' } }}
          >
            Campaigns
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#FFFFFF' }}>
            Legal
          </Typography>

          <Link color="rgba(255,255,255,0.8)" variant="body2" href="/terms" sx={{ '&:hover': { color: '#FFFFFF' } }}>
            Terms
          </Link>
          <Link color="rgba(255,255,255,0.8)" variant="body2" href="/privacy" sx={{ '&:hover': { color: '#FFFFFF' } }}>
            Privacy
          </Link>

        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div>
          <Link color="rgba(255,255,255,0.8)" variant="body2" href="/privacy" sx={{ '&:hover': { color: '#FFFFFF' } }}>
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, color: 'rgba(255,255,255,0.5)' }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="rgba(255,255,255,0.8)" variant="body2" href="/terms" sx={{ '&:hover': { color: '#FFFFFF' } }}>
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ color: '#FFFFFF' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com/reach.dgt/"
            sx={{ color: '#FFFFFF', '&:hover': { color: '#1976d2' } }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/reachdgt/"
            sx={{ color: '#FFFFFF', '&:hover': { color: '#1976d2' } }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}