import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getAPPStatistics } from "../../redux/actions";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const DashboardHook = () => {
  let navigate = useNavigate();
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

  const handleOnClick = () => {
    dispatch({ type: "SWITCH_LOADING", payload: true });
    dispatch(getAPPStatistics()).then(() => {
      dispatch({ type: "SWITCH_LOADING", payload: false });
      console.log("Promise");
    });
  };
  const handleOnNav = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>You clicked {count.count} times</p>
      <p>{count.sum}</p>
      <Button
        type="primary"
        shape="round"
        className="mr-3"
        onClick={() => setCount({ count: 5 + Math.random(), sum: 456 })}
      >
        Click me
      </Button>
      <Button type="primary" shape="round" onClick={() => handleOnClick()}>
        Click
      </Button>
      <Button type="primary" shape="round" onClick={() => handleOnNav()}>
        Nav
      </Button>
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
