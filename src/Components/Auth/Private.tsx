// import React from 'react'

// import { Login } from'./Login'
// import  {Profile} from './Profile'
// type PrivateProps={
//     isLoggedIn:boolean
//     Component:React.ComponentType<ProfileProps/>
// }


// function Private({isLoggedIn,Component}) {
//     if(isLoggedIn){
//         return <Component name='Naz' />
//     } else {
//         return <Login/>
//     }

 
// }

// export default Private

import React from 'react';

import Login from './Login'; // Assuming Login is a default export
import Profile from './Profile'; // Assuming Profile is a default export

type PrivateProps = {
    isLoggedIn: boolean;
    Component: React.ComponentType<any>; // Adjust type accordingly
}

function Private({ isLoggedIn, Component }: PrivateProps) {
    if (isLoggedIn) {
        return <Component name='Naz' />;
    } else {
        return <Login />;
    }
}

export default Private;
