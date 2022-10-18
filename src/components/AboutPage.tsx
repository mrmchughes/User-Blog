import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Link from "@mui/material/Link";

let theme = createTheme();

theme = responsiveFontSizes(theme);

const AboutPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "50%",
        margin: "0 auto",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h4" sx={{ textAlign: "center", m: 2.5 }}>
          About
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" sx={{ textAlign: "center", m: 1 }}>
            I'm Michael, and welcome to my blog! I am a self-taught Full Stack
            Web Developer.
          </Typography>

          <Divider />

          <Typography variant="body1" sx={{ textAlign: "center", m: 1 }}>
            During a time when I was feeling dissatisfied in my previous career,
            I began coding by working my way through a beginner’s book on
            Python.
          </Typography>

          <Divider />

          <Typography variant="body1" sx={{ textAlign: "center", m: 1 }}>
            I knew even then I had found something I was truly passionate about.
            Thinking my way through logical problems and developing projects to
            expand my skills has been a truly rewarding journey.
          </Typography>

          <Divider />
        </Box>

        <br />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" sx={{ textAlign: "center", m: 1 }}>
            Let's get connected! Contact me at:
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{ textAlign: "center" }}
              size="large"
              startIcon={<EmailIcon />}
            >
              mrmchughes27@gmail.com
            </Button>
            <Button
              color="inherit"
              sx={{ textAlign: "center" }}
              size="large"
              startIcon={<LinkedInIcon />}
            >
              <Link
                href="https://www.linkedin.com/in/michaelhughes27/"
                sx={{ textDecoration: "none" }}
              >
                LinkedIn
              </Link>
            </Button>
            <Button
              color="inherit"
              sx={{ textAlign: "center" }}
              size="large"
              startIcon={<PermMediaIcon />}
            >
              <Link
                href="https://mrmchughes.github.io/personal-portfolio/"
                sx={{ textDecoration: "none" }}
              >
                Portfolio
              </Link>
            </Button>
            <Button
              color="inherit"
              sx={{ textAlign: "center" }}
              size="large"
              startIcon={<GitHubIcon />}
            >
              <Link
                href="https://github.com/mrmchughes"
                sx={{ textDecoration: "none" }}
              >
                Github
              </Link>
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default AboutPage;
