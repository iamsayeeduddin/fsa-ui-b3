import styles from "./Lang.module.css";

const Lang = ({ ln }) => {
  // const cStyle = {
  //   color: "black",
  //   paddingTop: "8px",
  //   backgroundColor: "maroon",
  // };

  return <p className={styles.p}>{ln}</p>;
};

export default Lang;
