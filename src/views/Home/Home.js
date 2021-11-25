import React from "react";
import "./Home.scss";
import { Carousel } from "antd";

export const Home = () => {
  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="home">
      <Carousel autoplay>
        <div>
          <img
            style={contentStyle}
            src="https://c4.wallpaperflare.com/wallpaper/963/985/309/kobe-bryant-wallpaper-preview.jpg"
            alt="kobe"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://images.hdqwalls.com/download/black-panther-and-kobe-bryant-15-2560x1080.jpg"
            alt="kobe"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
