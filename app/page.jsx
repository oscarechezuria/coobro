"use client"

import { useAuthContext } from "./context/AuthProvider"
import { useState } from "react";
import { FaAlignCenter } from "react-icons/fa6";
import Link from "next/link"

export default function Home() {

  const {setUser, state, setState, session } = useAuthContext()
  const [open, setOpen] = useState(false)
  console.log(open)

  return (
    <main>
          <header className="border-three-500 border-b-4">
            <nav className={`${open ? "flex flex-col" : "flex flex-row"} justify-between py-4 px-8 text-2xl md:py-4 md:px-14`}>
              <div className="flex justify-between w-full items-center">
                <h2 className="text-three-500 font-bold text-3xl">Coobro</h2>
                <FaAlignCenter className="block text-3xl md:hidden" onClick={() => setOpen(!open)}/>
              </div>
              <ul className={`${open ? "block" : "hidden"} font-semibold md:flex md:justify-center md:items-center`}>
                <div className="flex flex-col justify-between items-center gap-4 mt-8 md:flex md:flex-row md:mt-0">
                  <Link href={"/login"} className={`text-black whitespace-nowrap`}>Iniciar Sesión</Link>
                  <Link href={"/signup"} className={`bg-one-500 rounded-lg p-3 text-white hover:bg-opacity-80`}>Registrarse</Link>
                </div>
              </ul>
            </nav>
          </header>
            <div className="flex gap-2 mt-7">
              <div className="w-16 h-14 bg-one-500 text-white px-3  rounded-md ">1</div>
              <div className="w-16 h-14 bg-two-500 text-white px-3  rounded-md ">2</div>
              <div className="w-16 h-14 bg-yellow-400 text-white px-3  rounded-md ">3</div>
              <div className="w-16 h-14 bg-three-500 text-white px-3  rounded-md ">4</div>
            </div>
    </main>
  )
}
