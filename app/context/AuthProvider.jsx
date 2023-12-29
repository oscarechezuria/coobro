"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { getSession } from "../lib/actions"

const ContextAuthProvider = createContext()

export const useAuthContext = () => {
    const context = useContext(ContextAuthProvider)
    if(!context) throw new Error("useContextGlobal must used within a provider")
    return context
}


export default function AuthProvider({children}) {
    const [user, setUser] = useState([])
    const [session, setSession] = useState(null)
    const [state, setState] = useState(0)

        useEffect(() => {

            const authData = async () => {
        
                const result = await getSession()
        
                if(result){
                    if(!result.data.session){
                        setState(null)
                    }else{
                        setSession(result)
                        setState(1)
                    }
                }else{
                    console.log("error")
                }
        
            }
        
            authData()
            
        },[])
        
    

    return (
        <ContextAuthProvider.Provider value={{user, setUser, session, setSession, state, setState}}>
            {children}
        </ContextAuthProvider.Provider>
    )
}
