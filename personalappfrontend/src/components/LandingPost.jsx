import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

export default function LandingPost() {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        mt: "60px",
        gap: "50px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: {
            xs: "none",
            md: "block",
          },
          height: { md: "280px", lg: "350px" },
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: "100%", objectFit: "cover" }}
          image="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Live from space album cover"
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "20px",
          // padding: isMdOrLarger ? undefined : 0,
          border: {
            xs: "1.5px solid black",
            md: "none",
          },
          borderRadius: {
            xs: "5px",
            md: "none",
          },
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: {
              xs: "26px",
              sm: "28px",
              lg: "30px",
            },
            fontFamily: "Open Sans",
            fontWeight: "600",
          }}
        >
          Simple Ways To Inspire Your Inner Innovator
        </Typography>
        <Typography
          variant="p"
          color="text.secondary"
          component="p"
          sx={{
            fontFamily: "Open Sans",
            fontSize: {
              xs: "12px",
              sm: "14px",
              lg: "16px",
            },
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          commodi ullam inventore totam! Dicta mollitia aut ...
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "5px",
            color: "black",
            background: "#adb5bd",
            alignSelf: "flex-start",
            fontFamily: "Open Sans",
            ":hover": {
              backgroundColor: "black",
              color: "#e3e2e1",
            },
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
