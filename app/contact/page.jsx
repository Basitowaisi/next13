"use client"
import { useRouter } from "next/navigation"
import React from "react"
import ContactForm from "../../components/ContactForm"

function page() {
  const router = useRouter()

  const onSubmit = (values, event, reset) => {
    fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.status >= 400) {
          return res.json().then((data) => {
            let e = new Error()
            e = Object.assign(e, data)

            throw e
          })
        }
        return res.json()
      })
      .then((res) => {
        alert("Submission successful")
        reset()
      })
      .catch((e) => {
        alert(`Submission failed with error:  ${e.message} `)
        console.log(e)
      })
  }
  return (
    <div>
      <h1 className="text-2xl text-center m-4">Contact</h1>
      <ContactForm onSubmit={onSubmit} />
    </div>
  )
}

export default page
