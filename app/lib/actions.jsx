"use client"

import supabaseClient from "./supabaseClient"

    export async function signUpWithEmailAndPassword(email, password) {
        
        const supabase = supabaseClient()
        
        const result = await supabase.auth.signUp({email, password})

        return result 
        
    }
    
    
    export async function getSession() {

        const supabase = supabaseClient()

        const result = await supabase.auth.getSession()
        
        return result
        
    }

    export async function logInWithEmailAndPassword(email, password) {
        
        const supabase = supabaseClient()
        
        const result = await supabase.auth.signInWithPassword({email, password})

        return result 

    }


    export async function signOut() {

        const supabase = supabaseClient()

        try {
        const result = await supabase.auth.signOut()
        return result 

        } catch (error) {
        console.log(error)
        }
        
    }