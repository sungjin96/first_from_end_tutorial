import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [robotList, setRobotList] = useState(robots);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredRobots = robotList.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <SearchBox onChange={onChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
