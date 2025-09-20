import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
     const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [])

  return (
    <div>
        {data.map((item) => (
        <div key={item.id} style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
