import React from "react";

export default function Welcome({ boardName, setBoardName, createBoard }) {
  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={createBoard}>
        <label>Start by naming your board:</label>
        <input
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          type="text"
          id="boardName"
        ></input>
        <button type="submit">Create my board</button>
      </form>
    </div>
  );
}
