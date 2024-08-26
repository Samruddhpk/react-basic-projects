import { useState } from "react";


const Tour = ({ id, image, name, info, price, removeTour }) => {
    const [isReadMore, setIsReadMore] = useState(false);

    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img"></img>
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {/* cut info */}
                    {isReadMore ? info : `${info.substring(0, 200)}...`}
                    {/* show btn */}
                    <button type="button" onClick={() => setIsReadMore(!isReadMore)} className="info-btn">
                        {isReadMore ? 'show less' : "read more"}
                    </button>

                </p>
                <button type="button" className="btn btn-block delete-btn" onClick={() => removeTour(id)}>
                    not interested
                </button>
            </div>
        </article>
    );
};

export default Tour;