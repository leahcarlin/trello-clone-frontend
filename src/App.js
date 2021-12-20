import { useState } from "react";

//components
import Welcome from "./components/Welcome";

//styles
import { Header } from "./App.styles";

function App() {
  const [boardName, setBoardName] = useState("");
  const [name, setName] = useState("");
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);

  // create new board and store name of board
  const createBoard = (e) => {
    e.preventDefault();
    setName(boardName);
    setBoardName("");
  };

  // create a new list (column)
  const createList = (e) => {
    e.preventDefault();
    setLists([...lists, { title: listName, cards: [] }]);
    setListName("");
  };

  console.log("lists?", lists);

  return (
    <div className="App">
      {name === "" ? (
        <Welcome
          boardName={boardName}
          setBoardName={setBoardName}
          createBoard={createBoard}
        />
      ) : (
        <Header>
          <h3>{name}</h3>
          <form onSubmit={createList}>
            <input
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              type="test"
              id="listName"
              placeholder="Add a list..."
            ></input>
            <button type="submit">Add</button>
          </form>
        </Header>
      )}
      <div>
        {lists.map((list) => (
          <p>{list.title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
