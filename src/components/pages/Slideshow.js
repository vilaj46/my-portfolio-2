import React from "react";

export default function Slideshow({ images }) {
  const [index, setIndex] = React.useState(0);

  const onClick = (direction) => {
    if (direction === -1) {
      // Left
      if (index + direction < 0) {
        setIndex(images.length - 1);
      } else {
        setIndex(index + direction);
      }
    } else {
      // Right
      if (index + direction === images.length) {
        setIndex(0);
      } else {
        setIndex(index + direction);
      }
    }
  };

  return (
    <div className="flex w-8/12">
      <LeftButton onClick={onClick} />
      <div className="flex flex-col items-center">
        <img src={images[index].src} alt={images[index].alt} />
        <Circles index={index} images={images} />
      </div>
      <RightButton onClick={onClick} />
    </div>
  );
}

const Circles = ({ images, index }) => {
  return (
    <div className="flex">
      {images.map((img, position) => {
        return <Circle index={index} position={position} key={position} />;
      })}
    </div>
  );
};

const Circle = ({ index, position }) => {
  if (index === position) {
    return <div className="bg-lightGray h-3 w-3 rounded-full"></div>;
  } else {
    return <div className="bg-gray h-3 w-3 rounded-full"></div>;
  }
};

const LeftButton = ({ onClick }) => {
  return (
    <button type="text" onClick={() => onClick(-1)}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
      </svg>
    </button>
  );
};

const RightButton = ({ onClick }) => {
  return (
    <button type="text" onClick={() => onClick(1)}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>{" "}
      </svg>
    </button>
  );
};
