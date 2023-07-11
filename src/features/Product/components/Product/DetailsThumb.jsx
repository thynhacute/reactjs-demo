import React from "react";
import "./modals.scss";

function DetailsThumb({ images, tab, myRef }) {
  return (
    <div className="thumb" ref={myRef}>
      {images?.map((img) => {
        if (img.endsWith(".mp4")) {
          return (
            <video
              key={img}
              src={img}
              alt=""
              onClick={() => tab(images.indexOf(img))}
              controls
              // autoPlay
              loop
            />
          );
        } else {
          return (
            <img
              key={img}
              src={img}
              alt=""
              onClick={() => tab(images.indexOf(img))}
            />
          );
        }
      })}
    </div>
  );
}

export default DetailsThumb;
