import { FaQuoteRight } from 'react-icons/fa';

export default function Person({ review }) {
    const { id, name, job, image, text } = review;
    return (<article>
        <div className="img-container">
            <img className="person-img" src={image} alt="text" />
            <div className="quote-icon"><FaQuoteRight /></div>
        </div>
        <div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
        </div>
    </article>);
}