import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [products, setProducts] = useState([]);
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setProducts(response.data);
        return fetch('https://jsonplaceholder.typicode.com/todos/1');
      })
      .then(response => response.json())
      .then(json => {
        setTodo(json);
        setLoading(false);
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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
