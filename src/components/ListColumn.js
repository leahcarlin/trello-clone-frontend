import React, { useState } from "react";

//components
import EditCard from "./EditCard";

//styles
import { ListDiv, Card } from "../App.styles";

export default function ListColumn({ list, cardName, setCardName, lists }) {
  const [edit, setEdit] = useState(false);

  //toggle edit card pop-up
  const toggleEdit = (cardTitle) => {
    setEdit(!edit);
  };

  return (
    <ListDiv>
      <p>{list.title}</p>
      {list.cards.map((card) => (
        <Card key={card.cardTitle}>
          <button type="button" onClick={() => toggleEdit(card.cardTitle)}>
            {card.cardTitle}
          </button>
          {edit ? (
            <EditCard
              list={list}
              card={card}
              cardName={cardName}
              setCardName={setCardName}
              lists={lists}
              toggleEdit={toggleEdit}
            />
          ) : null}
        </Card>
      ))}
    </ListDiv>
  );
}
