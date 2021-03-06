import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAPPStatistics } from "../../redux/actions";

export const Dashboard = (props) => {
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
    props.getAPPStatistics().then(() => {
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
      <p>{props.appData.appOpenTimes || 123}</p>
      <p>{props.appData.carpool || 123}</p>
      <p>{props.appData.user || 123}</p>
    </div>
  );
};

// Dashboard.propTypes = {
//   props: PropTypes,
// };

const mapStateToProps = (state) => {
  return { appData: state.appData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAPPStatistics: async () => {
      await dispatch(getAPPStatistics());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
