import React, { useState } from "react";
import "./image-experiment.css";

function ImageSetUp(props) {
  const [zoomInOut, setZoomInOut] = useState({
    height: props.height,
    width: props.width,
  });
  const [flag, setFlag] = useState(false);
  function handleZoomInOut() {
    let height = zoomInOut.height;
    let width = zoomInOut.width;
    if (height < 400 && !flag) {
      setZoomInOut({
        ...zoomInOut,
        height: parseInt(height) + 50,
        width: parseInt(width) + 50,
      });
    } else if (height > props.height) {
      setZoomInOut({
        ...zoomInOut,
        height: parseInt(height) - 50,
        width: parseInt(width) - 50,
      });
      setFlag(true);
    }
    if (height === parseInt(props.height) + 50) {
      setFlag(false);
    }
  }
  function handleMouseOut() {
    setZoomInOut({ ...zoomInOut, height: props.height, width: props.width });
  }

  return (
    <>
      <div id="hello">
        <img
          src={props.src}
          onClick={handleZoomInOut}
          height={zoomInOut.height}
          width={zoomInOut.width}
          id="targettedImage"
          onMouseOut={handleMouseOut}
        />
      </div>
    </>
  );
}

export default ImageSetUp;
