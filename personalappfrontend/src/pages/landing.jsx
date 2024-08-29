import { Box, Container, Grid, Typography } from "@mui/material";
import CategoryList from "../components/Category";
import LandingPost from "../components/LandingPost";
import BlogPost from "../components/BlogPost";
import SideBar from "../components/SideBar";

const LandingPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        <Box sx={{ mt: "10px" }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "28px", sm: "34px", md: "42px", lg: "50px" },
              fontFamily: "Open Sans",
              fontWeight: 400,
            }}
          >
            <Typography variant="b" component="b">
              Hey, Lovedeep Here!{" "}
            </Typography>
            Discover my stories and creative ideas.
          </Typography>
        </Box>
      </Box>
      <LandingPost />
      <CategoryList />
      <Grid container direction="row">
        <Grid item xs="12" sm="12" md="9">
          <BlogPost />
        </Grid>
        <Grid item md="3">
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
