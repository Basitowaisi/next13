"use client"
import React from "react"

function error({ error }) {
  console.log(error)
  return <div>loading single post failed</div>
}

export default error
