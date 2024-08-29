import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ImageIcon from "@mui/icons-material/Image";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import "../globals.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { getCategories } from "../service/CategoryService";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        console.log(categoriesData);
        setCategories(categoriesData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ mt: "30px" }}>
      <InputBase
        placeholder="Title"
        fullWidth
        sx={{ fontSize: "26px", ml: "40px" }}
      />
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, ml: "40px" }}
        size="small"
      >
        <InputLabel id="demo-select-small-label">Category</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={category}
          label="Category"
          onChange={handleCategory}
        >
          {categories.length > 0 &&
            categories.map((cat) => (
              <MenuItem key={cat.id || cat.name} value={cat.name}>
                {cat.name}
              </MenuItem>
            ))}
          {/* <MenuItem value={"Travel"}>Travel</MenuItem>
          <MenuItem value={"Programming"}>Programming</MenuItem>
          <MenuItem value={"Health & Fitness"}>Health & Fitness</MenuItem>
          <MenuItem value={"Personal Finance"}>Personal Finance</MenuItem>
          <MenuItem value={"Lifestyle"}>Lifestyle</MenuItem>
          <MenuItem value={"Culture"}>Culture</MenuItem> */}
        </Select>
      </FormControl>
      <Box
        sx={{ display: "flex", mr: "10px", alignItems: "center", mt: "24px" }}
      >
        <IconButton onClick={() => setOpen(!open)}>
          <AddCircleOutlineRoundedIcon sx={{ fontSize: "34px" }} />
        </IconButton>
        {open && (
          <Box>
            <IconButton>
              <ImageIcon
                sx={{
                  fontSize: "22px",
                  color: "#40916c",
                  border: "1px solid #40916c",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </IconButton>
            <IconButton>
              <UploadFileIcon
                sx={{
                  fontSize: "22px",
                  color: "#40916c",
                  border: "1px solid #40916c",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </IconButton>
            <IconButton>
              <SlideshowIcon
                sx={{
                  fontSize: "22px",
                  color: "#40916c",
                  border: "1px solid #40916c",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </IconButton>
          </Box>
        )}
      </Box>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell Your Story"
      />
      <Button
        sx={{ position: "absolute", top: "25px", right: "20px" }}
        color="success"
        variant="outlined"
        size="small"
      >
        Publish
      </Button>
    </Box>
  );
};

export default WritePage;
