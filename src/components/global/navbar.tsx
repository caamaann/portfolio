import React from "react"

import Image from "next/image"
import Link from "next/link"

import { MENUS } from "@/data/menu"

import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <header className="container relative flex items-center justify-between py-5">
      <Image
        alt="logo"
        className="size-12"
        height={48}
        src={"/logo/logo.webp"}
        width={48}
      />
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
          {MENUS.map((menu, i) => (
            <li key={i}>
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </header>
  )
}
