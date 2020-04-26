import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";

const App = () => {
  const dispatch = useDispatch();
  const searchField = useSelector(
    (state) => state.searchRobots.searchField,
    []
  );
  const { isPending, robots, error } = useSelector(
    (state) => state.requestRobots,
    []
  );
  const onChange = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  useEffect(() => {
    dispatch(requestRobots());
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (isPending) return <h1>Loading.....</h1>;
  if (error) return <h1>{error}</h1>;

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
