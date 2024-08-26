const Alternative = () => {


    const [index, setIndex] = useState(0);

    const { name, job, image, text } = people[index];


    // using modulus op for functionalities
    // console.log(1 % 4);
    // console.log(2 % 4);
    // console.log(3 % 4);
    // console.log(4 % 4);
    // console.log(10 % 4);

    const nextPerson = () => {
        setIndex((currentIndex) => {
            const newIndex = (currentIndex + 1) % people.length;
            return newIndex;
        });
    };
    const prevPerson = () => {
        setIndex((currentIndex) => {
            const newIndex = (currentIndex - 1 + people.length) % people.length;
            return newIndex;
        });
    };


    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) { randomNumber = index + 1; }
        const newIndex = randomNumber % people.length;
        setIndex(newIndex);
    };

    return (
        <main>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>

                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>

                <div className="btn-container">
                    <button className="prev-btn" type="button" onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>

                    <button className="next-btn" type="button" onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className="btn btn-hipster" onClick={randomPerson}>surprise me</button>
            </article>
        </main >
    );
};
export default Alternative;