import React from "react"

function Comment({ email, name, body }) {
  return (
    <>
      <div className="mb-2 mt-2">
        <h3 className="capitalize font-semibold">{name}</h3>
        <p className="capitalize">{body}</p>
      </div>
      <hr />
    </>
  )
}

export default Comment
