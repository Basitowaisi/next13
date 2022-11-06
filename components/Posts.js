import Link from "next/link"
import React from "react"
import styles from "./Posts.module.css"

function Posts({ posts }) {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 m-4"}>
      {posts.map((p) => (
        <article className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white w-full">
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 line-clamp-1 capitalize">
                {p.title}
              </h5>
              <p className="text-gray-700 text-base mb-4 capitalize line-clamp-2">
                {p.body}
              </p>
              <Link
                href={`/posts/${p.id}`}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                View Post
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Posts
