import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("NOOOOOOO!");
  }
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
            id={robot.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
