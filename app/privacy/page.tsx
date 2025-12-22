import { Typography, Box, Container } from '@mui/material';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function PrivacyPolicy() {
    return (
        <Container>
            <Navbar />
            <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Privacy Policy
                </Typography>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Last updated:</strong> [Date]
                </Typography>

                <Typography gutterBottom>
                    We respect your privacy. This policy explains what personal data we collect, why, and how we protect it.
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    What we collect
                </Typography>
                <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>
                        When you fill in our contact form: your <strong>name</strong>, <strong>email</strong>, and optional message.
                    </li>
                    <li>
                        Website usage via <strong>Google Analytics</strong> (anonymous, aggregated data — no personally identifiable info).
                    </li>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Why we use it
                </Typography>
                <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>To respond to your enquiry.</li>
                    <li>To improve our website (e.g., see which pages are popular).</li>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    How long we keep it
                </Typography>
                <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>
                        Enquiry emails: <strong>30 days</strong> after project completion (or indefinitely if no project, unless you ask us to delete).
                    </li>
                    <li>
                        Analytics data: retained by Google per their policy (we don’t store it).
                    </li>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Your rights
                </Typography>
                <Typography gutterBottom>
                    You can ask us anytime to:
                </Typography>
                <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>See what data we hold about you</li>
                    <li>Correct inaccuracies</li>
                    <li>Delete your data</li>
                </Typography>
                <Typography gutterBottom>
                    → Just email us at <strong>reach.dgt@pm.me</strong>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Questions?
                </Typography>
                <Typography>
                    Contact: <strong>reach.dgt@pm.me</strong>
                </Typography>
            </Box>
            <Footer />
        </Container>
    );
}