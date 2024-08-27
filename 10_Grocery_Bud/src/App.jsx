import { useState } from "react";
import { nanoid } from "nanoid";
import { toast, ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";

const getLocalStorage = () => {
  const list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {

  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.error("item deleted");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const clearAll = () => {
    if (items.length > 0) {
      localStorage.removeItem("list");
      setItems([]);
    }
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} clearAll={clearAll} />

      <ToastContainer position="top-center" autoClose={1000} />
    </section>
  );
};
export default App;