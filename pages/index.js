import React from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/app.module.css";
import { connect } from "react-redux";

export const index = (props) => {
  return (
    <div className={styles.home}>
      <h1>Hello</h1>
      <div className={styles.homeButtons}>
        <Button className="buttonSpacing">Add</Button>
        <Button className="buttonSpacing">Subtract</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
