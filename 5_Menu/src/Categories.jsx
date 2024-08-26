const Categories = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories.map((category) => {
                return <button className="btn" type="button" key={category} onClick={() => filterItems(category)}>{category}</button>;
            })}
        </div>
    );
};
export default Categories;