import React from "react"
import styles from "./Alert.module.css"

function Alert({ position, onClickHide, variant }) {
  let style

  switch (position) {
    default:
      style = {
        bottom: 10,
        right: 10,
      }
  }

  switch (variant) {
    case "SUCCESS":
      style["--bg-color"] = "green"
      style["--body-color"] = "white"
      style["--title-color"] = "white"
      style["--close-color"] = "white"

    case "ERROR":
      style["--bg-color"] = "red"
      style["--body-color"] = "white"
      style["--title-color"] = "white"
      style["--close-color"] = "white"
  }

  const onHide = () => onClickHide()

  return (
    <div className={styles.alert} style={style}>
      <div className={styles.alertContent}>
        <span className={styles.closeBtn} onClick={onHide}>
          &times;
        </span>
        <div className={styles.alertTitle}>
          <h2>Alert</h2>
        </div>
        <div className={styles.alertBody}>
          <p>Alert body</p>
        </div>
      </div>
    </div>
  )
}

export default Alert
