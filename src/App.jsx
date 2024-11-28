import { useState } from "react";
import Reviews from "./data"
import Person from "./components/person";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";


const App = () => {
  const [reviews, setReviews] = useState(Reviews);
  const [index, setIndex] = useState(0);

  return <div className="review">
    <Person review={reviews[index]} />
    <div className="btn-container">
      <FaLessThan className="prev-btn" onClick={() => { setIndex(Math.abs(reviews.length + index - 1) % reviews.length) }} />
      <FaGreaterThan className="next-btn" onClick={() => { setIndex((index + 1) % reviews.length) }} />
    </div>
    <button className="btn btn-block" onClick={() => { setIndex(Math.floor(Math.random() * reviews.length) + 0) }}>Surprise Me</button>
  </div >;
};
export default App;
