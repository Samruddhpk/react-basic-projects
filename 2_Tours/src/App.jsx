import { useEffect, useState } from "react";
const url = 'https://www.course-api.com/react-tours-project';
import Loading from "./Loading";
import Tours from "./Tours";


const App = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // remove Tours
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };


    // fetch
    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setIsLoading(false);
            setTours(data);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    // use effect
    useEffect(() => {
        fetchTours();
    }, []);


    // loading condition
    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>);
    }

    // no tours left condition
    if (tours.length === 0) {
        return <main>
            <div className="title">
                <h2>No tours left</h2>
                <button className="btn " onClick={fetchTours} style={{ marginTop: "2rem" }}>refresh</button>
            </div>
        </main>;
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
};

export default App;