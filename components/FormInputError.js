import React from "react"

function FormInputError({ error }) {
  return (
    error && (
      <div>
        <span className="text-red-500 text-sm">{error}</span>
      </div>
    )
  )
}

export default FormInputError
