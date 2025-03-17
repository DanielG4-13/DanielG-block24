import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log("featuredPup: ", featuredPup);
  
  return (
    <>
      <div className="card">
      {featPupId && (
        <div className="pupInfo">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
     return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
   })}
      </div>
    </>
  )
}
export default App

//    })
// }
//       {/* <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
        
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */ }
//     </>
//   )
// }
