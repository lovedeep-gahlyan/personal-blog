import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";

export default function BlogPost() {
  const isSmallSize = useMediaQuery("(max-width:760px)");

  return (
    <>
      <Typography sx={{ fontSize: "22px", fontWeight: 500 }}>
        Recent Posts
      </Typography>
      <Card
        elevation={0}
        sx={{
          display: "flex",
          gap: "50px",
          marginBottom: "50px",
          alignItems: "center",
          mt: "30px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "250px",
            display: {
              xs: "none",
              sm: isSmallSize ? "none" : "block",
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{ objectFit: "cover", height: "100%" }}
            image="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Live from space album cover"
          />
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>
            2024-05-08 -{" "}
            <Typography
              component="span"
              sx={{ fontSize: "12px", color: "#d1105a" }}
            >
              PROGRAMMING
            </Typography>
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              fontFamily: "Open Sans",
              // fontWeight: "500",
              fontWeight: "600",
            }}
          >
            Simple Ways To Inspire Your Inner Innovator
          </Typography>
          <Typography
            variant="p"
            color="text.secondary"
            component="p"
            sx={{ fontFamily: "Open Sans", fontSize: "11px" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            commodi ullam inventore totam! Dicta mollitia aut ...
          </Typography>
          <Link
            sx={{
              fontFamily: "Open Sans",
              color: "black",
              borderBottom: "1px solid #d1105a",
              paddingBottom: "2px",
              width: "max-content",
              textAlign: "center",
              ":hover": {
                borderBottom: "2px solid #d1105a",
                fontWeight: "600",
              },
            }}
            href="#"
            underline="none"
          >
            Read More
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
