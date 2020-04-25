import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
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
        setRobotList(users);
      });
  }, []);

  const filteredRobots = robotList.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  if (!robotList.length) return <h1>Loading.....</h1>;

  return (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <SearchBox onChange={onChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
