import { Card } from "react-bootstrap";
import { format } from "date-fns";

const Hourly = ({ hourly }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>name of city as a prop from search</Card.Title>
        {hourly.map((hour) => (
          <>
            <div className="d-flex justify-content-between">
              <div>
                <span>
                  {new Date(hour.dt * 1000).getHours()}:00{" "}
                  {format(new Date(hour.dt * 1000), "MM/dd/yyyy")}
                </span>
                <div>
                  <img
                    src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <span>{hour.weather[0].description}</span>
                </div>
              </div>
              <span>{hour.temp}&deg;</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex flex-column text-left">
                <span>Humidity:{hour.humidity}%</span>
                <span>Cloudiness:{hour.clouds}%</span>
                <span>visibility:{(hour.visibility / 1000).toFixed()}Km</span>
                <span>Wind speed:{hour.wind_speed}Km/h </span>
              </div>
              <div className="d-flex flex-column text-left">
                <span>Dew point:{hour.dew_point}</span>
                <span>Condition:{hour.weather[0].main}</span>
                <span>UV index: {hour.uvi}</span>
                <span>Pressure:{hour.pressure} mbar</span>
              </div>
            </div>
            <hr style={{ borderRadius: "2px red solid" }} />
          </>
        ))}
      </Card.Body>
    </Card>
  );
};
export default Hourly;
