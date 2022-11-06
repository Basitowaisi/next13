import Image from "next/image"
import React from "react"
import Comment from "../../../components/Comment"

const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"
const COMMENTS_ENDPOINT = "https://jsonplaceholder.typicode.com/comments"

// For Static Site Generation
// export async function generateStaticParams() {
//   const response = await fetch(POSTS_ENDPOINT)
//   const posts = await response.json()

//   return posts.map((post) => ({
//     id: `${post.id}`,
//   }))
// }

const fetchPost = async (id) => {
  const response = await fetch(
    `${POSTS_ENDPOINT}/${id}`
    // , {
    // For SSG
    // cache: "force-cache",
    // }
  )
  const post = await response.json()
  return post
}

export default async function page({ params }) {
  const post = await fetchPost(params.id)
  console.log(`Refetching...`)
  const commentsResponse = await fetch(
    `${COMMENTS_ENDPOINT}?postId=${params.id}`
  )
  const comments = await commentsResponse.json()
  const { title, body } = post
  return (
    <div>
      <article className="m-2 md:m-8">
        <figure className="max-h-[500px]">
          <Image
            src={`https://picsum.photos/1600/500?id=${params.id}`}
            alt={title}
            width="1600"
            height="500"
          />
        </figure>
        <h1 className="mt-6 text-xl md:text-3xl text-black capitalize">
          {title}
        </h1>
        <p className="text-gray-600">{body}</p>
      </article>

      <div className="p-2 md:py-4 md:px-8 bg-gray-100">
        <h2 className="text-2xl font-semibold mt-0 mb-4">Comments</h2>
        {comments.map((c, index) => (
          <Comment {...c} key={index} />
        ))}
      </div>
    </div>
  )
}
