import { Box, Chip, Typography } from "@mui/material";

export default function SideBar({ Heading, SubHeading }) {
  return (
    // <>
    //   <Box sx={{ marginTop: "50px" }}>
    //     <Typography
    //       component="h2"
    //       variant="h2"
    //       sx={{
    //         color: "gray",
    //         fontSize: "14px",
    //         fontWeight: 400,
    //         fontFamily: "Open Sans",
    //       }}
    //     >
    //       {"What's hot"}
    //     </Typography>
    //     <Typography
    //       component="h1"
    //       variant="h1"
    //       sx={{ fontSize: "22px", fontFamily: "Open Sans", fontWeight: 500 }}
    //     >
    //       Most Popular
    //     </Typography>

    //   </Box>

    <Box sx={{ mb: "60px" }}>
      <Typography
        sx={{ color: "#adb5bd", fontSize: "13px", fontFamily: "Open Sans" }}
      >
        What's hot
        <Typography
          sx={{ color: "black", fontWeight: "600", fontFamily: "Open Sans" }}
        >
          Most Popular
        </Typography>
      </Typography>
      <Box>
        <Box>
          <Chip
            size="small"
            sx={{ mt: "20px", mb: "8px", backgroundColor: "#ffbf69" }}
            label="Travel"
          />
          <Typography sx={{ fontSize: "16px" }}>
            A Journey Through Himalayan Beauty
          </Typography>
          <Typography
            sx={{
              fontSize: "11px",
              fontFamily: "Open Sans",
              fontWeight: "400",
            }}
          >
            Lovedeep -
            <Typography
              sx={{ fontSize: "11px", color: "#6c757d" }}
              component="span"
            >
              10.04.2024
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box>
          <Chip
            size="small"
            sx={{ mt: "20px", mb: "8px", backgroundColor: "#ffbf69" }}
            label="Travel"
          />
          <Typography sx={{ fontSize: "16px" }}>
            A Journey Through Himalayan Beauty
          </Typography>
          <Typography
            sx={{
              fontSize: "11px",
              fontFamily: "Open Sans",
              fontWeight: "400",
            }}
          >
            Lovedeep -
            <Typography
              sx={{ fontSize: "11px", color: "#6c757d" }}
              component="span"
            >
              10.04.2024
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box>
          <Chip
            size="small"
            sx={{ mt: "20px", mb: "8px", backgroundColor: "#ffbf69" }}
            label="Travel"
          />
          <Typography sx={{ fontSize: "16px" }}>
            A Journey Through Himalayan Beauty
          </Typography>
          <Typography
            sx={{
              fontSize: "11px",
              fontFamily: "Open Sans",
              fontWeight: "400",
            }}
          >
            Lovedeep -
            <Typography
              sx={{ fontSize: "11px", color: "#6c757d" }}
              component="span"
            >
              10.04.2024
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
    // </>
  );
}
