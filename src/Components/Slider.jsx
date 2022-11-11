import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Img , Text } from "@chakra-ui/react";



export function SliderKatrina(props) {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // console.log(data, "sliderTOpCompanies")
  return (
    <div style={{ width: "76%", padding: "30px", margin: "auto" }} >
      <Slider {...settings}>
        {data && data.map((item) => {
          return <Container centerContent overflow={"hidden"} maxW={"fit-content"} key={item.title}>
            <Box >
              <Img width={"100%"} src={item.image} alt={item.alt} />
            </Box>
          </Container>
        })}
      </Slider >
    </ div >
  );
}