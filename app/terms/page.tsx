import { Typography, Box, Container } from '@mui/material';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function TermsOfService() {
    return (
        <Container>
            <Navbar />

            <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Terms of Service
                </Typography>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Last updated:</strong> [Date]
                </Typography>

                <Typography gutterBottom>
                    These terms apply when you engage us for marketing, content, or development services.
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    1. Scope of work
                </Typography>
                <Typography gutterBottom>
                    We will agree on deliverables (e.g., “3 TikTok videos + SEO audit”) in writing before starting. Scope changes may affect cost and timeline.
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    2. Payment
                </Typography>
                <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>50% upfront to begin, 50% on delivery.</li>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    3. Revisions
                </Typography>
                <Typography gutterBottom>
                    Includes <strong>2 rounds</strong> of reasonable revisions per deliverable. Additional changes billed at our standard hourly rate.
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    4. Intellectual Property
                </Typography>
                <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>You own final delivered work (videos, website, ads).</li>
                    <li>We retain the right to showcase completed work in our portfolio (unless you request otherwise in writing).</li>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    5. Liability
                </Typography>
                <Typography gutterBottom>
                    Our total liability is capped at <strong>the fee paid for the project</strong>. We are not liable for indirect or consequential losses (including, but not limited to, lost profits or business opportunities).
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    6. Cancellation
                </Typography>
                <Typography gutterBottom>
                    You may cancel at any time. Any upfront payment is non-refundable for work already completed or committed.
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    7. Governing law
                </Typography>
                <Typography gutterBottom>
                    These terms are governed by and construed in accordance with the laws of <strong>England and Wales</strong>. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
                </Typography>
            </Box>
            <Footer />
        </Container>
    );
}