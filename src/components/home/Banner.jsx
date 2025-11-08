import React from 'react';
import bannerImage from "../../assets/banner.webp";

const Banner = () => {
  return (
 <div className="w-full h-48 md:h-72 lg:h-96 relative rounded-lg overflow-hidden">
  <img
    src={bannerImage}
    alt="Banner"
    className="w-full h-full object-contain"
  />
</div>

  );
};

export default Banner;