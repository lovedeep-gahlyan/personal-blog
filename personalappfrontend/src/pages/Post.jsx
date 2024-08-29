import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

export default function PostPage() {
  return (
    <Container>
      <Grid container alignItems={"center"} columnSpacing={2}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ marginBottom: { xs: "30px", md: "0px" } }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: "600",
              fontSize: {
                xs: "26px",
                sm: "30px",
                md: "30px",
                lg: "34px",
              },
              fontFamily: "Open Sans",
            }}
          >
            Easiest Way For React State Management
          </Typography>
          <Box sx={{ display: "flex", mt: "24px", alignItems: "center" }}>
            <Avatar
              sx={{ height: { sm: "32px" }, width: { sm: "32px" } }}
              alt="Remy Sharp"
              src="https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg"
            />
            <Box sx={{ ml: "10px" }}>
              <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                Lovedeep
              </Typography>
              <Typography sx={{ fontSize: { xs: "11px", md: "12px" } }}>
                09.05.2024
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            overflow: "hidden",
            height: {
              md: "300px",
              lg: "350px",
            },
          }}
          item
          xs={10}
          sm={8}
          md={5}
        >
          <img
            style={{
              maxWidth: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Grid>
      </Grid>
      <Grid container columnSpacing={3} sx={{ mt: "50px" }}>
        <Grid item xs="12" md="9">
          <Typography
            component="p"
            sx={{ textAlign: "justify", maxWidth: "95%", fontSize: "16px" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            deserunt eveniet quo amet assumenda ut officiis illo nemo, beatae
            in, veritatis, voluptatem magnam ullam dolore quos tenetur sed
            aliquid officia natus esse itaque. Ad reiciendis fuga rerum, odit
            nesciunt laudantium dolorum praesentium enim ducimus nisi animi
            exercitationem facilis corrupti repellendus accusantium sapiente
            commodi blanditiis nemo veritatis sed. Officia nobis illo tempora
            voluptates ea hic placeat omnis soluta vitae quod quaerat, numquam
            inventore autem architecto sint consectetur non natus ex aspernatur
            quis dignissimos quasi laudantium ipsum eos! Qui nisi tempore enim
            commodi molestiae, corporis minima, labore id eius placeat est
            quisquam?
          </Typography>
          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "22px",
                },
                fontFamily: "Open Sans",
                fontWeight: "500",
                mt: "80px",
              }}
            >
              Comments
            </Typography>
            <Link
              style={{
                fontFamily: "Open Sans",
                display: "inline-block",
                marginTop: "20px",
                borderBottom: "2px solid black",
                paddingBottom: "5px",
              }}
              to="/login"
            >
              Login To Write a Comment
            </Link>
          </Box>
        </Grid>
        <Grid item md="3" sx={{ marginTop: { xs: "40px", md: "0px" } }}>
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
}
