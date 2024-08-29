import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryCard = ({ bg, text }) => {
  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  const isMediumScreen = useMediaQuery("(min-width:768px)");

  return (
    <Box
      sx={{
        color: "black",
        backgroundColor: `${bg}`,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
        width: {
          xs: "100%",
          sm: isMediumScreen ? "45%" : "40%",
          md: isLargeScreen ? "25%" : "20%",
          lg: "15%",
        },
        justifyContent: "center",
        height: "60px",
        textTransform: "capitalize",
      }}
    >
      <Link to={`/blog?cat=${text}`}>
        <Typography sx={{ fontSize: "12px" }}>{text}</Typography>
      </Link>
    </Box>
  );
};

export default function CategoryList() {
  return (
    <Box sx={{ mt: "50px" }}>
      <Typography sx={{ fontWeight: "500", fontSize: "22px" }}>
        Popular Categories
      </Typography>
      <Stack
        direction="row"
        gap="20px"
        justifyContent="space-between"
        my="35px"
        flexWrap="wrap"
      >
        <CategoryCard bg="#ff9b85" text="Travel" />
        <CategoryCard bg="#cddafd" text="Programming" />
        <CategoryCard bg="#c1dbb3" text="Health & Fitness" />
        <CategoryCard bg="#feeafa" text="LifeStyle" />
        <CategoryCard bg="#faf0ca" text="Personal Finance" />
        <CategoryCard bg="#fec5bb" text="Culture" />
      </Stack>
    </Box>
  );
}
