import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, FormControl } from "react-bootstrap";

const Search = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <AiOutlinePlus onClick={() => setShow(true)} />
      {console.log("Nodeenv", process.env.NODE_ENV)}
      {console.log("apikey", process.env.API_KEY)}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-60w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <FormControl />
      </Modal>
    </>
  );
};
export default Search;
