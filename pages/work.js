import React from "react";

import Head from "next/head";

import "../assets/carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Spring } from "react-spring/renderprops.cjs";

import pobu from "../assets/screenshots/pobu.png";
import mashup from "../assets/screenshots/mashup.png";
import cineo from "../assets/screenshots/cineo.png";
import weather from "../assets/screenshots/weather.png";

import { BrowserView, MobileView } from "react-device-detect";

const Work = () => {
  return (
    <>
      <Head>
        <title>Who is Okan? - Work</title>
      </Head>

      <Spring
        from={{ opacity: 0, transform: "scale(0.75)" }}
        to={{ opacity: 1, transform: "scale(1)" }}
      >
        {props => (
          <div
            style={{
              ...props,
              // width: "34%",
              // margin: "auto",
              // padding: "3.3vmin",
              overflow: "hidden"
            }}
          >
            <center>
              <BrowserView
                style={{
                  width: "34%"
                }}
              >
                <Carousel emulateTouch autoPlay infiniteLoop>
                  <>
                    <img
                      src={pobu}
                      style={{
                        objectFit: "cover"
                      }}
                      alt=""
                    />
                    <p className="legend">
                      <a
                        href="https://pobu.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>https://pobu.io/</b>
                      </a>
                    </p>
                  </>

                  <>
                    <img
                      src={mashup}
                      style={{
                        objectFit: "cover"
                      }}
                      alt=""
                    />
                    <p className="legend">
                      <a
                        href="https://mashup.okasi.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>https://mashup.okasi.me/</b>
                      </a>
                    </p>
                  </>
                  <>
                    <img
                      src={cineo}
                      style={{
                        objectFit: "cover"
                      }}
                      alt=""
                    />
                    <p className="legend">
                      <a
                        href="https://cineo.okasi.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>https://cineo.okasi.me/</b>
                      </a>
                    </p>
                  </>
                  <>
                    <img
                      src={weather}
                      style={{
                        objectFit: "cover"
                      }}
                      alt=""
                    />
                    <p className="legend">
                      <a
                        href="https://weather.okasi.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>https://weather.okasi.me/</b>
                      </a>
                    </p>
                  </>
                </Carousel>
              </BrowserView>
            </center>
            <MobileView>
              <div
                style={{
                  background: "#595990",
                  width: "57.2vmin",
                  margin: "auto",
                  padding: "3.3vmin",
                  overflow: "overlay"
                }}
              >
                <center>
                  <ul
                    style={{
                      fontSize: "calc(0.75vw + 0.75vh + 0.375vmin)",
                      lineHeight: "1.75",
                      padding: "0 calc(0.1vw + 0.1vh + 0.05vmin)",
                      listStyleType: "none"
                    }}
                  >
                    <li>
                      <a
                        href="https://pobu.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "white",
                          textDecoration: "none"
                        }}
                      >
                        ➟ Pobu (React + Node.js + MongoDB)
                      </a>
                    </li>

                    <br />

                    <li>
                      <a
                        href="https://mashup.okasi.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "white",
                          textDecoration: "none"
                        }}
                      >
                        ➟ API Mashup (JavaScript)
                      </a>
                    </li>

                    <br />

                    <li>
                      <a
                        href="https://cineo.okasi.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "white",
                          textDecoration: "none"
                        }}
                      >
                        ➟ Cineo (Laravel + MySQL)
                      </a>
                    </li>

                    <br />

                    <li>
                      <a
                        href="https://weather.okasi.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "white",
                          textDecoration: "none"
                        }}
                      >
                        ➟ Weather App (React)
                      </a>
                    </li>
                  </ul>
                </center>
              </div>
            </MobileView>
          </div>
        )}
      </Spring>
    </>
  );
};

export default Work;