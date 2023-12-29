"use client"
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { logInWithEmailAndPassword } from '../lib/actions'
import { useAuthContext } from '../context/AuthProvider'
import { useRouter } from 'next/navigation'


const initialStateValues = {
    email: '',
    password: '',
}

export default function page() {

    const {setUser, state, setState, session } = useAuthContext()
    const router = useRouter()
    const [values, setvalues] = useState(initialStateValues)


    useEffect(() => {

        if (state === 1) {
            router.push("/admin")
        }

    },[router, state])


    const handleInputChange = (e) => {

            const {name, value} = e.target;
            setvalues({...values,
                    [name]: value 
            });
    }

    async function submitHandler(e){
        e.preventDefault()

        try {
        const email = values.email
        const password = values.password
        
        const result = await logInWithEmailAndPassword(email, password)

        if (result) {
            setUser(result)
            setState(1)
        }else{
            console.log("Error")
        }

        } catch (error) {
        console.log(error.message)
        }

    }

    if (state === null) {

        return (
            <div className='flex flex-col min-h-screen'>
        
                    <div className='flex w-full m-auto'>
                        <div className='m-auto grid auto-cols-auto'>
                        <div className='flex flex-col my-8'>
                            <h1 className='text-center text-2xl text-one-500 font-bold'>Iniciar Seción</h1>
                        </div>
            
                        <form className='flex flex-col w-full' onSubmit={submitHandler}>
                            <div className='flex flex-col'>
                                <label className='mb-1 text-one-500 font-semibold'>Email</label>
                                <input  
                                type="text" 
                                className='mb-6 rounded p-2 bg-three-500' 
                                placeholder='example@gmail.com' 
                                name='email'
                                onChange={handleInputChange}
                                value={values.email}
                                />
            
                                <label className='mb-1 text-one-500 font-semibold'>Contraseña</label>
                                <input 
                                    type="password" 
                                    className='mb-6 rounded p-2 bg-three-500 ' 
                                    placeholder='******' 
                                    name='password'
                                    onChange={handleInputChange}
                                    value={values.password}
                                    />
                            </div>
                            <Link href={"/signup"} className='text-sm mb-6'>No tengo cuenta</Link>
                            <button type='submit' className='rounded-xl text-center text-lg text-black bg-two-500 py-2 px-4 hover:bg-yellow-500 duration-500'>Iniciar Seción</button>
                        </form>
                        </div>  
                    </div>
            </div>
        )
    }

    if (state === 0) {
        <div className='text-2xl text-two-500'>
            Cargando....
        </div>
    }

}
