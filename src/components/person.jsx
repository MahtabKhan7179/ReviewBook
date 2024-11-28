import { useState } from "react";
import { FaQuoteRight } from 'react-icons/fa';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

export default function Person({ reviews }) {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = reviews[index];

    return (<article className="review">
        <div className="img-container">
            <img className="person-img" src={image} alt="text" />
            <div className="quote-icon"><FaQuoteRight /></div>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
            <FaLessThan className="prev-btn" onClick={() => { setIndex(Math.abs(reviews.length + index - 1) % reviews.length) }} />
            <FaGreaterThan className="next-btn" onClick={() => { setIndex((index + 1) % reviews.length) }} />
        </div>
        <button className="btn btn-block" onClick={() => { setIndex(Math.floor(Math.random() * reviews.length) + 0) }}>Surprise Me</button>

    </article>);
}