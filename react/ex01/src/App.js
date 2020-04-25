import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from './Scroll';
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [robotList, setRobotList] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        console.log(users);
        setRobotList(users);
      });
  }, []);

  const filteredRobots = robotList.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  if (robotList.length === 0) return <h1>Loading.....</h1>;

  return (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <SearchBox onChange={onChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
