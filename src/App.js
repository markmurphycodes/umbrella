import React, { useState } from "react";
import axios from "axios";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const handleClick = () => {
    const fetchData = async (page) => {
      let tmp = data;

      let res = await axios.get(`http://localhost:8000/?page=${page}`);

      res.data.forEach((ch) => {
        tmp.push(ch);
      });

      tmp = tmp.sort((a, b) => {
        return a.name > b.name;
      });

      setPage((page) => page + 1);

      setData(tmp);
    };

    fetchData(page);
  };

  return (
    <div className="App">
      <div className="container">
        <h3>Character Fetcher</h3>
        <h4>Page {page}</h4>
        <div>
          {data.map((character) => {
            return (
              <p key={character.char_id}>
                {character.name} aka. {character.nickname}
              </p>
            );
          })}
        </div>
        <Button click={handleClick} />
      </div>
    </div>
  );
}

export default App;
