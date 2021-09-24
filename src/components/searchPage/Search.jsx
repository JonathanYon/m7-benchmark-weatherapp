import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, FormControl } from "react-bootstrap";
import Temprature from "../temperatur/Temprature";
import SliderHour from "../slider/SliderHour";
import { format } from "date-fns";
import { Card } from "react-bootstrap";
import Hourly from "../temperatur/Hourly";
import SliderDay from "../slider/SliderDay";

const Search = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(undefined);
  const [query, setQuery] = useState("");
  const [hourly, setHourly] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=678b131125c510fd6d8c5158e03f8e33&units=metric` //const units = metric || imperial
        );
        if (response.ok) {
          const res = await response.json();
          hourlyData(res.coord.lon, res.coord.lon);
          console.log("in fetch", res.name);
          setData(res);
        } else {
          console.log("error in search fetch");
        }
      } catch (error) {
        console.log("catcha", error);
      }
    };
    fetchData();

    const hourlyData = async (lon, lat) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=678b131125c510fd6d8c5158e03f8e33&units=metric` //const units = metric || imperial
        );
        if (response.ok) {
          const res = await response.json();
          console.log("hourly", res);
          setHourly(res);
        } else {
          console.log("error in hourly fetch");
        }
      } catch (error) {
        console.log(error);
      }
    };
  }, [query]);

  return (
    <>
      <AiOutlinePlus onClick={() => setShow(true)} />
      {console.log("apikey", process.env.API_KEY)}
      {console.log("data", data)}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-60w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <FormControl value={query} onChange={(e) => setQuery(e.target.value)} />
      </Modal>
      <Card style={{ width: "95vw" }} className="mx-2">
        <Card.Body>
          {data && (
            <Card.Text>
              {data.name},{data.sys.country}
              {format(new Date(data.dt * 1000), " ccc hh:mm aaa")}
            </Card.Text>
          )}
          {data && (
            <span>
              {data.main.temp.toFixed()}&deg;, {data.weather[0].description}
            </span>
          )}
        </Card.Body>
      </Card>

      {data && <Temprature data={data} />}

      {hourly && <SliderHour hourly={hourly} />}
      {/* {hourly && <Hourly hourly={hourly.hourly} />} */}
      {hourly && <SliderDay daily={hourly.daily} />}
    </>
  );
};
export default Search;
