'use client';

import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Menu, MenuItem, TextField, Toolbar, Typography } from "@mui/material";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import Link from "next/link";
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm')); // sm = 600px+

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false)

    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: 'Products', href: '#products' },
        { label: 'Campaigns', href: '#campaigns' },
        { label: 'FAQ', href: '#faq' },
    ];

    const handleSubmit = () => {
        // TODO: handle form submission (e.g., API call)
        console.log({ name, email, message });
    }

    return (
        <Box
            sx={{
                position: 'sticky', // Move sticky positioning here
                top: 0,            // Add this to stick to top
                zIndex: 1100,
                pt: { md: 6, xs: 4 },
                px: 0,
                pb: { md: 10, xs: 5 }, // slightly reduced from 10 for better rhythm
            }}
        >
            <Container
                sx={{
                    padding: 0,
                    // ✅ Your exact navy glass styling preserved
                    backgroundColor: 'rgba(1, 13, 26, 0.88)', // #010d1a @ 88%
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRadius: '12px',
                    border: '0.1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 0 1px rgba(45, 85, 150, 0.2)',
                    backgroundImage: 'linear-gradient(to bottom, rgba(3, 22, 43, 0.08), transparent)',
                }}
            >
                <Toolbar
                    sx={{
                        position: 'sticky',
                        margin: 0,
                        padding: { xs: 1.5, sm: 0 }, // slight inner padding on mobile for tap space
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Logo + Nav (Desktop) / Logo-only (Mobile) */}
                    {matches ? (
                        // 🔹 Desktop
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Link href="/">
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <WbTwilightIcon
                                        sx={{
                                            color: 'white',
                                            mr: 1,
                                            fontSize: '20px',
                                        }}
                                    />
                                    <Typography
                                        textTransform='none'
                                        color="#E0E7FF"
                                        variant="subtitle2"
                                        fontWeight={600}
                                        sx={{ fontSize: '0.95rem' }}
                                    >
                                        Reach.DGT
                                    </Typography>
                                </Box>
                            </Link>
                            <Box
                                sx={{
                                    ml: 3,
                                    display: 'flex',
                                    gap: 0.5,
                                }}
                            >
                                <Button
                                    href="#products"
                                    sx={{
                                        color: '#CBD5E1',
                                        textTransform: 'none',
                                        fontSize: '0.875rem',
                                        px: 1.5,
                                        py: 0.5,
                                    }}
                                >
                                    Products
                                </Button>
                                <Button
                                    href="#campaigns"
                                    sx={{
                                        color: '#CBD5E1',
                                        textTransform: 'none',
                                        fontSize: '0.875rem',
                                        px: 1.5,
                                        py: 0.5,
                                    }}
                                >
                                    Campaigns
                                </Button>
                                <Button
                                    href="#faq"
                                    sx={{
                                        color: '#CBD5E1',
                                        textTransform: 'none',
                                        fontSize: '0.875rem',
                                        px: 1.5,
                                        py: 0.5,
                                    }}
                                >
                                    FAQ
                                </Button>
                            </Box>
                        </Box>
                    ) : (
                        // 🔹 Mobile
                        <Box
                            component={Link}
                            href='/'
                            sx={{
                                pl: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <WbTwilightIcon
                                sx={{

                                    color: 'white',
                                    fontSize: '20px',
                                }}
                            />
                            <Typography
                                textTransform='none'
                                color="#E0E7FF"
                                variant="subtitle2"
                                fontWeight={600}
                                sx={{ fontSize: '0.9rem' }}
                            >
                                Reach.DGT
                            </Typography>
                        </Box>
                    )}

                    {/* Auth (Desktop) / Menu (Mobile) */}
                    {matches ? (
                        <Button
                            onClick={() => setOpen(true)}
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                textTransform: 'none',
                                fontSize: '0.875rem',
                                px: 1.5,
                                py: 0.5,
                            }}
                        >
                            Enquire now
                        </Button>
                    ) : (
                        // 🔹 Mobile — Menu button styled to match your glass navbar
                        <IconButton
                            onClick={() => setMobileOpen(true)}
                            sx={{
                                mr: 0.5,
                                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                border: '0.1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '10px',
                                width: 36,
                                height: 36,
                                p: 0,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                                },
                            }}
                        >
                            <MenuIcon sx={{ color: '#fff', fontSize: '1.25rem' }} />
                        </IconButton>
                    )}
                </Toolbar>
                <Drawer
                    anchor="top"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: '100%', // or '100%' for full width
                            height: 'auto',
                            backgroundColor: 'rgba(10, 15, 30, 0.95)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                            px: 2,
                            py: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        },
                    }}
                    transitionDuration={300}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton
                            onClick={() => setMobileOpen(false)}
                            sx={{ color: 'white', p: 0.5 }}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 1, mt: 2 }}>
                        {navItems.map((item) => (
                            <Link href={item.href} key={item.label} passHref>
                                <Button
                                    fullWidth
                                    onClick={() => setMobileOpen(false)}
                                    sx={{
                                        color: '#CBD5E1',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        justifyContent: 'flex-start',
                                        py: 1.2,
                                        borderRadius: '8px',
                                        '&:hover': {
                                            bgcolor: 'rgba(109, 161, 255, 0.1)',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}

                        {/* Optional: add Enquire Now inside mobile drawer too */}
                        <Button
                            onClick={() => {
                                setMobileOpen(false);
                                setOpen(true);
                            }}
                            variant="contained"
                            sx={{
                                mt: 2,
                                backgroundColor: 'white',
                                color: 'black',
                                textTransform: 'none',
                                fontWeight: 600,
                                py: 1.2,
                            }}
                        >
                            Enquire now
                        </Button>
                    </Box>
                </Drawer>
            </Container>

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
                        margin="dense"
                        label="Email"
                        type="email"
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
                        onClick={handleSubmit}
                        sx={{
                            ml: 2,
                            bgcolor: '#6da1ff',
                            color: '#0b0b1e',
                            fontWeight: 600,
                            '&:hover': {
                                bgcolor: '#5a91e0',
                            },
                        }}
                        variant="contained"
                    >
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}