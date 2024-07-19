import Accordion from "./Accordion";
import data from "../Data.json";

const Faq = () => {
  return (
    <div>
      <h1>FAQ</h1>
      {data.map((value, index) => (
        <Accordion key={index} data={value} />
      ))}
    </div>
  );
};

export default Faq;
