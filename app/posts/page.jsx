import Posts from "../../components/Posts"
// import Button from "./Button"
import { notFound } from "next/navigation"

const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"

// export async function generateStaticParams() {
//   const response = await fetch(POSTS_ENDPOINT)
//   const posts = await response.json()

//   return posts.map((post) => ({
//     id: post.id,
//   }))
// }

export default async function Home() {
  const response = await fetch(POSTS_ENDPOINT)
  const posts = await response.json()
  if (!response.ok) {
    throw new Error("Failed to load posts")
  }
  // notFound()

  console.log("Loaded on the server")

  return (
    <div>
      {/* <Button /> */}
      <Posts posts={posts} />
    </div>
  )
}
