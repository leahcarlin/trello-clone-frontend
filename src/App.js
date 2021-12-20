import { useState } from "react";

//components
import Welcome from "./components/Welcome";

function App() {
  const [boardName, setBoardName] = useState("");
  const [name, setName] = useState("");

  // create new board and store name of board
  const createBoard = (e) => {
    e.preventDefault();
    setName(boardName);
    setBoardName("");
  };

  return (
    <div className="App">
      {name === "" ? (
        <Welcome
          boardName={boardName}
          setBoardName={setBoardName}
          createBoard={createBoard}
        />
      ) : (
        <h2>{name}</h2>
      )}
    </div>
  );
}

export default App;
