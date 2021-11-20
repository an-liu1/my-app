import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAPPStatistics } from "../../redux/actions";

export const Dashboard = (props) => {
  let handleOnClick = () => {
    props.getAPPStatistics();
    console.log(props);
  };
  return (
    <div>
      <h1>Dashboard</h1>
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
    getAPPStatistics: () => {
      dispatch(getAPPStatistics());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
