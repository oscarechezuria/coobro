"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Children } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../context/AuthProvider'
import { signOut } from '../lib/actions'

export default function page({Children}) {


    const {setState, session, state} = useAuthContext()
    const router = useRouter()

    const handleSignOut = () => {
        signOut()
        setState(null)
    }

    return (
        <div>
            <h2>administrador</h2>
            <button onClick={handleSignOut}>Cerrar Sesion</button>
        </div>
    )
}
