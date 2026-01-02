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
                        Contact details: your <strong>name</strong>, <strong>email</strong>, and message should you fill the contact form.
                    </li>
                    <li>
                        Website usage via <strong>Google Analytics.</strong>
                    </li>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Why we use it
                </Typography>
                <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>To respond to your enquiry.</li>
                    <li>To improve our website.</li>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    How long we keep it
                </Typography>
                <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>
                        Enquiry emails: indefinitely unless requested otherwise.
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
                    Just email us at <strong>reachdgt@gmail.com</strong>
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Questions?
                </Typography>
                <Typography>
                    Contact: <strong>reachdgt@gmail.com</strong>
                </Typography>
            </Box>
            <Footer />
        </Container>
    );
}