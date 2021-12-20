import React, { useState } from "react";

//styles
import { ListColumns, ModalContent } from "../App.styles";

export default function EditCard({
  list,
  card,
  cardName,
  setCardName,
  lists,
  toggleEdit,
}) {
  const [description, setDescription] = useState("");
  const [activity, setActivity] = useState("");

  // edit/update card details
  const updateCard = (e) => {
    e.preventDefault();
    const findList = lists.find(({ title }) => title === list.title);
    const findCard = findList.cards.find(
      ({ cardTitle }) => cardTitle === card.cardTitle
    );
    if (cardName !== "") {
      findCard.cardTitle = cardName;
    }
    if (description !== "") {
      findCard.description = description;
    }
    if (activity !== "") {
      findCard.activities = [...findCard.activities, activity];
    }

    toggleEdit();
  };
  return (
    <ModalContent>
      <form onSubmit={updateCard}>
        <h3>
          <span style={{ fontWeight: "300" }}>Card:</span> {card.cardTitle}{" "}
        </h3>
        <label>Title</label>
        <br></br>
        <input
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          type="text"
          name="cardTitle"
          placeholder={card.cardTitle}
        ></input>
        <br></br>
        <label>Description</label>
        <br></br>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder={card.description}
        ></input>
        <br></br>
        <label>Activity</label>
        <br></br>
        <input
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          type="text"
          name="activity"
          placeholder="Write a comment..."
        ></input>
        <ul>
          {card.activities.map((action) => (
            <li>{action}</li>
          ))}
        </ul>
        <br></br>
        <p>
          <span style={{ fontWeight: "300" }}>Current List:</span> {list.title}
        </p>
        <label for="lists">Move card to list</label>
        <select id="list" name="list">
          {lists.map((list) => (
            <option value={list.title} key={list.title}>
              {list.title}
            </option>
          ))}
        </select>
        <br></br>
        <button type="submit">Save</button>
      </form>
    </ModalContent>
  );
}
