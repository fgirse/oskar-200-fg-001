import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Image from "next/image";

import carouselStyle from'/css/carouselStyle';
const useStyles = makeStyles(carouselStyle);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                <div>
                  <Image src="/Impress01.jpg" width="220" height="165" layout="responsive"  alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Impressionen Rettungsanker-Sportarena
                    </h4>
                  </div>
                </div>
                <div>
                  <Image
                    src="/Impress02.jpg"
                    alt="Second slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                       Impressionen Rettungsanker
                    </h4>
                  </div>
                </div>
                <div>
                  <Image 
                      src="/Impress03.jpg"
                       alt="Third slide" 
                       height="160"
                       layout="responsive"
                className="slick-image"
                       />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Impressionen Rettungsanker
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}