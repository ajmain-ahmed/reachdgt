import { ReactNode, useEffect, useRef, useState } from 'react';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
    children: ReactNode;
    delay?: number;
    distance?: number;
}

export default function AnimateOnScroll({
    children,
    delay = 0,
    distance = 20,
    ...boxProps
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);     
    const hasTriggered = useRef(false);               

    useEffect(() => {
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered.current) {
                    hasTriggered.current = true;               
                    setVisible(true);
                    io.disconnect();                          
                }
            },
            { threshold: 0.2 }
        );
        const el = ref.current;
        if (el) io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <Box
            ref={ref}
            {...boxProps}
            sx={[
                {
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : `translateY(${distance}px)`,
                    transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                    transitionDelay: `${delay}ms`,
                },
                ...(Array.isArray(boxProps.sx) ? boxProps.sx : [boxProps.sx]),
            ]}
        >
            {children}
        </Box>
    );
}