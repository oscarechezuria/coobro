/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthContext } from '../context/AuthProvider'
import { getSession, signOut } from '../lib/actions'
import { FaUsers } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaUserGear, FaAlignCenter } from "react-icons/fa6";
import Link from 'next/link'



export default function layout({children}) {

    const {setSession, state, setState} = useAuthContext()
    const [toggle, setToggle] = useState(true)
    const [currentPath, setCurrentPath] = useState("")
    const router = useRouter()
    const getCurrentPath = usePathname()

    useEffect(() => {
        setCurrentPath(getCurrentPath)
    },[currentPath, getCurrentPath])


    useEffect(() =>{

        const getData = async () => {
            const res = await getSession()
            setSession(res)
        }
        getData()


        if (state === null) {
            router.push("/")
        }


    },[router, setSession, state])


    const handleSignOut = () => {
        signOut()
        setState(null)
        setToggle(!toggle)
    }


    const renderCurrentPath = () => {
        switch (currentPath) {
            case "/admin":
                    return "Tus Pagos"
                break;
            case "/admin/customers":
                    return "Tus Clientes"
                break;
            case "/admin/bio":
                    return "Tu Información"
                break;
            default:
                break;
        }
    }






    if (state === 0) {
        
        return(
            <div className='text-2xl text-two-500'>
                Cargando....
            </div>
        )
    }


    if (state === 1) {
        return (
            <main className={`flex flex-col w-full md:flex-row`}>
                <section className={`${toggle ? "absolute" : "hidden"} w-full bg-white h-screen p-2 border-r-2 border-r-three-500 md:static md:w-1/6 md:flex`}>
                    <div className='flex flex-col items-center gap-14 pt-20 h-full w-full'>
                        <h2 className='text-one-500 font-extrabold text-2xl underline underline-offset-8'>COOBRO</h2>
                        <ul className='flex flex-col gap-4 w-full'>
                            <Link href={"/admin"} onClick={() => setToggle(!toggle)} className='flex justify-center items-center gap-1 w-full py-2 text-xl rounded-xl hover:bg-slate-100 '>
                                <div className='flex justify-end w-1/3 mr-2'>
                                    <IoLogoUsd className='text-two-500 font-bold'/>
                                </div>
                                <div className='w-2/3 font-normal'>Cobros</div>
                            </Link>
                            <Link href={"/admin/customers"} onClick={() => setToggle(!toggle)} className='flex justify-center items-center gap-1 w-full py-2 text-xl rounded-xl hover:bg-slate-100 '>
                                <div className='flex justify-end w-1/3 mr-2'>
                                    <FaUsers className='text-two-500 font-bold'/>
                                </div>
                                <div className='w-2/3 font-normal'>Clientes</div>
                            </Link>
                            <Link href={"/admin/bio"} onClick={() => setToggle(!toggle)} className='flex justify-center items-center gap-1 w-full py-2 text-xl rounded-xl hover:bg-slate-100 '>
                                <div className='flex justify-end w-1/3 mr-2'>
                                    <FaUserGear className='text-two-500 font-bold'/>
                                </div>
                                <div className='w-2/3 font-normal' >Bio</div>
                            </Link>
                            <Link href={"/"} onClick={handleSignOut} className='flex justify-center items-center gap-1 w-full py-2 text-xl rounded-xl hover:bg-slate-100 '>
                                <div className='flex justify-end w-1/3 mr-2'>
                                    <FaArrowCircleLeft className='text-two-500 font-bold'/>
                                </div>
                                <div className='w-2/3 font-normal'>Cerrar Sesión</div>
                            </Link>
                        </ul>
                    </div>
                </section>
                <section className='flex flex-col h-screen p-4 md:w-5/6'>
                            <div className="flex justify-between p-4 items-center h-20 w-full border-b-4">
                                <h2 className="flex text-xl font-extrabold text-two-500 md:text-3xl">{renderCurrentPath()}</h2>
                                <FaAlignCenter className='block text-xl md:3xl md:hidden hover:cursor-pointer' onClick={() => setToggle(!toggle)}/>
                            </div>
                            {children}
                </section>
            </main>
        )
    }
}

