import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "'Quicksand', sans-serif",
    },
});

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
}));

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="footer"
                sx={{
                    backgroundColor: "#000000",
                    p: 6,
                    textAlign: "center",
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <CustomTypography variant="h6" color="text.primary" gutterBottom style={{ color: "#ffffff" }}>
                                Sobre la empresa
                            </CustomTypography>
                            <CustomTypography variant="body2" color="text.secondary" style={{ color: "#ffffff" }}>
                                ¡Bienvenido a .16! Somos tu destino en línea para descubrir una amplia selección de bebidas alcohólicas de alta calidad. Únete a nosotros mientras exploramos el mundo de los sabores únicos y las experiencias memorables. ¡Salud!
                            </CustomTypography>
                        </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom style={{ color: "#ffffff" }}>
                            Contacto:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ color: "#ffffff" }}>
                            Luisa Rufino 232 - RG - Tdf 
                        </Typography> 
                        <Typography variant="body2" color="text.secondary" style={{ color: "#ffffff" }}>
                            Email: punto16@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ color: "#ffffff" }}>
                            Celular: 2964542193
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom style={{ color: "#ffffff" }}>
                            En redes:
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit">
                            <Facebook style={{ color: "#ffffff" }} />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram style={{ color: "#ffffff" }} />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                            <Twitter style={{ color: "#ffffff" }} />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center" style={{ color: "#ffffff" }}>
                        {"Copyright © "}
                        <Link color="inherit" href="https://your-website.com/">
                            Yanina G. Vilte
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
        </ThemeProvider>
    );
};

export default Footer