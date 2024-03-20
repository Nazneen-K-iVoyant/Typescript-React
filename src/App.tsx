// import React from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import Greet from './Components/Greet';
// import Person from './Components/Person';
// import PersonList from './Components/PersonList';
// import Status from './Components/Status';
// import Heading from './Components/Heading';
// import Oscar from './Components/Oscar';
// import Button from './Components/Button';
// import Input from './Components/Input';
// import Container from './Components/Container';
// import LoggedIn from './Components/States/LoggedIn';
// import User from './Components/States/User';
// import Count from './Components/States/Count';

// function App() {
//   const personName = {
//     first: 'Bruce',
//     last: 'Wayne'
//   }


//   const nameList = [
//     {
//       first: 'Bruce',
//       last: 'wayne'
//     },
//     {
//       first: 'Clark',
//       last: 'Kent'
//     },
//     {
//       first: 'Princess',
//       last: 'Diana'
//     }

//   ]
//   return (
//     <div className="App">
//       {/* <Greet name='Naz' messageCount={20} isLoggedIn={false} /> */}
//       {/* <Person name={personName} />
//       <PersonList name={nameList} />
//       <Status status='loading' />
//       <Heading>Placeholder Text!</Heading>
//       <Oscar>
//         <Heading>Oscar goes to Leonardo Dicarpio</Heading>
//       </Oscar>
//       <Greet name='Vishwas'  isLoggedIn={false} /> */}

//       {/* <Button handleClick={(event,id)=>{
//         console.log('Button Clicked',event,id)
//       }} /> */}

//       {/* <Input value='' handleChange={(event)=>console.log(event)}  /> */}
//       {/* <Input value='' handleChange={(event)=>console.log(event)}/> */}

//       {/* <Container styles={{border:'1px solid black', padding:'1rem',display:0}}/> */}
//       {/* <LoggedIn/>
//       <User/> */}
//       <Count/>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { ThemeContextProvider } from './Components/Context/ThemeContext'
import './App.css'
import Box from './Components/Context/Box'
import { UserContextProvider } from './Components/Context/UserContext'
import User from './Components/Context/User'
import MutableRef from './Components/Refs/MutableRef'
import Counter from './Components/Class/Counter'
// import {User} from './Components/Context/User'

function App() {
  return <div className='App'>
    {/* <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider> */}
{/* 
    <UserContextProvider>
      <User/>
    </UserContextProvider> */}
    {/* <MutableRef/> */}
    <Counter message='The message count is'/>

  </div>
}

export default App