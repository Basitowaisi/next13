import React from "react"
import Product from "../../components/Product"

const PRODUCTS_ENDPOINT = `https://fakestoreapi.com/products`

async function page() {
  const response = await fetch(PRODUCTS_ENDPOINT, {
    method: "GET",
  })
  const products = await response.json()
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {products.map((pr) => (
        <Product key={pr.id} {...pr} />
      ))}
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </div>
  )
}

export default page
