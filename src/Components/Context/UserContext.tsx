// import { createContext,useState } from 'react'


// export type AuthUser = {
//     name: string
//     email: string
// }
// type UserContextProviderProp={
//     children:React.ReactNode
// }

// export const UserContext=createContext(null)

// export const UserContextProvider=({children}:UserContextProviderProp)=>{
//     const [user,setUser]=useState<AuthUser|null>(null)
//     return <UserContextProvider value={{user,setUser}} >{children}</UserContextProvider>
// }


/* 
Step 1 Create a New new context
Step 2 Create and export a context to manage a user in our application
Step 3 Create the component that provides the user context value
Step 4 Next define the provider component, so after the create context call we define the component
Step 5 Wrap user component with user context provider*/

import { createContext, useState } from "react" //---> Step 1

export type AuthUser={
    name:string
    email:string
}

type UserContextProviderProps={
    children:React.ReactNode
}//---> Step 3

type UserContextType={
    user:AuthUser|null
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext=createContext<UserContextType | null>(null)//---> Step 2

export const UserContextProvider=({children}:UserContextProviderProps)=>{
    const [user,setUser]=useState<AuthUser|null>(null)

    return <UserContext.Provider  value={{user,setUser}} >{children}</UserContext.Provider>
}//---> Step 4