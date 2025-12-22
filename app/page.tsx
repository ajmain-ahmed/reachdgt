'use client'
import {
  Accordion, AccordionDetails, AccordionSummary, Box, Button, ButtonGroup, Card, CardContent, Chip, Container, Dialog, DialogTitle, Divider, Grid, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography, DialogContent,
  DialogActions,
  Snackbar,
  IconButton,
} from "@mui/material";
import Navbar from "./components/navbar";
import IntroMedia from "./components/intromedia";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from "./components/footer";
import { Analytics, Close, Code, Cottage, ExpandMore, GroupAdd, Insights, Instagram, OpenInNew, PersonSearch, Radar, Reviews, Search, SettingsOverscanOutlined, Translate, TrendingUp, Visibility } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ReelTiktok from "./components/tiktok";
import ReelInstagram from "./components/instagram";
import validator from 'validator';

export default function Home() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [alignment, setAlignment] = useState('tiktok')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false) // dialog
  const [sbOpen, setSbOpen] = useState(false)
  const [sbMsg, setSbMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (name: String, email: String, message: String) => {
    setLoading(true)
    const resp = await fetch('/api/SendQuery', {
      method: 'POST',
      body: JSON.stringify({
        clientName: name,
        clientEmail: email,
        clientMsg: message
      })
    })
    setLoading(false)
    setName('')
    setEmail('')
    setMessage('')
    setOpen(false)
    const result = await resp.json()
    console.log(result)
    if (result === 'Query received') {
      setSbOpen(true)
      setSbMsg('Your enquiry has been sent!')
    }
    else {
      setSbOpen(true)
      setSbMsg('There was an error receiving your enquiry')
    }
  }


  const TikTokIcon = ({ color = "#FFFF" }) => {
    return (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="30px"
        height="30px"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    );
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setSbOpen(false)}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  const handleAlignment = (event: any, newAlignment: any) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }

  return (
    <Container maxWidth="xl">

      <Snackbar
        open={sbOpen}
        autoHideDuration={6000}
        action={action}
        onClose={() => setSbOpen(false)}
        message={sbMsg}
      />

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
            bgcolor: 'rgba(20, 22, 38, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(4px)', // subtle frosted glass (optional)
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 600,
            color: 'white',
            textAlign: 'center',
            pb: 1,
          }}
        >
          Send an Enquiry
        </DialogTitle>

        <DialogContent>
          <TextField
            slotProps={{ htmlInput: { maxLength: 50 } }}
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: '#6da1ff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6da1ff',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.6)',
              },
            }}
          />

          <TextField
            slotProps={{ htmlInput: { maxLength: 254 } }}
            margin="dense"
            label="Email"
            type="email"
            error={!validator.isEmail(email) && email != ''}
            helperText={(!validator.isEmail(email) && email != '') && 'Please enter a valid email.'}
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: '#6da1ff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6da1ff',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.6)',
              },
            }}
          />

          <TextField
            slotProps={{ htmlInput: { maxLength: 500 } }}
            margin="dense"
            label="Message (optional)"
            multiline
            rows={3}
            fullWidth
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              '& .MuiInputBase-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: '#6da1ff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6da1ff',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.6)',
              },
            }}
          />
        </DialogContent>

        <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              textTransform: 'none',
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                borderColor: '#6da1ff',
                bgcolor: 'rgba(109, 161, 255, 0.05)',
              },
            }}
            variant="outlined"
          >
            Cancel
          </Button>

          <Button
            loading={loading}
            onClick={() => { ((validator.isEmail(email)) && (name != '')) ? handleSubmit(name, email, message) : console.log('email and/or name are invalid') }}
            sx={{
              textTransform: 'none',
              ml: 2,
              bgcolor: '#6da1ff',
              color: '#0b0b1e',
              '&:hover': {
                bgcolor: '#5a91e0',
              }
            }}
            variant="contained"
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>

      <Navbar />
      {/* header */}
      <Box
        sx={{
          textAlign: 'center',
          pb: 1
        }}
      >

        <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, gap: { md: 2, xs: 0 }, alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant={matches ? 'h1' : 'h3'} fontWeight={300} gutterBottom>
            Data Driven
          </Typography>
          <Typography sx={{ color: '#1976d2', fontWeight: '600' }} variant={matches ? 'h1' : 'h3'} fontWeight={300} gutterBottom>
            Marketing
          </Typography>
        </Box>

        {
          matches ?
            <>
              <Typography variant="subtitle1" sx={{ mb: 0 }}>
                From content creation and social media management to SEO and website development, <strong>reach</strong> every screen with our all-in-one marketing solutions.
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 3 }}>
                Elevate your digital strategy, register your interest now.
              </Typography>
            </>
            :
            <Typography sx={{ mb: 3 }}>
              From content creation and social media management to SEO and website development, <strong>reach</strong> every screen with our all-in-one marketing solutions.
            </Typography>
        }

      </Box>

      {/* enquire button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pb: { md: 8, xs: 5 },
        }}
      >
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          size="large"
          sx={{
            px: 2.5,
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 500,
            backgroundColor: 'white', // indigo primary
            color: 'black',
            ":hover": { backgroundColor: '#1976d2' }
          }}
        >
          Enquire now
        </Button>
      </Box>

      {/* video */}
      <Box
        sx={{
          pb: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <IntroMedia />
      </Box>

      <Divider
        id={matches ? "products" : undefined}
        sx={{
          pb: 3,
          "&::before, &::after": {
            borderColor: "white",
          },
        }}>
        <Chip sx={{ color: 'black', backgroundColor: 'white' }} label="Trusted by" size="small" />
      </Divider>

      {/* clients */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 0, pb: 3 }}>
        <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} container spacing={2}>

          {/* <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} size={matches ? 3 : 12}>
            <Box
              component="img"
              src="/logos/evocaCropped.png"
            />
          </Grid> */}

          <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} size={matches ? 3 : 12}>
            <Box
              width={!matches ? 200 : 200}
              height={!matches ? 200 : 200}
              component="img"
              src="/logos/mm.png"
            />
          </Grid>

          <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} size={matches ? 3 : 12}>
            <Box
              width={!matches ? 260 : 850}
              height={!matches ? 200 : 200}
              component="img"
              src="/logos/arabicwithm.png"
            />
          </Grid>

        </Grid>


      </Box>

      {/* divider */}
      <Box sx={{ pb: { md: 10, xs: 6 } }}>
        <Divider
          sx={{
            bgcolor: "white"
          }}>
        </Divider>
      </Box>

      {/* key services */}
      <Grid id={!matches ? "products" : undefined} sx={{ pb: 4 }} container>
        <Grid size={matches ? 8 : 12}>
          <Box >
            <Typography gutterBottom variant="h5" sx={{ fontWeight: '600' }}>
              Key services
            </Typography>
            <Typography color="grey" variant="subtitle1" sx={{ fontWeight: '' }}>
              Reach.DGT offers a comprehensive suite of services, allowing you to focus on your business, while we work on making sure your message is heard loud and clear.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* key services grid */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {/* Social Media Strategy */}
        <Grid size={matches ? 4 : 12}>
          <Paper
            sx={{
              borderRadius: '16px',
              p: 3,
              bgcolor: 'rgba(20, 22, 38, 0.7)',
              color: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '16px',
                border: '1px solid white',
                bgcolor: 'transparent',
                mb: 1,
              }}
            >
              <TrendingUp sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Social Media Strategy
              </Typography>
              <Typography variant="body2">
                Proactive socials designed to grow your audience, boost engagement and turn followers into customers across all major platforms.
              </Typography>
            </Box>

          </Paper>
        </Grid>

        {/* SEO */}
        <Grid size={matches ? 4 : 12}>
          <Paper
            sx={{
              height: '100%',
              borderRadius: '16px',
              p: 3,
              bgcolor: 'rgba(20, 22, 38, 0.7)',
              color: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '16px',
                border: '1px solid white',
                bgcolor: 'transparent',
                mb: 1,
              }}
            >
              <Search sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Search Engine Optimisation
              </Typography>
              <Typography variant="body2">
                Efficient SEO to optimise content visibility, extending your reach and enabling your audience to find you, naturally.
              </Typography>
            </Box>

          </Paper>
        </Grid>

        {/* Analytics */}
        <Grid size={matches ? 4 : 12}>
          <Paper
            sx={{
              borderRadius: '16px',
              p: 3,
              bgcolor: 'rgba(20, 22, 38, 0.7)',
              color: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '16px',
                border: '1px solid white',
                bgcolor: 'transparent',
                mb: 1,
              }}
            >
              <Analytics sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Analytics & Reporting
              </Typography>
              <Typography variant="body2">
                We track and analyse the impact of our campaigns, delivering performance reports and refining our strategy through statistical analysis.
              </Typography>
            </Box>

          </Paper>
        </Grid>

        {/* MultiLingual */}
        <Grid size={matches ? 4 : 12}>
          <Paper
            sx={{
              borderRadius: '16px',
              p: 3,
              bgcolor: 'rgba(20, 22, 38, 0.7)',
              color: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '16px',
                border: '1px solid white',
                bgcolor: 'transparent',
                mb: 1,
              }}
            >
              <Translate sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Global Reach
              </Typography>
              <Typography variant="body2">
                Our multilingual team, fluent in English, Arabic, and Japanese, enable culturally nuanced communication across markets worldwide.
              </Typography>
            </Box>

          </Paper>
        </Grid>

        {/* Fullstack */}
        <Grid size={matches ? 4 : 12}>
          <Paper
            sx={{
              borderRadius: '16px',
              p: 3,
              bgcolor: 'rgba(20, 22, 38, 0.7)',
              color: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '16px',
                border: '1px solid white',
                bgcolor: 'transparent',
                mb: 1,
              }}
            >
              <Code sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Complete Digital Execution
              </Typography>
              <Typography variant="body2">
                Beyond content creation, we also build and deploy modern websites, so your digital presence is seamless, scalable, and fully owned.
              </Typography>
            </Box>

          </Paper>
        </Grid>

        {/* Internal */}
        <Grid size={matches ? 4 : 12}>
          <Paper
            sx={{
              borderRadius: '16px',
              p: 3,
              bgcolor: 'rgba(20, 22, 38, 0.7)',
              color: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '16px',
                border: '1px solid white',
                bgcolor: 'transparent',
                mb: 1,
              }}
            >
              <Cottage sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                End-to-End Content Delivery
              </Typography>
              <Typography variant="body2">
                Concept, filming and editing: all our content is developed internally, ensuring that your message is delivered with clarity and consistency.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* divider */}
      <Box id="campaigns" sx={{ pb: { md: 12, xs: 6 }, pt: { md: 12, xs: 6 } }}>
        <Divider
          sx={{
            bgcolor: "white"
          }}>
        </Divider>
      </Box>

      {/* success story */}
      <Grid sx={{ pb: { md: 8, xs: 4 } }} container>
        <Grid size={matches ? 8 : 12}>
          <Box>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: '600' }}>
              From vision to viral
            </Typography>
            <Typography color="grey" variant="subtitle1" sx={{ fontWeight: '' }}>
              We partnered with ArabicWithM, a fast-growing TikTok & Instagram creator.
              The account has gained almost 10,000 followers in 7 months with our tailor-made digital content strategy.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* tt/ig video & buttons on desktop and mobile */}
      <Grid sx={{ minHeight: matches ? '780px' : undefined }} container>
        {
          (!matches) &&
          <Grid size={12}>
            <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleAlignment} orientation="horizontal" sx={{ width: '100%', pb: 4 }}>
              <ToggleButton sx={{ width: '50%' }} color="info" value="tiktok">
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <TikTokIcon />
                  <Typography variant="h5" sx={{ color: 'white', textTransform: 'none' }}>Tiktok</Typography>
                </Box>
              </ToggleButton>
              <ToggleButton sx={{ width: '50%' }} color="info" value="instagram">
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <Instagram sx={{ color: 'white', fontSize: 30 }} />
                  <Typography variant="h5" sx={{ color: 'white', textTransform: 'none' }}>Instagram</Typography>
                </Box>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        }
        <Grid size={matches ? 4 : 12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Box sx={{ display: alignment === 'instagram' ? 'none' : 'block' }}>
            <ReelTiktok />
          </Box>
          <Box sx={{ display: alignment === 'tiktok' ? 'none' : 'block', py: 2 }}>
            <ReelInstagram />
          </Box>
        </Grid>

        {(!matches) &&
          <Box sx={{ pt: 4 }}>
            <Card sx={{
              borderRadius: '16px',
              bgcolor: 'rgba(20, 22, 38, 0.7)',
              color: 'white'
            }}>
              <CardContent>
                <Typography variant="subtitle1">
                  We centred our content strategy around reimagining Japanese, Egyptian and UK animation snippets with natural Arabic dubbing, subtitles and learning cues.
                  We then worked on extending his reach with targeted Google Local Services Ads, positioning ArabicWithM as a trusted Arabic & English tutor in local searches and
                  turning passionate followers into real students.
                </Typography>
              </CardContent>
            </Card>
            <Grid spacing={2} container>
              {/* monthly views */}
              <Grid size={12}>
                <Paper
                  sx={{
                    width: '100%',
                    height: '100%',
                    mt: 3,
                    borderRadius: '16px',
                    p: 2,
                    bgcolor: 'rgba(20, 22, 38, 0.7)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, pb: 1 }}>
                    <Visibility sx={{ color: 'white', fontSize: 24 }} />
                    <Typography variant="h5" textAlign="center">
                      Monthly views
                    </Typography>
                  </Box>
                  <Box>
                    <Typography textAlign="center" variant="h2" sx={{ color: '#1976d2', fontWeight: '600' }}>200k+</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* accounts reached */}
              <Grid size={12}>
                <Paper
                  sx={{
                    width: '100%',
                    height: '100%',
                    mt: 3,
                    borderRadius: '16px',
                    p: 2,
                    bgcolor: 'rgba(20, 22, 38, 0.7)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, pb: 1 }}>
                    <GroupAdd sx={{ color: 'white', fontSize: 24 }} />
                    <Typography variant="h5" textAlign="center">
                      Accounts reached
                    </Typography>
                  </Box>
                  <Box>
                    <Typography textAlign="center" variant="h2" sx={{ color: '#1976d2', fontWeight: '600' }}>100k+</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* profile visits */}
              <Grid size={12}>
                <Paper
                  sx={{
                    width: '100%',
                    height: '100%',
                    mt: 3,
                    borderRadius: '16px',
                    p: 2,
                    bgcolor: 'rgba(20, 22, 38, 0.7)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, pb: 1 }}>
                    <PersonSearch sx={{ color: 'white', fontSize: 24 }} />
                    <Typography variant="h5" textAlign="center">
                      Profile visits
                    </Typography>
                  </Box>
                  <Box>
                    <Typography textAlign="center" variant="h2" sx={{ color: '#1976d2', fontWeight: '600' }}>300%+</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* outbound clicks */}
              <Grid size={12}>
                <Paper
                  sx={{
                    width: '100%',
                    height: '100%',
                    mt: 3,
                    borderRadius: '16px',
                    p: 2,
                    bgcolor: 'rgba(20, 22, 38, 0.7)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, pb: 1, mb: 2 }}>
                    <Reviews sx={{ color: 'white', fontSize: 24 }} />
                    <Typography variant="h5" textAlign="center">
                      Testimonial
                    </Typography>
                  </Box>
                  <Box>
                    <Typography gutterBottom variant="subtitle1" sx={{ color: '', fontWeight: '600', mb: 2 }}>
                      “Reach digital have been there since day one, they started my profile from scratch and helped build me into having a great client base within my local area.
                      Creativity, vision and execution, they excelled at each aspect and I would recommend them to any type of business.”
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }}>
                      ArabicWithM
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

            </Grid>
          </Box>
        }

        {
          matches &&
          <Grid sx={{ pt: 2.1 }} size={8}>

            <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} orientation="horizontal" sx={{ width: '100%', pb: 4 }}>
              <ToggleButton sx={{ width: '50%' }} color="info" value="tiktok">
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <TikTokIcon />
                  <Typography variant="h5" sx={{ color: 'white', textTransform: 'none' }}>Tiktok</Typography>
                </Box>
              </ToggleButton>
              <ToggleButton sx={{ width: '50%' }} color="info" value="instagram">
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <Instagram sx={{ color: 'white', fontSize: 30 }} />
                  <Typography variant="h5" sx={{ color: 'white', textTransform: 'none' }}>Instagram</Typography>
                </Box>
              </ToggleButton>
            </ToggleButtonGroup>

            <Card sx={{
              borderRadius: '16px',
              bgcolor: 'rgba(20, 22, 38, 0.7)',
              color: 'white'
            }}>
              <CardContent>
                <Typography variant="subtitle1">
                  Reach.DGT worked alongside ArabicWithM to build a comprehensive digital strategy with an emphasis on organic growth.
                  We began by developing a culturally nuanced content strategy across TikTok and Instagram,
                  centering our content around reimagining Japanese, Egyptian and UK animation snippets with natural Arabic dubbing, subtitles and learning cues.
                  But great content alone isn’t enough, so we extended his reach with targeted Google Local Services Ads, positioning ArabicWithM as a trusted Arabic & English tutor in local searches.
                  and turning passionate followers into real students.
                </Typography>
              </CardContent>
            </Card>

            {/* stats */}
            <Grid spacing={2} container>
              {/* monthly views */}
              <Grid size={4}>
                <Paper
                  sx={{
                    width: '100%',
                    height: '100%',
                    mt: 3,
                    borderRadius: '16px',
                    p: 2,
                    bgcolor: 'rgba(20, 22, 38, 0.7)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, pb: 1 }}>
                    <Visibility sx={{ color: 'white', fontSize: 24 }} />
                    <Typography variant="h5" textAlign="center">
                      Monthly views
                    </Typography>
                  </Box>
                  <Box>
                    <Typography textAlign="center" variant="h2" sx={{ color: '#1976d2', fontWeight: '600' }}>200k+</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* accounts reached */}
              <Grid size={4}>
                <Paper
                  sx={{
                    width: '100%',
                    height: '100%',
                    mt: 3,
                    borderRadius: '16px',
                    p: 2,
                    bgcolor: 'rgba(20, 22, 38, 0.7)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, pb: 1 }}>
                    <GroupAdd sx={{ color: 'white', fontSize: 24 }} />
                    <Typography variant="h5" textAlign="center">
                      Accounts reached
                    </Typography>
                  </Box>
                  <Box>
                    <Typography textAlign="center" variant="h2" sx={{ color: '#1976d2', fontWeight: '600' }}>100k+</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* profile visits */}
              <Grid size={4}>
                <Paper
                  sx={{
                    width: '100%',
                    height: '100%',
                    mt: 3,
                    borderRadius: '16px',
                    p: 2,
                    bgcolor: 'rgba(20, 22, 38, 0.7)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, pb: 1 }}>
                    <PersonSearch sx={{ color: 'white', fontSize: 24 }} />
                    <Typography variant="h5" textAlign="center">
                      Profile visits
                    </Typography>
                  </Box>
                  <Box>
                    <Typography textAlign="center" variant="h2" sx={{ color: '#1976d2', fontWeight: '600' }}>300%+</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* outbound clicks */}
              <Grid size={12}>
                <Paper
                  sx={{
                    width: '100%',
                    height: '100%',
                    mt: 3,
                    borderRadius: '16px',
                    p: 2,
                    bgcolor: 'rgba(20, 22, 38, 0.7)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, pb: 1, mb: 2 }}>
                    <Reviews sx={{ color: 'white', fontSize: 24 }} />
                    <Typography variant="h5" textAlign="center">
                      Testimonial
                    </Typography>
                  </Box>
                  <Box>
                    <Typography gutterBottom variant="subtitle1" sx={{ color: '', fontWeight: '600', mb: 4 }}>
                      “Reach digital have been there since day one, they started my profile from scratch and helped build me into having a great client base within my local area.
                      Creativity, vision and execution, they excelled at each aspect and I would recommend them to any type of business.”
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }}>
                      ArabicWithM
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

            </Grid>

          </Grid>
        }

      </Grid>

      {/* divider */}
      <Box id="faq" sx={{ pb: 10, pt: 8 }}>
        <Divider
          sx={{
            bgcolor: "white"
          }}>
        </Divider>
      </Box>

      {/* FAQ */}

      <Typography textAlign="center" gutterBottom variant="h5" sx={{ fontWeight: '600', pb: 6 }}>
        Frequently asked questions
      </Typography>


      <Stack spacing={1}>
        <Accordion
          sx={{
            borderRadius: '16px',
            bgcolor: 'rgba(20, 22, 38, 0.7)',
            color: 'white'
          }}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: 'white', fontSize: 24 }} />}
          >
            <Typography component="span">
              What makes Reach.DGT different from other marketing organisations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            We offer a comprehensive support suite including website development, original content production, editing and delivery in addition to SEO and paid advertising campaigns.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: '16px',
            bgcolor: 'rgba(20, 22, 38, 0.7)',
            color: 'white'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: 'white', fontSize: 24 }} />}>
            <Typography component="span">
              Which platforms do you focus on?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Primarily TikTok, Instagram, and YouTube Shorts, where short-form, high-engagement storytelling thrives.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: '16px',
            bgcolor: 'rgba(20, 22, 38, 0.7)',
            color: 'white'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: 'white', fontSize: 24 }} />}>
            <Typography component="span">
              What tech do you use to build websites?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            We build fast, SEO-friendly, scalable sites with Next.js (React), leveraging server-side rendering, image optimisation and global CDN delivery, ensuring  your site performs as  well as your content.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: '16px',
            bgcolor: 'rgba(20, 22, 38, 0.7)',
            color: 'white'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: 'white', fontSize: 24 }} />}>
            <Typography component="span">
              What tech do you use to build websites?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            We build fast, SEO-friendly, scalable sites with Next.js (React), leveraging server-side rendering, image optimisation and global CDN delivery, ensuring  your site performs as  well as your content.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: '16px',
            bgcolor: 'rgba(20, 22, 38, 0.7)',
            color: 'white'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: 'white', fontSize: 24 }} />}>
            <Typography component="span">
              Can you work with multilingual audiences?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Absolutely. Our team consists of members fluent in English, Arabic and Japanese.
          </AccordionDetails>
        </Accordion>
      </Stack>


      {/* divider */}
      <Box sx={{ pb: 0, pt: 11 }}>
        <Divider
          sx={{
            bgcolor: "white"
          }}>
        </Divider>
      </Box>


      <Footer />

    </Container >
  );
}
