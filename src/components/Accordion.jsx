/* eslint-disable react/prop-types */

import { useState } from "react";

const Accordion = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="faqContainer">
        <h2 className="flex">
          {data.question}
          <span onClick={handleToggle}>{toggle ? "-" : "+"}</span>
        </h2>
        <p>{toggle ? data.answer : ""}</p>
      </div>
    </div>
  );
};

export default Accordion;
