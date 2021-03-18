import React from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/app.module.css";
import { connect } from "react-redux";
import { addOne, subtractOne, resetNumber } from "../state/actions";

export const index = (props) => {
  return (
    <div className={styles.home}>
      <h1>{props.number}</h1>
      <div className={styles.homeButtons}>
        <Button className="buttonSpacing" onClick={props.addOneToCounterProps}>
          Add
        </Button>
        <Button
          className="buttonSpacing"
          onClick={props.subtractOneFromCounter}
        >
          Subtract
        </Button>
        <Button className="buttonSpacing" onClick={props.resetCounter}>
          Reset
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  number: state,
});

const mapDispatchToProps = {
  addOneToCounterProps: addOne,
  subtractOneFromCounter: subtractOne,
  resetCounter: resetNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
