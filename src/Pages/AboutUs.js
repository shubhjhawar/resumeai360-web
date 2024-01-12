import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";
import aboutus from "./aboutus.png";
import aboutline from "./aboutline.png";

export default function ButtonMUI() {

   // Define your social media profile URLs
   const linkedInProfileUrl = 'https://www.linkedin.com';
   const facebookProfileUrl = 'https://www.facebook.com';
   const whatsAppProfileUrl = 'https://wa.me'; // Replace with your WhatsApp number
   const twitterProfileUrl = 'https://twitter.com';
   const emailProfileUrl = 'mailto:your-email@example.com';
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">ResumeAi360</h2>
        <span><img style={{ width: "200px", height: "50px" }} src={aboutline} alt="aboutline" /></span>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify"
            }}>
            Welcome to our ResumeAi360! We are a team of experienced professionals dedicated to helping job seekers create resumes and cover letters that stand out from the competition. Our mission is to provide you with the tools and resources you need to land your dream job.

            We understand that the job search can be overwhelming, which is why we're here to guide you every step of the way. Our easy-to-use platform offers a variety of customizable templates and industry-specific keywords to help you craft a resume that showcases your unique skills and accomplishments.

            At our resume builder, we're committed to providing you with a high-quality, affordable solution to your job search needs. Our team is always on the cutting edge of industry trends and best practices, so you can trust that your resume is in good hands.

            Thank you for choosing our ResumeAi360. We look forward to helping you achieve your career goals!
          </Typography>
          <Stack>
            <img className="about-img"
              src={aboutus}
              alt="img"
            />
          </Stack>
        </Stack>
        <Box mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}>
            Share with your friends
          </Typography>
          <Box className="icons">
          <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ fontSize: "40px", paddingLeft: "15px" }} color="primary" />
          </a>
          <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer">
            <FacebookOutlinedIcon sx={{ fontSize: "40px", paddingLeft: "15px" }} color="primary" />
          </a>
          <a href={whatsAppProfileUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={{ fontSize: "40px", paddingLeft: "15px" }} color="success" />
          </a>
          <a href={twitterProfileUrl} target="_blank" rel="noopener noreferrer">
            <TwitterIcon sx={{ fontSize: "40px", paddingLeft: "15px" }} color="info" />
          </a>
          <a href={emailProfileUrl} target="_blank" rel="noopener noreferrer">
            <EmailIcon sx={{ fontSize: "40px", paddingLeft: "15px" }} color="dark" />
          </a>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
