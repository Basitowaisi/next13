"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import styles from "./Navigation.module.css"

function Navigation() {
  const pathname = usePathname()

  const links = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/posts",
      label: "Posts",
      active: pathname === "/posts",
    },
    {
      href: "/products",
      label: "Products",
      active: pathname === "/products",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header>
      <nav>
        <ul className={"bg-blue-400 flex items-center"}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                className={`text-white/75 hover:text-white hover:underline p-4 inline-block ${
                  l.active ? "underline text-white" : ""
                }`}
                href={l.href}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
