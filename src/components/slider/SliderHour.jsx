import { Component } from "react";

import { IoIosPartlySunny } from "react-icons/io";

import { WiHumidity } from "react-icons/wi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

class SliderHour extends Component {
  render() {
    return (
      <>
        <span>Hour</span>
        <Carousel responsive={responsive} className=" border-top mt-4">
          {this.props.hourly.map((time, i) => (
            <div className="d-flex flex-column bg-transparent" key={1 + i}>
              <span>{new Date(time.dt * 1000).getHours()}:00</span>
              <div>
                <img
                  className="mt-n3"
                  src={`http://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <span className="mt-n4">
                <WiHumidity />
                {time.humidity}%
              </span>
            </div>
          ))}
        </Carousel>
        <span className="">more..</span>
      </>
    );
  }
}
export default SliderHour;
