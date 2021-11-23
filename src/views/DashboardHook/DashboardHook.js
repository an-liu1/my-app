import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getAPPStatistics } from "../../redux/actions";

export const DashboardHook = (props) => {
  const dispatch = useDispatch();
  const appData = useSelector((state) => state.appData);
  const [count, setCount] = useState({
    count: 0,
    sum: 0,
  });

  useEffect(() => {
    console.log("updated");
  });

  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    console.log("watch");
  }, [count.count]);

  let handleOnClick = () => {
    dispatch(getAPPStatistics()).then(() => {
      console.log("Promise");
    });
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <p>You clicked {count.count} times</p>
      <p>{count.sum}</p>
      <button onClick={() => setCount({ count: 5 + Math.random(), sum: 456 })}>
        Click me
      </button>
      <button type="button" onClick={() => handleOnClick()}>
        Click
      </button>
      <p>{appData.appOpenTimes || 123}</p>
      <p>{appData.carpool || 123}</p>
      <p>{appData.user || 123}</p>
    </div>
  );
};

// Dashboard.propTypes = {
//   props: PropTypes,
// };

export default DashboardHook;
