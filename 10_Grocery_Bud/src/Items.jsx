import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem, clearAll }) => {


    return (
        <div className="items">
            {items.map((item) => {
                return <SingleItem item={item} key={item.id} removeItem={removeItem} editItem={editItem} />;
            })}

            {items.length > 0 && <button className="btn" onClick={clearAll}>Clear All</button>}
        </div>
    );
};
export default Items;