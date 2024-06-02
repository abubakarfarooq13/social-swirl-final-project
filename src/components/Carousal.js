import React from "react";
import { Carousel } from "flowbite-react";
const Carousal = () => {
  return (
    <div className="h-96 mt-4   px-2">
      <Carousel>
        <img
          src="https://gnnhd.tv/media/96264/conversions/Best-camera-phones-in-Pakistan-1280x720.webp"
          alt="..."
        />
        <img
          src="https://cdn.ca.emap.com/wp-content/uploads/sites/6/2019/09/clothes-1024x681.jpg"
          alt="..."
        />
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/77/88/12/1000_F_277881280_UQrIzCcrYYhsDZeVgWMDeTlkXeBcbJZv.jpg"
          alt="..."
        />
        <img
          src="https://media.glamourmagazine.co.uk/photos/641340f071829d00edcebd51/16:9/w_1280,c_limit/Fragrance%20week.jpg"
          alt="..."
        />
        <img
          src="https://d1nymbkeomeoqg.cloudfront.net/photos/28/60/407515_12136_XL.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Carousal;
