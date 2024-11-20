import React from "react";
import "./Banner.scss";

function Banner({ image, title }) {
  return (
    <div
      className={`banner ${title ? "with-title" : "without-title"}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {title && <h2 className="banner-title">{title}</h2>}
    </div>
  );
}

export default Banner;
