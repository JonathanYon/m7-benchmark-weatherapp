import { Card } from "react-bootstrap";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";

const Temprature = ({ data }) => {
  return (
    <Card className="mx-2 mt-4 bg-transparent">
      <Card.Body>
        <Card.Title>{data.main.temp.toFixed()}&deg;</Card.Title>
        {data.weather.map((info) => (
          <Card.Subtitle className="mb-2 text-muted" key={info.id}>
            {info.description}
          </Card.Subtitle>
        ))}
        <Card.Text>
          Feels like {data.main.feels_like.toFixed()}&deg;{" "}
          <HiOutlineArrowNarrowUp /> {data.main.temp_max.toFixed()}&deg;{" "}
          <HiOutlineArrowNarrowDown /> {data.main.temp_min.toFixed()}&deg;
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Temprature;
