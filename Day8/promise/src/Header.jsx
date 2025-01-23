import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [products, setProducts] = useState([]);
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products using Axios (fetching all todos as products)
    axios
      .get("https://jsonplaceholder.typicode.com/todos") // Fetch a list of todos
      .then((response) => {
        setProducts(response.data); // Set the products in state (using todos as products)
        return fetch('https://jsonplaceholder.typicode.com/todos/1'); // Fetch a single todo
      })
      .then(response => response.json()) // Convert the response to JSON using fetch
      .then(json => {
        setTodo(json); // Set the todo data in state
        setLoading(false); // Stop the loading state
        console.log(json); // Log the fetched todo to the console
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop the loading state even if there's an error
      });
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.title}</strong>
              </li>
            ))}
          </ul>
          <h2>Todo</h2>
          {todo && (
            <div>
              <strong>Title:</strong> {todo.title}
              <br />
              <strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
