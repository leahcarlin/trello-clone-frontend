import React, { useState } from "react";
import moment from "moment";

//styles
import { ModalContent } from "../App.styles";

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
  const [moveList, setMoveList] = useState("");

  // edit/update card details
  const updateCard = (e) => {
    e.preventDefault();
    const findList = lists.find(({ title }) => title === list.title);
    const findCard = findList.cards.find(
      ({ cardTitle }) => cardTitle === card.cardTitle
    );
    const cardIndex = findList.cards.indexOf(findCard);
    if (cardName !== "") {
      findCard.cardTitle = cardName;
      setCardName("");
    }
    if (description !== "") {
      findCard.description = description;
      setDescription("");
    }
    if (activity !== "") {
      findCard.activities = [
        ...findCard.activities,
        { action: activity, createdAt: Date.now() },
      ];
      setActivity("");
    }
    if (moveList !== "") {
      const addToList = lists.find(({ title }) => title === moveList);
      addToList.cards.push(findCard);
      findList.cards.splice(cardIndex, 1);
      setMoveList("");
    }
    toggleEdit();
  };
  return (
    <ModalContent>
      <span className="close" onClick={toggleEdit}>
        &times;
      </span>
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
          {card.activities.map((act) => (
            <li key={act.action}>
              {moment(act.createdAt).format("L")} | {act.action}
            </li>
          ))}
        </ul>
        <div className="move-card">
          <p>
            <span style={{ fontWeight: "300" }}>Current List:</span>{" "}
            {list.title}
          </p>
          <select
            id="list"
            defaultValue={"DEFAULT"}
            name="list"
            onChange={(e) => setMoveList(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Move Card
            </option>
            {lists.map((list) => (
              <option value={list.title} key={list.title}>
                {list.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </ModalContent>
  );
}
