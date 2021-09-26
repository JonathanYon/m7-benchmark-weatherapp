import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { format } from "date-fns";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const SliderDay = ({ daily }) => {
  return (
    <>
      <span>Daily</span>
      <Carousel
        responsive={responsive}
        className="bg-transparent mt-4 border-top"
      >
        {daily.map((time, i) => (
          <>
            <div className="d-flex flex-column " key={1 + i}>
              <span>{format(new Date(time.dt * 1000), "ccc")}</span>
              <div>
                <img
                  className="mt-n3"
                  src={`http://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <span className="mt-n4 ">
                <WiHumidity />
                {time.humidity}%
              </span>
              <div className="my-4 d-flex flex-column">
                <span>{time.temp.max.toFixed()}%</span>
                <span>
                  <FaTemperatureHigh style={{ fontSize: "30px" }} />
                </span>
                <span>{time.temp.min.toFixed()}%</span>
              </div>
            </div>
          </>
        ))}
      </Carousel>
    </>
  );
};
export default SliderDay;
