const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
    return (
        <div className="btn-container">
            {jobs.map((job, index) => {
                return (
                    <button className={index === currentItem ? 'job-btn active-btn' : 'job-btn'} key={job.id} onClick={() => setCurrentItem(index)}>
                        {job.company}
                    </button>
                );
            })}
        </div>
    );
};
export default BtnContainer;