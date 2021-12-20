import React from "react";

//styles
import { ListDiv, Card } from "../App.styles";

export default function ListColumn({ list }) {
  return (
    <ListDiv>
      <p>{list.title}</p>
      {list.cards.map((card) => (
        <Card>
          <button type="button">{card.cardTitle}</button>
        </Card>
      ))}
    </ListDiv>
  );
}
