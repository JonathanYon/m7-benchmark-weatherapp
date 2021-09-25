import { Card } from "react-bootstrap";

const GeneralDay = ({ data }) => {
  return (
    <Card className="d-flex flex-row justify-content-around bg-transparent mt-4">
      <div className=" align-self-center">
        <img
          src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <div className="text-left">
        <div>Dew point:{data.current.dew_point}</div>
        <div>Condition:{data.current.weather[0].main}</div>
        <div>UV index: {data.current.uvi}</div>
        <div>Pressure:{data.current.pressure} mbar</div>
        <div>Humidity:{data.current.humidity}%</div>
        <div>Cloudiness:{data.current.clouds}%</div>
        <div>visibility:{(data.current.visibility / 1000).toFixed()}Km</div>
        <div>Wind speed:{data.current.wind_speed}Km/h </div>
      </div>
    </Card>
  );
};
export default GeneralDay;
