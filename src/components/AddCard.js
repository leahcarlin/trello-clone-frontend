import React from "react";

export default function AddCard({ cardName, setCardName, createCard, lists }) {
  return (
    <form>
      <input
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        type="text"
        id="cardName"
        placeholder="Give the card a title..."
      ></input>
      <p>Add to list:</p>
      {lists.map((list) => (
        <button
          type="button"
          key={list.title}
          onClick={(e) => createCard(e, list.title)}
        >
          <i class="bi bi-plus-circle" style={{ marginRight: "5px" }}></i>
          {list.title}
        </button>
      ))}
    </form>
  );
}
