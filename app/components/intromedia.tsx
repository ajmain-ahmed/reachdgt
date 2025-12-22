'use client';

import YouTube, { YouTubeProps } from 'react-youtube';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useMemo } from 'react';

export default function IntroMedia() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    };

    const options = useMemo(() => ({
        height: matches ? '550' : '250',
        width: '100%',
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            controls: 1,
            disablekb: 1,
        }
    }), [matches]);

    useEffect(() => {

    }, [matches])

    return (
        <Box
            sx={{
                width: {md:'80%', xs:'100%'},
                // Soft outer glow (navy-tinted to match your theme)
                boxShadow: `
          0 8px 32px rgba(3, 22, 43, 0.25),
          0 0 0 1px rgba(99, 102, 241, 0.1)
        `,
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // subtle dark fill behind iframe
                backdropFilter: 'blur(4px)', // optional: enhance glass feel
                WebkitBackdropFilter: 'blur(4px)',

                // Ensure no internal padding interferes
                '& > div': {
                    margin: 0,
                },
            }}
        >
            <YouTube
                videoId="W91-jAQ2ijM"
                opts={options}
                onReady={onPlayerReady}
                // Optional: improve responsiveness
                iframeClassName="youtube-iframe"
            />
        </Box>
    );
}