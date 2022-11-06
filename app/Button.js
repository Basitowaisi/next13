"use client"

import React, { useCallback, useState } from "react"
import Alert from "./Alert"

function Button() {
  const [showAlert, setShowAlert] = useState(false)
  const hideHandler = useCallback(() => setShowAlert(false), [])
  return (
    <>
      <button type="button" onClick={() => setShowAlert(true)}>
        Show Alert
      </button>
      {showAlert && (
        <Alert
          position={"BOTTOM_RIGHT"}
          onClickHide={hideHandler}
          variant="ERROR"
        />
      )}
    </>
  )
}

export default Button
