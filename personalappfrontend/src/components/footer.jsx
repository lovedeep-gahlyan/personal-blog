import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Link,
  Typography,
  styled,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const StyledSocialIcon = styled(IconButton)({
  padding: "0px",
});

const StyledLink = styled(Link)({
  color: "#6c757d",
});

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        bottom: "0px",
        mt: "80px",
        mb: "20px",
        rowGap: "20px",
        // flexDirection: {
        //   sm: "column",
        //   md: "row",
        // },
      }}
      alignItems={"center"}
    >
      <Grid item xs={12} sm={12} md={9}>
        <Box sx={{ display: "flex", mt: "24px", alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg"
          />
          <Typography sx={{ fontSize: "14px", ml: "14px" }}>
            Lovedeep
          </Typography>
        </Box>
        <Typography
          component="p"
          sx={{
            my: "20px",
            fontFamily: "Open Sans",
            fontSize: "12px",
            width: "80%",
            color: "#6c757d",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          dolorum? Nisi, voluptatem architecto. Labore, quod magnam odio numquam
          vero maxime, a ratione unde placeat quibusdam deserunt soluta.
          Facilis, doloribus alias?
        </Typography>
        <Box sx={{ width: "350px" }}>
          <StyledSocialIcon component="a">
            <InstagramIcon sx={{ fontSize: "18px" }} htmlColor="#f01a50" />
          </StyledSocialIcon>
          <StyledSocialIcon component="a">
            <LinkedInIcon
              sx={{ fontSize: "18px", mx: "10px" }}
              htmlColor="blue"
            />
          </StyledSocialIcon>
          <StyledSocialIcon component="a">
            <XIcon sx={{ fontSize: "18px", mr: "10px" }} htmlColor="black" />
          </StyledSocialIcon>
          <StyledSocialIcon component="a">
            <YouTubeIcon sx={{ fontSize: "20px" }} htmlColor="#e30211" />
          </StyledSocialIcon>
        </Box>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={3}
        columnSpacing={5}
        sx={{ fontSize: "12px", fontFamily: "Open Sans" }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography>Links</Typography>
            <StyledLink href="#" underline="none">
              Homepage
            </StyledLink>
            <StyledLink href="#" underline="none">
              Blog
            </StyledLink>
            <StyledLink href="#" underline="none">
              About
            </StyledLink>
            <StyledLink href="#" underline="none">
              Contact
            </StyledLink>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography>Tags</Typography>
            <StyledLink href="#" underline="none">
              Homepage
            </StyledLink>
            <StyledLink href="#" underline="none">
              Blog
            </StyledLink>
            <StyledLink href="#" underline="none">
              About
            </StyledLink>
            <StyledLink href="#" underline="none">
              Contact
            </StyledLink>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography>Social</Typography>
            <StyledLink href="#" underline="none">
              Homepage
            </StyledLink>
            <StyledLink href="#" underline="none">
              Blog
            </StyledLink>
            <StyledLink href="#" underline="none">
              About
            </StyledLink>
            <StyledLink href="#" underline="none">
              Contact
            </StyledLink>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
