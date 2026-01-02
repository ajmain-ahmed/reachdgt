import { ReactNode, useEffect, useState } from 'react';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  children: ReactNode;
  delay?: number;
  distance?: number;
}

export default function FadeIn({ children, delay = 0, distance = 20, ...boxProps }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <Box
      {...boxProps}
      sx={[
        {
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : `translateY(${distance}px)`,
          transition: `opacity 0.7s ease-out, transform 0.7s ease-out`,
        },
        ...(Array.isArray(boxProps.sx) ? boxProps.sx : [boxProps.sx]),
      ]}
    >
      {children}
    </Box>
  );
}