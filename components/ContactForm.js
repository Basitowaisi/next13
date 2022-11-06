import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import FormInputError from "./FormInputError"

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Email is required.")
      .email("Please enter a valid email."),
    subject: yup
      .string()
      .required("Subject is required.")
      .min(30, "Please enter a min of 30 characters."),
    body: yup
      .string()
      .required("Message is required.")
      .min(50, "Please enter a min of 50 characters."),
  })
  .required()

function ContactForm({ onSubmit }) {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
      subject: "",
      body: "",
    },
  })
  const { errors } = formState
  const submitDisabled =
    !formState.isValid ||
    !formState.isDirty ||
    formState.isSubmitting ||
    Object.keys(errors).length > 0

  return (
    <form
      onSubmit={handleSubmit((values, event) => onSubmit(values, event, reset))}
    >
      <div className="container mx-auto pb-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <div className="mb-6">
              <input
                type="email"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email"
                {...register("email")}
              />
              <FormInputError error={errors?.email?.message} />
            </div>
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Subject"
                {...register("subject")}
              />
              <FormInputError error={errors?.subject?.message} />
            </div>

            <div className="mb-6">
              <textarea
                className="resize-none form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-slate-500"
                placeholder="Message..."
                {...register("body")}
              ></textarea>
              <FormInputError error={errors?.body?.message} />
            </div>

            <button
              type="submit"
              className={`inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ${
                submitDisabled
                  ? "bg-gray-300 text-gray-500 pointer-events-none"
                  : ""
              }`}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              disabled={submitDisabled}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
