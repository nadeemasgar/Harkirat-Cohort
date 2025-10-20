import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "./store/cartSlice";

const food = [
  "biryani",
  "pizza",
  "choclate",
  "butter chicken",
  "chowmin",
  "sandwich",
  "burger",
  "sweets",
  "tea",
  "drink",
];

function App() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("cartItems", cartItems);

  const addHandler = () => {
    const idx = Math.floor(Math.random() * 10);
    const userItem = food[idx];
    dispatch(addItem(userItem));
  };

  const deleteHandler = () => {
    const idx = Math.floor(Math.random() * cartItems.length);
    dispatch(removeItem(idx));
  };

  const clearHandler = () => {
    dispatch(clearItem());
  };

  return (
    <>
      <div>Cart - {cartItems.length}</div>
      <div onClick={addHandler}>Add Item</div>
      <div onClick={deleteHandler}>Delete Item</div>
      <div onClick={clearHandler}>Clear Cart</div>

      {cartItems?.map((cart, idx) => (
        <div key={idx}>{cart}</div>
      ))}
    </>
  );
}

export default App;
