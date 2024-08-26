import { useState, useEffect } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";


const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const [jobs, setJobs] = useState([]);

  // fetch jobs
  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // loading
  if (loading) {
    return <div className="jobs-center">
      <div className="loading"></div>
    </div>;
  }

  return (
    <section className="jobs-center">
      {/* btn container */}
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;