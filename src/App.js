import { useState } from "react";

//components
import Welcome from "./components/Welcome";
import ListColumn from "./components/ListColumn";
import AddCard from "./components/AddCard";

//styles
import { Header, ListColumns } from "./App.styles";

function App() {
  const [boardName, setBoardName] = useState("");
  const [name, setName] = useState("");
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);
  const [addCard, setAddCard] = useState(false);
  const [cardName, setCardName] = useState("");

  // create new board and store name of board
  const createBoard = (e) => {
    e.preventDefault();
    if (boardName === "") {
      alert("Please give your board a title");
    } else {
      setName(boardName);
      setBoardName("");
    }
  };

  // create a new list (column)
  const createList = (e) => {
    e.preventDefault();
    if (listName === "") {
      alert("Please give your list a title");
    } else {
      setLists([...lists, { title: listName, cards: [] }]);
      setListName("");
    }
  };

  // add card to a list
  const createCard = (e, listTitle) => {
    console.log("card title?", listTitle);
    const findList = lists.find(({ title }) => title === listTitle);
    if (cardName === "") {
      alert("Please give your card a title");
    } else {
      findList.cards.push({ cardTitle: cardName });
      setCardName("");
    }
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
      <ListColumns>
        {lists.map((list) => (
          <ListColumn list={list} />
        ))}
      </ListColumns>
      {lists.length > 0 ? (
        <button type="button" onClick={() => setAddCard(!addCard)}>
          Add Card
        </button>
      ) : null}
      {addCard ? (
        <AddCard
          cardName={cardName}
          setCardName={setCardName}
          createCard={createCard}
          lists={lists}
        />
      ) : null}
    </div>
  );
}

export default App;
