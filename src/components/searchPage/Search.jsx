import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, FormControl } from "react-bootstrap";

const Search = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(undefined);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=678b131125c510fd6d8c5158e03f8e33`
        );
        if (response.ok) {
          const res = await response.json();
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
    </>
  );
};
export default Search;
