import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CssBaseline,
  InputAdornment,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import "../index.css";
// import Side from "../admin/Side";

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageNames, setImageNames] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    const newImageNames = files.map((file) => file.name);
    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    setImageNames((prevNames) => [...prevNames, ...newImageNames]);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageNames((prevNames) => prevNames.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mt: 4,
      }}
    >
      <CssBaseline />
      <Typography py={2} align="left" color="#fff" variant="h6" gutterBottom>
        Pongal Image
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        value={imageNames.join(", ")}
        placeholder="Choose images..."
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="body1"
                component="label"
                sx={{
                  backgroundColor: "#014550 !important",
                  color: "#fff !important",
                  borderRadius: "0px !important",
                  "&:hover": {
                    backgroundColor: "#01343b !important",
                  },
                }}
              >
                Browse
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />
      {selectedImages.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {selectedImages.map((image, index) => (
            <Card key={index} sx={{ maxWidth: 150, position: "relative" }}>
              <CardMedia
                component="img"
                sx={{
                  height: 150,
                  objectFit: "cover",
                }}
                image={image}
                alt={`Selected ${index}`}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {imageNames[index]}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "grey.200" },
                  }}
                  onClick={() => handleRemoveImage(index)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ImageUpload;
