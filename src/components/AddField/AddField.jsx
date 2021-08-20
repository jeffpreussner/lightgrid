import { useState } from "react";
import { string, func } from "prop-types";
import Btn from "../Btn/Btn";

const propTypes = {
  btnText: string,
  groupId: string,
  handleSubmit: func,
};

const AddField = (props) => {
  const { btnText, groupId, handleSubmit } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [val, setVal] = useState("");

  return !isOpen ? (
    <Btn classes="btn--secondary" onClick={(e) => setIsOpen(true)}>
      {btnText}
    </Btn>
  ) : (
    <>
      <label>
        --variable-name
        <input
          onKeyPress={(e) => setName(e.target.value)}
          placeholder="--variable-name"
        />
      </label>
      <label>
        default value
        <input
          onKeyPress={(e) => setVal(e.target.value)}
          placeholder="default value"
        />
      </label>
      <Btn
        classes="btn--secondary"
        onClick={(e) => handleSubmit(e, groupId, name, val)}
      >
        Done
      </Btn>
    </>
  );
};

AddField.propTypes = propTypes;
export default AddField;
