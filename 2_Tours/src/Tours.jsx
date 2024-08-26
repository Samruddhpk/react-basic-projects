import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            {/* title */}
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>

            {/* tours */}
            <div className="tours">
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>

        </section>
    );
};

export default Tours;