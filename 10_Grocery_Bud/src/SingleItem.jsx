import { useState } from "react";


const SingleItem = ({ item, removeItem, editItem }) => {

    return (
        <article className="single-item">
            <input type="checkbox" checked={item.completed} onChange={() => editItem(item.id)} />
            <p style={{ textDecoration: item.completed && 'line-through', textTransform: "capitalize" }}>{item.name}</p>
            <button className="remove-btn btn" onClick={() => removeItem(item.id)}>delete</button>
        </article>
    );
};

export default SingleItem;