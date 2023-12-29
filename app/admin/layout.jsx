"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../context/AuthProvider'
import { getSession } from '../lib/actions'
import Link from 'next/link'



export default function layout({children}) {

    const {setSession, session, state, setState} = useAuthContext()
    const [toggle, setToggle] = useState(true)
    const router = useRouter()


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
                <section className={`${toggle ? "absolute" : "hidden"} w-full bg-white h-screen p-2 md:static md:w-1/6 md:flex`}>
                    <div className='flex flex-col justify-center items-center h-full w-full'>
                        <Link href={"/admin/payments"} onClick={() => setToggle(!toggle)}>Cobros</Link>
                        <Link href={"/admin/customers"} onClick={() => setToggle(!toggle)}>Clientes</Link>
                        <Link href={"/admin/bio"} onClick={() => setToggle(!toggle)}>Bio</Link>
                    </div>
                </section>
                <section className='flex flex-col h-screen bg-slate-500 p-4 md:w-5/6'>
                            {children}
                            <button onClick={() => setToggle(!toggle)}>Changed</button>
                </section>
            </main>
        )
    }
}

