import React, { useState } from 'react';
import { Card, CardMedia, CardContent, IconButton, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ForwardIcon from '@mui/icons-material/Forward';
import diwaliImage from '../assets/img8.jpg';
import smallImage1 from '../assets/img10.jpg';
import smallImage2 from '../assets/img11.jpg';
import smallImage3 from '../assets/img12.jpg';
import smallImage4 from '../assets/img13.jpg';
import pongalImage from "../assets/pongal ststus 1.png"
import pongalImage1 from '../assets/pongal ststus 2.png';
import pongalImage2 from '../assets/pongal ststus 3.png';
import pongalImage3 from '../assets/pongal ststus 4.png';
import pongalImage5 from '../assets/pongal ststus 5.png';
import pongalImage6 from '../assets/pongal ststus 6.png';
import Sidebar from '../component/Sidebar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Element, scroller } from 'react-scroll';
import Status from "../assets/ststus advertisment.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Dashbaord = () => {
  const [mainImage, setMainImage] = useState(diwaliImage);
  const [mainImage2, setMainImage2] = useState(pongalImage);
  // const [showTextImage, setShowTextImage] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);


  const handleImageClick = (newImage) => {
    setMainImage(newImage);
    // setShowTextImage(false);
  };

  const handleImageClick2 = (newImage2) => {
    setMainImage2(newImage2);
    // setShowTextImage(true);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };



  const handleNextSlide = () => {
    if (sliderIndex < smallImages2.length - 4) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    }
  };

  const smallImages = [smallImage1, smallImage2, smallImage3, smallImage4];
  const smallImages2 = [pongalImage1, pongalImage2, pongalImage3, pongalImage5, pongalImage6];

  return (
    <>
      <Sidebar scrollToSection={scrollToSection} />
      <Element name="diwali-section">
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3, flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{ width: 300, height: 550, marginTop: '-20px' }}>
            <CardMedia
              component="img"
              alt="Diwali"
              image={mainImage}
              title="Diwali"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Card>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
            <IconButton sx={{ color: "black" }} aria-label="download">
              <DownloadIcon />
            </IconButton>
            <IconButton sx={{ color: "green" }} aria-label="share">
              <WhatsAppIcon />
            </IconButton>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            {smallImages.map((smallImage, index) => (
              <Card key={index} sx={{ width: 200, height: 350, margin: 1, cursor: 'pointer' }}>
                <CardMedia
                  component="img"
                  alt={`small-image-${index}`}
                  image={smallImage}
                  title={`small-image-${index}`}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onClick={() => handleImageClick(smallImage)}

                />
              </Card>
            ))}
          </Box>
        </Box>
      </Element>


      <Element name="pongal-section">
        <Box sx={{width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', padding: 3, flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          <Card sx={{ width: '100%', maxWidth: 300, height: 600, marginTop: '-20px', position: 'relative' }}>
            <CardMedia
              component="img"
              alt="pongal"
              image={mainImage2}
              title="pongal"
              sx={{ width: '100%', height: 550, objectFit: 'cover' }}
            />
             <CardMedia
              component="img"
              alt="Kantha Jewellers"
              image={Status}
              title="Kantha Jewellers"
              sx={{ width: '100%', height: '50%', objectFit: 'contain', position: 'absolute', bottom: 0 }}
            />
            {/* {showTextImage && (
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>
                <img src={Status} alt="Kantha Jewellers" style={{ width: '100%', height: 'auto' }} />
              </Box>
            )} */}
          </Card>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
            <IconButton sx={{ color: "black" }} aria-label="download">
              <DownloadIcon />
            </IconButton>
            <IconButton sx={{ color: "green" }} aria-label="share">
              <WhatsAppIcon />
            </IconButton>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <IconButton onClick={handlePrevSlide} disabled={sliderIndex === 0} sx={{ fontSize: 30 }}>
              <ArrowBackIosNewIcon  sx={{ fontSize: 60 }} />
              {/* Previous slide icon */}
            </IconButton>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            {smallImages2.slice(sliderIndex, sliderIndex + 4).map((smallImage2, index2) => (
              <Card key={index2} sx={{ width: 200, height: 250, margin: 1, cursor: 'pointer' }}>
                <CardMedia
                  component="img"
                  alt={`small-images-${index2}`}
                  image={smallImage2}
                  title={`small-images-${index2}`}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onClick={() => handleImageClick2(smallImage2)}
                />
              </Card>
            ))}
          </Box>
         
            <IconButton onClick={handleNextSlide} disabled={sliderIndex >= smallImages2.length - 4} sx={{ fontSize: 30 }}>
              <ArrowForwardIosIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Box>
        </Box>
      </Element>
    </>
  );
};

export default Dashbaord;
