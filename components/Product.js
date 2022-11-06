import Link from "next/link"
import React from "react"
import currencyFormat from "../utils/currencyFormat"

function Product({ id, title, price, description, image, category, rating }) {
  return (
    <Link href={`/products/${id}`}>
      <div className="shadow-md max-w-sm p-4 m-4 flex flex-col rounded-md hover:scale-105 hover:cursor-pointer transition duration-150">
        <img src={image} className="w-[250px] object-contain" />
        <span class="self-start  capitalize px-4 py-2 rounded-full text-blue-500 bg-blue-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mt-6">
          {category}
        </span>
        <h1 className="font-bold my-3 line-clamp-1">{title}</h1>
        <p className="leading-snug text-gray-500 line-clamp-2">{description}</p>
        <p className="font-bold self-start">{currencyFormat(price)}</p>
      </div>
    </Link>
  )
}

export default Product
